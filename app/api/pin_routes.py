from flask import Blueprint, request
from flask_login import login_required, current_user
from flask_wtf.csrf import generate_csrf
from ..forms.pin_form import PinForm
from app.models import Pin, db, User, saved_pins
from .AWS_helpers import get_unique_filename, upload_file_to_s3

pin_routes = Blueprint('pins', __name__)


@pin_routes.route('/allPins')
@login_required
def all_pins():
    """
    Query for all pins and returns them in a list of user dictionaries
    """
    pins = Pin.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}


@pin_routes.route('/singlePin/<int:pin_id>')
@login_required
def single_pin(pin_id):
    """
    Query for one pin and return it in a dictionary
    """
    pin = Pin.query.filter(Pin.id == pin_id).one()
    pin_dict = pin.to_dict()
    user_dict = pin.user.to_dict()
    del user_dict['saved_pins']
    pin_dict['user'] = user_dict

    return {"pin": pin_dict}

@pin_routes.route('/singlePin', methods=['POST'])
@login_required
def create_pin():
    """
    Create pin
    """
    data = request.files
    user = current_user

    form = PinForm(
        image=data.get('imgFile'),
        title=data.get('title'),
        description=data.get('description'),
        user_id=user.id,
        csrf_token=generate_csrf()
    )

    if form.validate_on_submit():
        image = form.data["image"]

        image.filename = get_unique_filename(image.filename)

        # Upload our image to AWS
        uploadImage = upload_file_to_s3(image)

        # If song or upload failed to AWS return error message
        if "url" not in uploadImage:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to upload
            # so we send back that error message
            return {"message": "Error uploading file to AWS", "status": 500}

        imageURL = uploadImage["url"]

        new_pin = Pin(
            image_url=imageURL,
            title=form.data['title'],
            description=form.data['description'],
            user_id=user.id
        )
        db.session.add(new_pin)
        db.session.commit()
        return {"message": "Succesfully Uploaded Pin", "status": 201}

    if form.errors:
        return {"message": "Invalid Data", "status": 403}


@pin_routes.route('/updatePin/<int:pin_id>', methods=['PUT'])
@login_required
def update_pin(pin_id):
    pin = Pin.query.filter(Pin.id == pin_id).one()
    data = request.json

    if pin:
        pin.title = data.get('title')
        pin.description = data.get('description')
        db.session.commit()
        updatedPin = Pin.query.filter(Pin.id == pin_id).one()
        pin_dict = updatedPin.to_dict()
        user_dict = pin.user.to_dict()
        pin_dict['user'] = user_dict

        return {'updatedPin': pin_dict}
    else:
        return {'error': 'Pin not found', 'status': 404}


@pin_routes.route('/deletePin/<int:pin_id>', methods=['DELETE'])
@login_required
def delete_pin(pin_id):
    """
    Query for one pin and delete it
    """
    pin = Pin.query.filter(Pin.id == pin_id).one()

    if pin:
        db.session.delete(pin)
        db.session.commit()
        return {'message': 'Pin deleted successfully', 'status': 200}
    else:
        return {'error': 'Pin not found', 'status': 404}


@pin_routes.route('/savePin')
@login_required
def all_saved_pins():
    """
    Query for all saved pins for the logged user
    """
    user = User.query.get(current_user.id)
    if not user:
        return {'error': 'User not found'}, 404

    saved_pins = [pin.to_dict() for pin in user.saved_pins]
    return {'saved_pins': saved_pins}


@pin_routes.route('/savePin/<int:pin_id>', methods=['POST'])
@login_required
def save_pin(pin_id):
    """
    Save a pin for a user
    """

    user = User.query.get(current_user.id)
    if not user:
        return {'error': 'User not found'}, 404

    pin = Pin.query.get(pin_id)
    if not pin:
        return {'error': 'Pin not found'}, 404

    # user.pins.append(pin)

    # Add entry to board_pins table
    db.session.execute(saved_pins.insert().values(
        user_id=current_user.id, pin_id=pin_id))
    db.session.commit()

    return { 'pin': pin.to_dict() }, 201


@pin_routes.route('/unsavePin/<int:pin_id>', methods=['DELETE'])
@login_required
def unsave_pin(pin_id):
    """
    Unsave a pin for a user
    """

    user = User.query.get(current_user.id)
    if not user:
        return {'error': 'User not found'}, 404

    pin = Pin.query.get(pin_id)
    if not pin:
        return {'error': 'Pin not found'}, 404

    # if pin not in user.pins:
    #     return {'error': 'Pin not saved for this user'}, 400

    # user.pins.remove(pin)

    # Remove entry from board_pins table
    delete_stmt = saved_pins.delete().where((saved_pins.c.user_id == current_user.id) & (saved_pins.c.pin_id == pin_id))
    db.session.execute(delete_stmt)
    db.session.commit()

    return { 'pin': pin.to_dict() }

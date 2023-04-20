from flask import Blueprint, request
from flask_login import login_required, current_user
from flask_wtf.csrf import generate_csrf
from ..forms.pin_form import PinForm
from app.models import Pin, db
from .AWS_helpers import get_unique_filename, upload_file_to_s3

pin_routes = Blueprint('pins', __name__)


@pin_routes.route('/')
@login_required
def all_pins():
    """
    Query for all pins and returns them in a list of user dictionaries
    """
    pins = Pin.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}


@pin_routes.route('/', methods=['POST'])
@login_required
def create_pin():
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

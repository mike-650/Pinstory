from flask import Blueprint, request
from flask_login import login_required, current_user
from flask_wtf.csrf import generate_csrf
from ..forms.pin_form import PinForm
from app.models import Pin

pin_routes = Blueprint('pins', __name__)


@pin_routes.route('/')
def all_pins():
    """
    Query for all pins and returns them in a list of user dictionaries
    """
    pins = Pin.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}


@pin_routes.route('/', methods=['POST'])
# @login_required
def create_pin():
    data = request.files
    # user = current_user

    # print('USER    :   ', user)

    # form = PinForm(
    #     image=data.get('imgFile'),
    #     title=data.get('title'),
    #     description=data.get('description'),
    #     user_id=data.get('user_id'),
    #     csrf_token=generate_csrf()
    # )

    # if form.validate_on_submit():
    #     return {"VALIDATED": 'Made it'}
    #     song = form.data["mp3File"]
    #     coverImage = form.data["coverImage"]

    #     song.filename = get_unique_filename(song.filename)
    #     coverImage.filename = get_unique_filename(coverImage.filename)

    #     # Upload our song and image to AWS
    #     uploadSong = upload_file_to_AWS(song)
    #     uploadImage = upload_file_to_AWS(coverImage)

    #     # If song or upload failed to AWS return error message
    #     if "url" not in uploadSong and uploadImage:
    #         # if the dictionary doesn't have a url key
    #         # it means that there was an error when we tried to upload
    #         # so we send back that error message
    #         return {"message": "Error uploading file to AWS", "status": 500}

    #     songURL = uploadSong["url"]
    #     imageURL = uploadImage["url"]

    #     # Retrieve the file contents from the URL using requests.get()
    #     response = requests.get(songURL)

    #     # Pass the file contents to the MP3() function using BytesIO()
    #     audio = MP3(BytesIO(response.content))

    #     audio_info = audio.info

    #     length = int(audio_info.length)
    #     mins, seconds = audio_duration(length)
    #     songDuration = f'{mins}.{seconds}'

    #     new_song = Song(
    #         title=form.data['title'],
    #         genre=form.data['genre'],
    #         coverImage=imageURL,
    #         mp3file=songURL,
    #         duration=float(songDuration),
    #         artistName=form.data['artistName'],
    #         user_id=user.id
    #     )
    #     db.session.add(new_song)
    #     db.session.commit()
    #     return {"message": "Succesfully Uploaded Song", "status": 201}

    # if form.errors:
    #     return {"message": "Invalid Data", "status": 403}

# @user_routes.route('/<int:id>')

# def user(id):
#     """
#     Query for a user by id and returns that user in a dictionary
#     """
#     user = User.query.get(id)
#     return user.to_dict()

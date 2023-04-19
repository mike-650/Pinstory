from flask import Blueprint
from app.models import Pin

pin_routes = Blueprint('pins', __name__)


@pin_routes.route('/')
def users():
    """
    Query for all pins and returns them in a list of user dictionaries
    """
    pins = Pin.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}


# @user_routes.route('/<int:id>')

# def user(id):
#     """
#     Query for a user by id and returns that user in a dictionary
#     """
#     user = User.query.get(id)
#     return user.to_dict()

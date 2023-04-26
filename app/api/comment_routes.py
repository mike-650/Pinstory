from flask import Blueprint, request
from flask_login import login_required, current_user
from flask_wtf.csrf import generate_csrf
from ..forms.pin_form import PinForm
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/comments/<int:pin_id>')
@login_required
def pin_comments():
    """
    Query for all comments associated with a pin and returns them in a list of comment dictionaries
    """
    # pins = Pin.query.all()
    pass
    # return {'pins': [pin.to_dict() for pin in pins]}

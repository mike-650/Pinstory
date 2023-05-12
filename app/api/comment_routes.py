from flask import Blueprint, request
from flask_login import login_required, current_user
from flask_wtf.csrf import generate_csrf
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/<int:pin_id>')
@login_required
def pin_comments(pin_id):
    """
    Query for all comments associated with a pin and returns them in a list of comment dictionaries
    """
    comments = Comment.query.filter_by(pin_id=pin_id).all();

    return {'comments': [comment.to_dict() for comment in comments]}

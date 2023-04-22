from flask import Blueprint, request
from flask_login import login_required, current_user
from flask_wtf.csrf import generate_csrf
# from ..forms.pin_form import PinForm
from sqlalchemy.orm.exc import NoResultFound
from app.models import Board, board_pins, db

board_routes = Blueprint('boards', __name__)


@board_routes.route('/userBoards/<int:user_id>')
@login_required
def user_boards(user_id):
    """
    Query for all user boards and returns them in a list of board dictionaries
    """
    boards = Board.query.filter(Board.user_id == user_id).all()
    # Now we have all the boards that belong to the user

    # Grab all the pins associated with each board
    if boards:
        boards_data = []
        for board in boards:
            board_data = board.to_dict()
            board_data['pins'] = [pin.to_dict() for pin in board.pins]
            boards_data.append(board_data)
        return {'boards': boards_data}
    else:
        return {'message': 'No boards found for this user'}


@board_routes.route('/singleBoard/<int:board_id>')
@login_required
def single_board(board_id):
    """
    Query for a single user board and returns it as a board dictionary
    """
    try:
      board = Board.query.filter(Board.id == board_id).one()
      board_data = board.to_dict()
      board_data['pins'] = [pin.to_dict() for pin in board.pins]
      return {'board': board_data}
    except NoResultFound:
        return {'message': 'No board was found'}, 404
from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from flask_wtf.csrf import generate_csrf
# from ..forms.pin_form import PinForm
from sqlalchemy.orm.exc import NoResultFound
from app.models import Board, board_pins, Pin, db
from app.forms.board_form import BoardForm

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


@board_routes.route('/newBoard', methods=['POST'])
@login_required
def create_board():
    """
    Create a board and return the newly created board as a dictionary
    """
    data = request.form
    user = current_user

    form = BoardForm(
        title=data.get('title'),
        description=data.get('description'),
        user_id=user.id,
        csrf_token=generate_csrf()
    )

    if form.validate_on_submit():
        new_board = Board(
            title=form.data['title'],
            description=form.data['description'],
            user_id=user.id
        )
        db.session.add(new_board)
        db.session.commit()
        return {"board":  new_board.to_dict()}, 201

    if form.errors:
        return {"message": "Invalid Data", "status": 403}


@board_routes.route('/editBoard/<int:board_id>', methods=['PUT'])
@login_required
def update_board(board_id):
    """
    Query for a board and update the contents, returns the updated board as a dictionary
    """
    data = request.form
    user = current_user.id

    board = Board.query.get(board_id)
    if not board:
        return jsonify({'error': 'Board not found'}), 404

    form = BoardForm(
        title=data.get('title'),
        description=data.get('description'),
        user_id=user,
        csrf_token = generate_csrf()
    )

    if not form.validate_on_submit():
        return jsonify({'errors': form.errors}), 422

    board.title = form.data['title']
    board.description = form.data['description']
    board.user_id = form.data['user_id']

    db.session.add(board)
    db.session.commit()

    return jsonify({'board': board.to_dict()})


@board_routes.route('/addPin/<int:boardId>/<int:pinId>', methods=['PUT'])
@login_required
def add_to_board(boardId, pinId):
    """
    Query for a board and add pin to the board, returns the updated board as a dictionary
    """

    board = Board.query.get(boardId)
    if not board:
        return {'error': 'Board not found'}, 404

    pin = Pin.query.get(pinId)
    if not pin:
        return {'error': 'Pin not found'}, 404

    # Add entry to board_pins table
    db.session.execute(board_pins.insert().values(
        board_id=boardId, pin_id=pinId))
    db.session.commit()

    return {'message': 'Pin added to Board successfully'}


@board_routes.route('/removePin/<int:pinId>/<int:boardId>', methods=['PUT'])
@login_required
def remove_pin(pinId, boardId):
    """
    Remove a pin from a board
    """
    delete_stmt = board_pins.delete().where((board_pins.c.board_id == boardId) & (board_pins.c.pin_id == pinId))
    db.session.execute(delete_stmt)

    db.session.commit()

    return {'message': 'Pin removed successfully'}, 200


@board_routes.route('/deleteBoard/<int:boardId>', methods=['DELETE'])
@login_required
def delete_board(boardId):
    """
    Quert for a board and delete it
    """
    board = Board.query.filter_by(id=boardId).first()
    if not board:
        return {'error': 'Board not found'}, 404

    # Delete all songs associated with the playlist from the playlist_songs table
    db.session.query(board_pins).filter_by(board_id=boardId).delete()

    # Delete the playlist itself from the playlists table
    db.session.delete(board)
    db.session.commit()

    return {'message': 'Board deleted successfully'}, 200

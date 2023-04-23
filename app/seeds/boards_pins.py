from app.models import db, board_pins, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want

def seed_board_pins():
    board_pins_data = [
        {'board_id': 1, 'pin_id': 1},
        {'board_id': 1, 'pin_id': 4},
        {'board_id': 1, 'pin_id': 8},
        {'board_id': 2, 'pin_id': 6},
        {'board_id': 2, 'pin_id': 15},
        {'board_id': 2, 'pin_id': 16},
        {'board_id': 3, 'pin_id': 3},
        {'board_id': 3, 'pin_id': 5},
        {'board_id': 3, 'pin_id': 9},
        {'board_id': 3, 'pin_id': 11},
        {'board_id': 4, 'pin_id': 17},
        {'board_id': 5, 'pin_id': 18},
        {'board_id': 5, 'pin_id': 19},
        {'board_id': 5, 'pin_id': 20},
        {'board_id': 5, 'pin_id': 21}

    ]


    board_pins_rows = []
    for data in board_pins_data:
        board_pins_rows.append(data)
    db.session.execute(board_pins.insert().values(board_pins_rows))
    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the songs table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_board_pins():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.board_pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM board_pins"))

    db.session.commit()

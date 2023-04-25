from app.models import db, saved_pins, environment, SCHEMA
from sqlalchemy.sql import text


def seed_saved_pins():
    saved_pins_data = [
        {'user_id': 3, 'pin_id': 29},
        {'user_id': 3, 'pin_id': 24},
        {'user_id': 3, 'pin_id': 8},
        {'user_id': 3, 'pin_id': 10},
        {'user_id': 1, 'pin_id': 25},
        {'user_id': 1, 'pin_id': 22}
    ]


    saved_pins_rows = []
    for data in saved_pins_data:
        saved_pins_rows.append(data)
    db.session.execute(saved_pins.insert().values(saved_pins_rows))
    db.session.commit()


def undo_saved_pins():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.saved_pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM saved_pins"))

    db.session.commit()

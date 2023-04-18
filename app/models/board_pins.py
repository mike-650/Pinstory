from .db import db, add_prefix_for_prod, environment, SCHEMA

board_pins = db.Table('board_pins',
    db.Column('board_id', db.Integer, db.ForeignKey(add_prefix_for_prod('boards.id')), primary_key=True),
    db.Column('pin_id', db.Integer, db.ForeignKey(add_prefix_for_prod('pins.id')), primary_key=True)
)

if environment == "production":
    board_pins.schema = SCHEMA

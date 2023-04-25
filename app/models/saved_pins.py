from .db import db, add_prefix_for_prod, environment, SCHEMA

saved_pins = db.Table('saved_pins',
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True),
    db.Column('pin_id', db.Integer, db.ForeignKey(add_prefix_for_prod('pins.id')), primary_key=True)
)

if environment == "production":
    saved_pins.schema = SCHEMA

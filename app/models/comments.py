from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import ForeignKey


class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer(), primary_key=True)
    comment = db.Column(db.String(1000), nullable=False)
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('users.id')))
    pin_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('pins.id')))

    user = db.relationship('User', back_populates='comments')
    pin = db.relationship('Pin', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'user_id': self.user_id,
            'pin_id': self.pin_id
        }

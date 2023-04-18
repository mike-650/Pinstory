from .db import db, environment, SCHEMA, add_prefix_for_prod


class Board(db.Model):
    __tablename__ = 'boards'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)

    pins = db.relationship('Pin', secondary='board_pins', back_populates='boards')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title
        }

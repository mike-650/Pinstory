from .db import db, environment, SCHEMA, add_prefix_for_prod


class Pin(db.Model):
    __tablename__ = 'pins'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    image_url = db.Column(db.Text, nullable=False)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(255))

    boards = db.relationship('Board', secondary='board_pins', back_populates='boards')

    def to_dict(self):
        return {
            'id': self.id,
            'imageUrl': self.imageUrl,
            'title': self.title,
            'description': self.description
        }

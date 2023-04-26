from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text


def seed_comments():
    comment1 = Comment(
        comment='Howl is super cool!',
        user_id='2',
        pin_id='1'
        )
    comment2 = Comment(
        comment='Man is knocked out zzz.',
        user_id='3',
        pin_id='1')
    comment3 = Comment(
        comment='How does he sleep with all those antiques??',
        user_id='1',
        pin_id='1', )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class BoardForm(FlaskForm):
  title = StringField("Title", validators=[DataRequired()])
  description = StringField("Description")
  user_id = IntegerField("user_id")

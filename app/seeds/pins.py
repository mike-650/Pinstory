from app.models import db, Pin, environment, SCHEMA
from sqlalchemy.sql import text


def seed_pins():
    pin1 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED1.jpeg",
        title="Studio Ghibli",
        description="Totoro in the snow :o",
        user_id=1
    )
    pin2 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED14.jpeg",
        title="Food! :D",
        description="Ramen noodles with potstickers, yum yum!",
        user_id=1
    )
    pin3 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED7.jpeg",
        title="Kicks!",
        description="Check out these Chrome Hearts!!!",
        user_id=1
    )
    pin4 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED10.jpeg",
        title="Studio Ghibli",
        description="Susuwatari candy!!!",
        user_id=1
    )
    pin5 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED5.jpeg",
        title="Shoesss",
        description="A Bathing Ape Bape Sta Low ABC Camo 20th Anniversary Blue",
        user_id=1
    )
    pin6 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED8.jpeg",
        title="Black Pink!",
        description="I will forever STAN Jennie!!",
        user_id=3
    )
    pin7 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED15.jpeg",
        title="FOOD!!!",
        description="Chicken sandwiches, Mac & Cheese, Hot wings, and Fries. Does it get any better??",
        user_id=3
    )
    pin8 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED2.jpeg",
        title="Spirited Away",
        description="Haku and Chihiro!!! :D",
        user_id=3
    )
    pin9 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED3.jpeg",
        title="~Clothing~",
        description="Vintage Carhartt Jackets!",
        user_id=3
    )
    pin10 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED13.jpeg",
        title="MapleStory",
        description="Does anyone still play Maplestory anymore? Such nostalgic times!!",
        user_id=3
    )
    pin11 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED4.jpeg",
        title="Sneaks!",
        description="I can't dior you, but I still adore you~ 550s!",
        user_id=3
    )
    pin12 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED12.jpeg",
        title="Studio Ghibli",
        description="Characters from Spirited Away!",
        user_id=2
    )
    pin13 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED6.jpeg",
        title="Nike Shoes",
        description="Some of my favorite Nikes!!",
        user_id=2
    )
    pin14 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED11.jpeg",
        title="Studio Ghibli",
        description="No-Face from Spirited Away",
        user_id=1
    )
    pin15 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED9.jpeg",
        title="New Jeans!!!",
        description="I have OMG, Hypeboy, and Ditto on repeat! What about yall??",
        user_id=1
    )
    pin16 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/fifty.jpeg",
        title="FIFTY-FIFTY",
        description="I gave a second chance to Cupid~",
        user_id=1
    )
    pin17 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/appAcademy.png",
        title="App Academy",
        description="Congratulations on graduating November cohort!",
        user_id=3
    )
    pin18 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED18.gif",
        title="Yummy fried eggs",
        description="Food in anime looks 10x better",
        user_id=2
    )
    pin19 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED19.gif",
        title="Cakeeee",
        description="I don't even like cake like that",
        user_id=3
    )
    pin20 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED20.gif",
        title="Hot Pot :D",
        description="Cravinggg",
        user_id=2
    )
    pin21 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED21.gif",
        title="Rameeeen :D",
        description="currently craving :",
        user_id=1
    )
    pin22 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED22.jpeg",
        title="Kiki!",
        description="Yasine's fav Ghibli",
        user_id=2
    )
    pin23 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED23.jpeg",
        title="Totorooo",
        description="My life lol",
        user_id=3
    )
    pin24 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED24.jpeg",
        title='Simple fit',
        description='Carhartt/Crew/Converse',
        user_id=2
    )
    pin25 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED25.jpeg",
        title='Spongebob',
        description='Phone wallpaper',
        user_id=2
    )
    pin26 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED26.jpeg",
        title='Pixel art',
        description='',
        user_id=2
    )
    pin27 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED27.jpeg",
        title='Havanese!!!',
        description='my dream dog!!',
        user_id=3
    )
    pin28 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED28.jpeg",
        title='cutie havy',
        description='so tiny',
        user_id=3
    )
    pin29 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED29.jpeg",
        title='Jennie Kim',
        description='im speechless',
        user_id=3
    )
    pin30 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED30.jpeg",
        title='my hero cereal',
        description='if only this was reall',
        user_id=3
    )
    pin31 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED31.jpeg",
        title='Naruto and Sasuke',
        description='~Sun and Moon~',
        user_id=3
    )
    pin32 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED32.jpeg",
        title='Naruto!!',
        description='favorite anime',
        user_id=3
    )
    pin33 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED33.jpeg",
        title='Haerin and Danielle',
        description='New Jeans is awesome!!',
        user_id=3
    )
    pin34 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED34.jpeg",
        title='OOTD',
        description='found this carhartt jacket while thrifting!',
        user_id=3
    )
    pin35 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED35.jpeg",
        title='My loves',
        description='best kpop idols',
        user_id=3
    )
    pin36 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED36.jpeg",
        title='fun wallpaper',
        description='anime friendss',
        user_id=3
    )
    pin37 = Pin(
        image_url="https://pinstorybucket.s3.us-west-1.amazonaws.com/pinstorySEED37.jpeg",
        title="tanjir-o's!!!",
        description="i feel like they'd taste like apple jacks",
        user_id=3
    )

    allPins = [pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9,
    pin10, pin11, pin12, pin13, pin14, pin15, pin16, pin17, pin18, pin19, pin20, pin21,
    pin22, pin23, pin24, pin25, pin26, pin27, pin28, pin29, pin30, pin31, pin32, pin33,
    pin34, pin35, pin36, pin37]

    for pin in allPins:
        db.session.add(pin)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_pins():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM pins"))

    db.session.commit()

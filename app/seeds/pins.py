from app.models import db, Pin, environment, SCHEMA
from sqlalchemy.sql import text


def seed_pins():
    pin1 = Pin(
        image_url="https://i.pinimg.com/564x/ff/97/06/ff970689974d367d1aeb7113e2ec7ded.jpg",
        title="Studio Ghibli",
        description="Howl's moving castle! :o",
        user_id=1
    )
    pin2 = Pin(
        image_url="https://i.pinimg.com/564x/92/37/74/923774715bd4ec269e1fccf2dc00881d.jpg",
        title="Food! :D",
        description="Birria tacos, yum yum!",
        user_id=1
    )
    pin3 = Pin(
        image_url="https://i.pinimg.com/564x/d4/37/2f/d4372f7a1420eeeb0bb305c0cc0fcba0.jpg",
        title="Nike X Off-White Dunk Low!",
        description="currently needing these",
        user_id=1
    )
    pin4 = Pin(
        image_url="https://i.pinimg.com/564x/4f/8f/04/4f8f04e053bcebbacb777d3c1d077f58.jpg",
        title="Studio Ghibli",
        description="Susuwatari candy!!!",
        user_id=1
    )
    pin5 = Pin(
        image_url="https://i.pinimg.com/564x/b4/8a/2e/b48a2e42b2260f461f9e1523d3635404.jpg",
        title="Shoesss",
        description="A Bathing Ape Bape Sta Low",
        user_id=1
    )
    pin6 = Pin(
        image_url="https://i.pinimg.com/564x/94/a7/c5/94a7c53e28a44ef586db0d29378a7c1d.jpg",
        title="Black Pink!",
        description="I will forever STAN BP!!",
        user_id=3
    )
    pin7 = Pin(
        image_url="https://i.pinimg.com/564x/00/35/7f/00357f7f70a1b2f8b6fad387cc0a495d.jpg",
        title="Check this out!!!",
        description="Chocolate Chunk Cookies Ice Cream Sandwiches??",
        user_id=3
    )
    pin8 = Pin(
        image_url="https://i.pinimg.com/564x/5a/86/68/5a86685c751f8ec73c4baf85de0e1ad7.jpg",
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
        image_url="https://i.pinimg.com/564x/79/98/a9/7998a910af9c6db8c1dfbbe659e4d742.jpg",
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
        image_url="https://i.pinimg.com/564x/61/93/d8/6193d8871ad85e73cc6e5709a209c42e.jpg",
        title="Studio Ghibli",
        description="No-Face from Spirited Away",
        user_id=1
    )
    pin15 = Pin(
        image_url="https://i.pinimg.com/564x/60/92/e2/6092e2861ff4b807c083254afd73e26a.jpg",
        title="New Jeans!!!",
        description="I have OMG, Hypeboy, and Ditto on repeat! What about yall??",
        user_id=1
    )
    pin16 = Pin(
        image_url="https://i.pinimg.com/564x/2d/e8/52/2de85248eae959f37172e51724a061e3.jpg",
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
        image_url="https://i.pinimg.com/originals/5d/e7/c9/5de7c999223d3ce418b1d31b61f62208.gif",
        title="Yummy fried eggs",
        description="Food in anime looks 10x better",
        user_id=2
    )
    pin19 = Pin(
        image_url="https://i.pinimg.com/originals/3e/09/63/3e0963a3b95d8a79eaf86050aaf405bb.gif",
        title="Cakeeee",
        description="I don't even like cake like that",
        user_id=3
    )
    pin20 = Pin(
        image_url="https://i.pinimg.com/originals/29/40/d2/2940d2b39a5c53e39a63446499caacb1.gif",
        title="ghiblii",
        description="",
        user_id=2
    )
    pin21 = Pin(
        image_url="https://i.pinimg.com/originals/d4/51/0d/d4510d6cb58cac84ed6f2f2c673b43aa.gif",
        title="Rameeeen :D",
        description="currently craving :",
        user_id=1
    )
    pin22 = Pin(
        image_url="https://i.pinimg.com/564x/25/7c/21/257c21c7b79a1a13e7b3806b5687089d.jpg",
        title="Kiki!",
        description="Yasine's fav Ghibli",
        user_id=2
    )
    pin23 = Pin(
        image_url="https://i.pinimg.com/564x/7c/ba/df/7cbadf06fabf2bee9d629a02be5fd7c2.jpg",
        title="Totorooo",
        description="My life lol",
        user_id=3
    )
    pin24 = Pin(
        image_url="https://i.pinimg.com/564x/08/94/47/089447809046c11867a1b823aafd6cad.jpg",
        title='In-n-out',
        description='Yummmm!',
        user_id=2
    )
    pin25 = Pin(
        image_url="https://i.pinimg.com/736x/6f/56/9c/6f569cb786b4d7763ff05e300dbb91dd.jpg",
        title='String lights!',
        description='',
        user_id=2
    )
    pin26 = Pin(
        image_url="https://i.pinimg.com/564x/65/34/31/65343138ab6a6bdc59936725a38b0039.jpg",
        title='cutie doggo',
        description='silly boy',
        user_id=2
    )
    pin27 = Pin(
        image_url="https://i.pinimg.com/564x/97/18/3f/97183f5899baacc9999059f044fe25fa.jpg",
        title='Havanese!!!',
        description='my dream dog!!',
        user_id=3
    )
    pin28 = Pin(
        image_url="https://i.pinimg.com/564x/30/ab/5f/30ab5f320152a4bf85b368255495df96.jpg",
        title='cutie havy',
        description='so tiny',
        user_id=3
    )
    pin29 = Pin(
        image_url="https://i.pinimg.com/564x/6d/af/66/6daf66ddb787ed33bc2dd05ef86c5b67.jpg",
        title='Jennie Kim',
        description='im speechless',
        user_id=3
    )
    pin30 = Pin(
        image_url="https://i.pinimg.com/originals/e5/94/34/e59434c84ca59869537899717a159cac.gif",
        title='Weather animation',
        description='super cool gif i found!',
        user_id=3
    )
    pin31 = Pin(
        image_url="https://i.pinimg.com/564x/49/43/0c/49430ca4c11a22ccd2db2f2999273248.jpg",
        title='Naruto and Sasuke',
        description='~Sun and Moon~',
        user_id=3
    )
    pin32 = Pin(
        image_url="https://i.pinimg.com/564x/87/4b/79/874b797fd7dffe8bbac1a46e05a8eb45.jpg",
        title='Naruto!!',
        description='favorite anime',
        user_id=3
    )
    pin33 = Pin(
        image_url="https://i.pinimg.com/564x/28/a7/e1/28a7e1d7f1d507323c8761c4d23de833.jpg",
        title='new jeans!',
        description='~new jeans wallpaper~',
        user_id=3
    )
    pin34 = Pin(
        image_url="https://i.pinimg.com/564x/e9/31/f8/e931f866c3d24acd2dfc7195f92b168f.jpg",
        title='OOTD',
        description='found this carhartt jacket while thrifting!',
        user_id=3
    )
    pin35 = Pin(
        image_url="https://i.pinimg.com/564x/10/3c/d0/103cd0cdfbd9981836e86c9dad9f1251.jpg",
        title='My loves',
        description='best kpop idols',
        user_id=3
    )
    pin36 = Pin(
        image_url="https://i.pinimg.com/564x/bf/49/c7/bf49c71c81b2891aaefa986b4712a751.jpg",
        title='cool wallpaper',
        description='old school style anime',
        user_id=3
    )
    pin37 = Pin(
        image_url="https://i.pinimg.com/564x/e2/f2/bb/e2f2bbe2f7d17a29d3245ceb266402dd.jpg",
        title="tanjir-o's!!!",
        description="i feel like they'd taste like apple jacks",
        user_id=3
    )
    pin38 = Pin(
        image_url='https://i.pinimg.com/originals/2c/a3/0c/2ca30c8adf6bfb784dd631ee81030499.gif',
        title='Toyota Supra~',
        description='retro anime aesthetic looping car gif.',
        user_id=3
        )
    pin39 = Pin(
        image_url='https://cdn.discordapp.com/attachments/1175587011323773031/1212482285346099230/fdcd496f2644da005793c09cc10cbd68.png?ex=65f1ff1f&is=65df8a1f&hm=8a8522f5db51049dca0b7552344f4f0b51f42834c42abf43e97865dfe5f744cf&',
        title='Anime Food GIF',
        description='Yummmm',
        user_id=2
    )
    pin40 = Pin(
        image_url='https://cdn.discordapp.com/attachments/1175587011323773031/1212481046642294814/ee72f4b97e6c40268c837392541dd85e.png?ex=65f1fdf8&is=65df88f8&hm=5ed4145492ae49cb804e4348df1697dd811018e691c69c5453a82f53e918e9a0&',
        title='WOW',
        description='Why does anime make food look 1000% better?',
        user_id=1
    )
    pin41 = Pin(
        image_url='https://cdn.discordapp.com/attachments/1092597009170571266/1102304716655960156/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f476e38395379495f6e486d7337673d3d2d3934383231373230382e313633316139393862366535663561643932313032373830343638332e676966.gif',
        title='Japanese Curry!',
        description='I actually never had japanese curry before D:',
        user_id=3
    )
    pin42 = Pin(
        image_url='https://i.pinimg.com/564x/8c/61/2a/8c612a74e0628be3fdc7033b011fb706.jpg',
        title='XG!',
        description='Did you know XG stands for Xtraordinary Girls?',
        user_id=3
    )

    allPins = [pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9,
    pin10, pin11, pin12, pin13, pin14, pin15, pin16, pin17, pin18, pin19, pin20, pin21,
    pin22, pin23, pin24, pin25, pin26, pin27, pin28, pin29, pin30, pin31, pin32, pin33,
    pin34, pin35, pin36, pin37, pin38, pin39, pin40, pin41, pin42]

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

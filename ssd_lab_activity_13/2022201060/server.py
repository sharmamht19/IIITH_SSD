from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os
app= Flask(__name__)
baseDir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+os.path.join(baseDir,'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] =False
db= SQLAlchemy(app)
ma = Marshmallow(app)
class userInfo(db.Model):
    email=db.Column(db.String(50),primary_key=True)
    name=db.Column(db.String(100))
    password=db.Column(db.String(100))
    def __init__(self,name, email, password):
        self.name = name
        self.email = email
        self.password=password
with app.app_context():
    db.create_all()
class UserSchema(ma.Schema):
    class Meta:
        fields=('name','email','password')
user_schema = UserSchema()
users_schema = UserSchema()

@app.route('user/signup',methods= ['POST'])
def signup():
    name= request.json['name']
    email= request.json['email']
    password= request.json['password']

    NewUser=userInfo(name,email,password)
    db.session.add(NewUser)
    db.session.commit()
    return jsonify({"statuscode" : 200})

@app.route('user/login',methods= ['POST'])
def login():
    nemail= request.json['email']
    npassword= request.json['password']
    print(nemail)
    print(npassword)
    user= userInfo.query.filter_by(email=nemail)
    print(user)

    NewUser=userInfo()
    db.session.add(NewUser)
    db.session.commit()
    return jsonify({"statuscode" : 200})

if __name__ == "__main__" :
    app.run(debug=True)



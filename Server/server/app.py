# server/app.py
import os
from flask import Flask, jsonify
from flask_migrate import Migrate
from dotenv import load_dotenv
from models import db, User, Bus, Booking, Review, Route
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from firebase_admin import auth, initialize_app, credentials

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.secret_key = os.getenv('FLASK_SECRET_KEY')

db.init_app(app)
CORS(app)
migrate = Migrate(app, db)

# Endpoint to get all users
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

# Endpoint to get all buses
@app.route('/buses', methods=['GET'])
def get_buses():
    buses = Bus.query.all()
    return jsonify([bus.to_dict() for bus in buses])

# Endpoint to get all bookings
@app.route('/bookings', methods=['GET'])
def get_bookings():
    bookings = Booking.query.all()
    return jsonify([booking.to_dict() for booking in bookings])

# Endpoint to get all reviews
@app.route('/reviews', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews])

# Endpoint to get all routes
@app.route('/routes', methods=['GET'])
def get_routes():
    routes = Route.query.all()
    return jsonify([route.to_dict() for route in routes])

if __name__ == '__main__':
    app.run(port=5555, debug=True)

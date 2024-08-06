import os
from flask import Flask, jsonify, send_from_directory, render_template
from flask_migrate import Migrate
from models import db, User, Bus, Booking, Review, Route

app = Flask(__name__, static_folder='static')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

db.init_app(app)
migrate = Migrate(app, db)

# Serve static files
@app.route('/')
def index():
    return send_from_directory('static', 'landing.html')

@app.route('/admin')
def admin():
    return send_from_directory('static', 'admin.html')

# API Endpoints
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

@app.route('/buses', methods=['GET'])
def get_buses():
    buses = Bus.query.all()
    return jsonify([bus.to_dict() for bus in buses])

@app.route('/bookings', methods=['GET'])
def get_bookings():
    bookings = Booking.query.all()
    return jsonify([booking.to_dict() for booking in bookings])

@app.route('/reviews', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews])

@app.route('/routes', methods=['GET'])
def get_routes():
    routes = Route.query.all()
    return jsonify([route.to_dict() for route in routes])

if __name__ == '__main__':
    app.run(port=5555, debug=True)

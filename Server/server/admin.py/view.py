#Define routes and views for the admin section if you use Flask Blueprints.
from flask import Blueprint, render_template

admin = Blueprint('admin', __name__, template_folder='templates')

@admin.route('/dashboard')
def dashboard():
    return render_template('admin/dashboard.html')

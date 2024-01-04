from flask import Flask

app = Flask(__name__)


@app.route('/index')
def index():
    return 'Index Page'


@app.route('/index/hello')
def hello():
    return 'Hello, World'

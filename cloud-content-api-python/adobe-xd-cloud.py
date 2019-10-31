import os
import flask
import requests
from six.moves import urllib
import json

# Start flask app
app = flask.Flask(__name__)

# Load config object from config.py
app.config.from_object('config.Config')

# Loading FLAST_SECRET from config.py
app.secret_key = app.config['FLASK_SECRET']


@app.route('/')
def home():
    return flask.render_template('index.html')


@app.route('/document', methods=['POST'])
def document():
    # Adobe XD Cloud API document url
    document_id = flask.request.form['text']
    document_url = 'https://xdce.adobe.io/v2/document/{}'.format(document_id)

    # Use requests library to send the GET request
    response = requests.get(document_url,
                            headers={'x-api-key': app.config['API_KEY'], 'Authorization': 'Bearer {}'.format(app.config['ACCESS_TOKEN']), 'accept': 'application/vnd.adobe.xd.v1+json'})

    if response.status_code == 200:
        return flask.render_template('index.html', response=json.dumps(response.json()))
    else:
        return flask.render_template('index.html', response='document information could not be retrieved')


if __name__ == '__main__':
    # Make sure the hostname and port you provide match the valid redirect URI
    # specified in your project in the Adobe developer Console.
    # Also, make sure to have `cert.pem` and `key.pem` in your directory
    app.run('localhost', 8000, debug=True, ssl_context=('cert.pem', 'key.pem'))

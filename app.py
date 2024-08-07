from flask import Flask, request, jsonify, render_template
from exa_py import Exa
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To handle CORS issues

API_KEY = 'ec24cdb0-77a3-4132-ad78-f52f7b440469'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    data = request.json
    query = data['query']
    
    exa = Exa(API_KEY)
    response = exa.search(
        query,
        num_results=5,
        type='keyword',
        include_domains=['https://www.tiktok.com'],
    )
    
    results = [{'title': result.title, 'url': result.url} for result in response.results]
    return jsonify({'results': results})

if __name__ == "__main__":
    app.run(debug=True)

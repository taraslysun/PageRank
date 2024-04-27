import json
from flask import Flask, request
from flask_cors import CORS
from pageRank import pagerank
import numpy as np

app = Flask(__name__)
CORS(app)

adj_matrix = np.loadtxt('adj_matrix.csv', dtype=int)
site_categories = np.loadtxt('site_categories.csv', dtype=str)
site_names = np.loadtxt('site_names.csv', dtype=str)

@app.route('/pagerank', methods=['POST'])
def page_rank():
    data = request.get_json()
    preferred_categories = data['preferred_categories']

    

    ordered_sites = pagerank(adj_matrix, site_categories, site_names, preferred_categories)

    # print(preferred_categories)
    # print(ordered_sites)
    # print(len(ordered_sites))
    return json.dumps(ordered_sites)

if __name__ == '__main__':
    app.run()


    # go to postman and send a post request to http://localhost:5000/pagerank
    # body: {"preferred_categories":["SCIENCE", "SPORT", ...]}
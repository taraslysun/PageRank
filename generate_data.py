import numpy as np
import random
import requests
def generate_site_data(num_sites=100):
    
    SPORT = "SPORT"
    POLITICS = "POLITICS"
    TECHNOLOGY = "TECHNOLOGY"
    BUSINESS = "BUSINESS"
    MUSIC = "MUSIC"
    SCIENCE = "SCIENCE"
    HEALTH = "HEALTH"
    ENTERTAINMENT = "ENTERTAINMENT"
    EDUCATION = "EDUCATION"
    TRAVEL = "TRAVEL"

    categories = [SPORT, POLITICS, TECHNOLOGY, BUSINESS, MUSIC, SCIENCE, HEALTH, ENTERTAINMENT, EDUCATION, TRAVEL]
    
    site_categories = np.random.choice(categories, size=num_sites)

    word_site = "https://www.mit.edu/~ecprice/wordlist.10000"
    response = requests.get(word_site)
    words = response.content.splitlines()
    site_names = np.random.choice(words, size=num_sites)
    site_names = ['www.' + name.decode('utf-8') + '.com' for name in site_names]
    adj_matrix = np.zeros((num_sites, num_sites))
    
    for i in range(num_sites):
        for j in range(num_sites):
            if i != j and random.random() < 0.05:
                adj_matrix[i, j] = 1


    np.savetxt('site_categories.csv', site_categories, fmt='%s')
    np.savetxt('site_names.csv', site_names, fmt='%s')
    np.savetxt('adj_matrix.csv', adj_matrix, fmt='%d')
    
    return adj_matrix, site_categories, site_names

if __name__ == '__main__':
    generate_site_data(10000)
    print('Data generated and saved to site_categories.csv, site_names.csv, and adj_matrix.csv')
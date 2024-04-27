# PageRank

Course Project for Linear Algebra course. APPS@UCU

Team members: Taras Lysun, Bohdan Pavliuk, Nazar Parnosov

To run the project you would need the npm installed, as well as python3 interpreter to run the server.

To start off, generate the data by executing a command:
```
python3 generate_data.py
```
After that you need to start the backend server build using Flask that calculates the PageRank values of the generated data.
```
python3 server.py
```

To start the frontend with the demostration, open new terminal and execute following commands:
```
cd Onepager/onepager
npm install
npm start
```
After that the new tab in your browser will open with the demonstration of our PageRank algo implementation that you can test by changing categories and watching list of sites reorder accorging to their pagerank

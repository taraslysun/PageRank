import React, { useState, useEffect } from "react";

function SearchResults({ selectedValue }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pagerank", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ preferred_categories: selectedValue }),
    })
    .then(response => response.json())
    .then(data => {
      const processedLinks = data.map(site => ({
        name: site[0],
        pagerank: site[1],
        url: site[0],
        site_cat: site[2],
      })).slice(0, 20);
      setLinks(processedLinks);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }, [selectedValue]);

  useEffect(() => {
    if (links.length > 0) {
    }
  }, [links]);

  return (
    <div>
      <h2>Search Results</h2>
      <ul className="link-list">
        
        { selectedValue !== "" ? links.map((link, index) => (
          <li key={index}>
            <div className="link-item" style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
                <a href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                </a>
                <p>PageRank: {Math.round(link.pagerank*10000000)/1000}</p>
                <p>Category: <b>{link.site_cat}</b></p>
            </div>
          </li>
        )) : <p>No category selected</p>
        }
      </ul>
    </div>
  );
}

export default SearchResults;

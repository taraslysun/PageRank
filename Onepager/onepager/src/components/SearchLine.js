import React, { useState, useEffect } from 'react';
import './SearchLine.css';

function SearchLine({ options, selectedValue, setSelectedValue }) {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        setSelected(selectedValue);
    }, [selectedValue]);

    const handleChange = (e) => {
        const value = e.target.value;
        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedValue(selected);
    };

    return (
        <div className="searchLine" >
            <h2>Search</h2>
            <form onSubmit={handleSubmit} className='searchlineInput'>
                {options.map((option, index) => (
                    <div key={index} className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                value={option}
                                checked={selected.includes(option)}
                                onChange={handleChange}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                }}
                            />
                            {option}
                        </label>
                    </div>
                ))}
                <button type="submit" style={{
                    fontSize: '1.5em',
                }}
                >Search</button>
            </form>
        </div>
    );

}
export default SearchLine;

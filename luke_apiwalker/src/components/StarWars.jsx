import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FetchStarWars = () => {
    const [starWarsList, setStarWarsList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('people');
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        axios
            .get(`https://swapi.dev/api/${selectedCategory}/${searchValue}`)
            .then((response) => {
                setStarWarsList([response.data]);
            })
            .catch((err) => console.log(err));
    };

    const sendResult = (result) => {
        if (selectedCategory === 'people') {
            navigate(`/people/${result.id}`, { state: { person: result } });
        } else if (selectedCategory === 'planets') {
            navigate(`/planets/${result.id}`, { state: { planet: result } });
        } else if (selectedCategory === 'species') {
            navigate(`/species/${result.id}`, { state: { species: result } });
        }
    };

    return (
        <div>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="species">Species</option>
            </select>
            <input type="number" value={searchValue} onChange={handleSearchChange} />
            <button onClick={handleSearch}>Search</button>
            {starWarsList.map((result) => (
                <div key={result.id}>
                    <h2>{result.name}</h2>
                    <p>{result.height}</p>
                    <p>{result.mass}</p>
                    <p>{result.hair_color}</p>
                    <button onClick={() => sendResult(result)}></button>
                </div>
            ))}
        </div>
    );
};

export default FetchStarWars;

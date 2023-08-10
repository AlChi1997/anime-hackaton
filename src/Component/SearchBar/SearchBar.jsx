import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';

export const SearchBar = ({setResults}) => {
    const [searchTerm, setSearchTerm]  = useState('');

    const fetchData =(value) => {

        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${value}&page[limit]=20`)
        .then((res) => res.json())
        .then((json) => {
            const results= json.data.filter((anime) => {
                return (
                value &&
                anime &&
                anime.attributes &&
                anime.attributes.canonicalTitle.toLowerCase().includes(value.toLowerCase())
                );
                });
            setResults(results);
        })
    }

    const handleChange = (value) => {
        setSearchTerm(value);
        fetchData(value);
    }

    return (
        <div className="search-bar">
        <FaSearch id="search-icon" />
            <input placeholder="Type to Search" 
                value={searchTerm} onChange={(e)=> handleChange(e.target.value)}/>
        </div>
    )
}

export default SearchBar;
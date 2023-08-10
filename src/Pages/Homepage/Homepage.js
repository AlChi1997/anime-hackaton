import React, {useState} from 'react';
import SearchBar from '../../Component/SearchBar/SearchBar';
import SearchResultsList from '../../Component/SearchBar/SearchResultsList';

const Homepage = () => {

    const [results, setResults] = useState([]);

    return (
        <div>
            <SearchBar setResults={setResults} />
            <SearchResultsList results={results}/>
        </div>
    );
}

export default Homepage;
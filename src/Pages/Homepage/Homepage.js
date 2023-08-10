import React, {useState} from 'react';
import SearchBar from '../../Component/SearchBar';
import SearchResultsList from '../../Component/SearchResultsList';

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
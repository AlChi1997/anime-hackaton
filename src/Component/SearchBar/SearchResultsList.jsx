import React from 'react';
import SearchResult from './SearchResult';
import './Search.scss'
export const SearchResultsList = ({results}) => {
    
    return (
        <div className="search-results">
            {results.map((result, id) => {
                return <SearchResult result={result} key={id} />
            })}
        </div>
    )
}

export default SearchResultsList;
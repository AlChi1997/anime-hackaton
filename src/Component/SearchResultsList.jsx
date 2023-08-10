import React from 'react';

export const SearchResultsList = ({results}) => {
    return (
        <div className="search-results">
            {results.map((result, id) => {
                return <div key={id}>{result.attributes.canonicalTitle}</div>
            })}
        </div>
    )
}

export default SearchResultsList;
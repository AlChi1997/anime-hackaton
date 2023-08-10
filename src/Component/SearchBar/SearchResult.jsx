import React from 'react';
import {Link} from 'react-router-dom';

export const SearchResult = ({result}) => {
    return (
        <div className="search-result">
            <Link to={{pathname: `/anime/${encodeURIComponent(result.attributes.canonicalTitle)}`}}>
                {result.attributes.canonicalTitle}
            </Link>
        </div>
    )
}

export default SearchResult;
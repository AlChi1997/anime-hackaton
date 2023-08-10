import './Header.scss';
import imgh1 from '../../asset/images/header/1.gif'
import { Link } from "react-router-dom";
import SearchResultsList from '../../Component/SearchBar/SearchResultsList';
import SearchBar from '../../Component/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [results, setResults] = useState([]);

    return (
      <header className="header">
           <Link to="/" className='header__link' >
        <div className="header__logo"><img alt="imgh1" src={imgh1} className="header__image" /></div>
        </Link>
        <div className="content-container">
                <SearchBar setResults={setResults} />
                <SearchResultsList results={results} />
            </div>
        </header>
  );
}
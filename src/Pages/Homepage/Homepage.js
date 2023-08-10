import React, { useState, useEffect } from 'react';
// import SearchBar from '../../Component/SearchBar/SearchBar';
import Header from '../../Component/Header/Header';
// import SearchResultsList from '../../Component/SearchBar/SearchResultsList';
import { Link } from "react-router-dom";
import './Homepage.scss';
import img1 from '../../asset/images/background/1.jpg'
import img2 from '../../asset/images/background/2.jpg'
import img3 from '../../asset/images/background/3.jpg'
import img4 from '../../asset/images/background/4.webp'
import img5 from '../../asset/images/background/5.jpg'
import img6 from '../../asset/images/header/2.gif'
import img7 from '../../asset/images/header/4.gif'
import img8 from '../../asset/images/header/5.gif'
import img9 from '../../asset/images/header/6.gif'
import img10 from '../../asset/images/header/7.gif'
import img11 from '../../asset/images/header/8.gif'
import img12 from '../../asset/images/header/9.gif'
import img13 from '../../asset/images/header/10.gif'
import img14 from '../../asset/images/header/11.gif'
import img15 from '../../asset/images/header/12.gif'




const imagePaths = [img1, img2, img3, img4, img5];

const Homepage = () => {
    const [results, setResults] = useState([]);
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    useEffect(() => {
        const backgroundChangeInterval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, 8000);

        return () => clearInterval(backgroundChangeInterval);
    }, []);

    return (

        <div className="homepage">
            <Header />
            <div className="background-container">
                {imagePaths.map((imagePath, index) => (
                    <img
                        key={index}
                        className={`background-image ${index === backgroundIndex ? 'visible' : ''}`}
                        src={imagePath}
                        alt="Background"
                    />
                ))}
            </div>
            
                <div className="container">
                    <h1 className='homepage__title'>Let Find Some Aniemes</h1>
                </div>
            
            <div className = 'homepage__link'>
            <Link to="/anime/Naruto%3A%20Shippuuden" className='header__link' >
        <div className="header__logo"><img alt="imgh1" src={img6} className="homepage__link--image" /></div>
        </Link>

        <Link to="/anime/Fairy%20Tail" className='header__link' >
        <div className="homepage__link-logo"><img alt="imgh1" src={img7} className="homepage__link--image" /></div>
        </Link>
        <Link to="/anime/SPY×FAMILY" className='header__link' >
        <div className="homepage__link-logo"><img alt="imgh1" src={img8} className="homepage__link--image" /></div>
        </Link>
        <Link to="/anime/Fullmetal%20Alchemist" className='header__link' >
        <div className="homepage__link-logo"><img alt="imgh1" src={img9} className="homepage__link--image" /></div>
        </Link>
        <Link to="/anime/Boku%20no%20Hero%20Academia" className='header__link' >
        <div className="homepage__link-logo"><img alt="imgh1" src={img10} className="homepage__link--image" /></div>
        </Link>
        <Link to="/anime/Hunter%20x%20Hunter%20(2011)" className='header__link' >
        <div className="homepage__link-logo"><img alt="imgh1" src={img11} className="homepage__link--image" /></div>
        </Link>
        <Link to="/anime/Tokyo%20Ghoul" className='header__link' >
        <div className="homepage__link-logo"><img alt="imgh1" src={img12} className="homepage__link--image" /></div>
        </Link>        
        <Link to="/anime/Kimetsu%20no%20Yaiba" className='header__link' >
        <div className="homepage__link-logo"><img alt="imgh1" src={img13} className="homepage__link--image" /></div>
        </Link>        
        <Link to="/anime/Jujutsu%20Kaisen" className='header__link' >
        <div className="homepage__link-logo"><img alt="imgh1" src={img14} className="homepage__link--image" /></div>
        </Link>
        <Link to="/anime/Mushoku%20Tensei%3A%20Isekai%20Ittara%20Honki%20Dasu" className='header__link' >
        <div className="homepage__link-logo"><img alt="imgh1" src={img15} className="homepage__link--image" /></div>
        </Link>

            </div>
        </div>
    );
};

export default Homepage;

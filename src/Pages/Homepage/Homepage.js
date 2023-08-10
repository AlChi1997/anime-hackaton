import React, { useState, useEffect } from 'react';
// import SearchBar from '../../Component/SearchBar/SearchBar';
import Header from '../../Component/Header/Header';
// import SearchResultsList from '../../Component/SearchBar/SearchResultsList';
import './Homepage.scss';
import img1 from '../../asset/images/background/1.jpg'
import img2 from '../../asset/images/background/2.jpg'
import img3 from '../../asset/images/background/3.jpg'
import img4 from '../../asset/images/background/4.jpg'
import img5 from '../../asset/images/background/5.jpg'

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
            {/* <div className="content-container">
                <SearchBar setResults={setResults} />
                <SearchResultsList results={results} />
            </div> */}
        </div>
    );
};

export default Homepage;
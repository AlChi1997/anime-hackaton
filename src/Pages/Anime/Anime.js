import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Header from '../../Component/Header/Header';
import './Anime.scss';
import { Link } from 'react-router-dom';

const Anime = () => {

    const {title} = useParams();
    console.log(title);

    const [anime, setAnime] = useState({});
    const [genres, setGenres] = useState([]);
    const [streamingLinks, setStreamingLinks] = useState([]);
    const [animeList, setAnimeList] = useState([]);


    useEffect(() => {
    axios
    .get(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(title)}&page[limit]=5`)
    .then((res) => {;
        setAnime(res.data.data[0]);
        setAnimeList(res.data.data.slice(1));
        console.log(res.data.data[0])
        console.log(res.data.data.slice(1));
    })
    .catch((err) => {
        console.log(err);
    });
    }, [title]);

    useEffect(() => {
        axios
        .get(`https://kitsu.io/api/edge/anime/${anime.id}/genres`)
        .then((res) => {
            setGenres(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [anime.id]);

    useEffect(() => {
        axios
        .get(`https://kitsu.io/api/edge/anime/${anime.id}/streaming-links`)
        .then((res) => {
            setStreamingLinks(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [anime.id]);

    console.log(anime);

    return (
        <div className='animepage'>
            <div className='overlay'></div>
            <Header />
            <div className='anime__theme'>
                    <img className='anime__theme-img' src={anime.attributes?.coverImage?.original} alt={title}/>
            </div>
            <section className='anime'>
                <section className='anime__block'>
                <section className='anime__info'>
                    <h1 className='anime__title'>{title}</h1>
                    <div className='anime__poster'>
                        <img className='anime__poster-img' src={anime.attributes?.posterImage?.medium} alt={title}/>
                    </div>
                </section>
                <section className='anime__extra'>
                    <div>
                        <p className='anime__synopsis'>{anime.attributes?.synopsis}</p>
                    </div>
                    <section className='anime__data'>
                    <div className='anime__additional'>
                        <h3 className='anime__additional-title'>Details</h3>
                        <p className='anime__rating'>Average Rating: {anime.attributes?.averageRating}</p>
                        <p className='anime__showtype'>Showtype: {anime.attributes?.showType}</p>
                        <p className='anime__episode'>Episodes: {anime.attributes?.episodeCount}</p>
                        <p className='anime__status'>Status: {anime.attributes?.status}</p>
                        <p className='anime__aired'>Aired: {anime.attributes?.startDate} - {anime.attributes?.endDate}</p>
                    </div>
                    <div className='anime__genre'>
                        <h3 className='anime__genre-title'>Genres:</h3>
                        {genres.map((genre) => {
                            return <p className="anime__genre-name" key={genre.id}>{genre.attributes.name}</p>
                        })}
                    </div>
                    <div className='anime__streaminglinks'>
                        <h3 className='anime__streaminglinks-title'>Streaming Links</h3>
                        {streamingLinks.map((streamingLink) => {
                            return (
                                <div className='anime__streaminglinks-box' key={streamingLink.id}>
                                    <a className='anime__streaminglinks-link' href={streamingLink.attributes.url}>{streamingLink.attributes.url}</a>
                                </div>
                                )
                            })
                        }
                    </div>
                    </section>
                </section>
                </section>
                <div className='anime__related'>
                    <h2 className='anime__related-title'>Related Anime:</h2>
                    <div className='anime__related-container'>
                        {animeList.map((anime) => {
                            return (
                                <Link className='anime__related-box' to={{pathname: `/anime/${encodeURIComponent(anime.attributes.canonicalTitle)}`}}>
                                <div key={anime.id}>
                                    <img className='anime__related-img' src={anime.attributes.posterImage?.tiny} alt={anime.attributes.canonicalTitle}/>
                                    <p className='anime__related-name'>{anime.attributes.canonicalTitle}</p>
                                </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
    
}

export default Anime;
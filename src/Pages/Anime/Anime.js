import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Anime = () => {

    const {title} = useParams();
    console.log(title);

    const [anime, setAnime] = useState({});
    const [genres, setGenres] = useState([]);
    const [streamingLinks, setStreamingLinks] = useState([]);


    useEffect(() => {
    axios
    .get(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(title)}`)
    .then((res) => {;
        setAnime(res.data.data[0]);
        console.log(res.data.data[0])
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
        <div>
            <section>
                <div>
                    <img style={{width:"100%"}} src={anime.attributes?.coverImage?.original} alt={title}/>
                </div>
                <h1>{title}</h1>
                <p>Average Rating: {anime.attributes?.averageRating}</p>
                <div>
                    <h2>Genres:</h2>
                    {genres.map((genre) => {
                        return <p key={genre.id}>{genre.attributes.name}</p>
                    })}
                </div>
                <p>{anime.attributes?.synopsis}</p>
                <div>
                    {streamingLinks.map((streamingLink) => {
                        return (
                            <div key={streamingLink.id}>
                                <a href={streamingLink.attributes.url}>{streamingLink.attributes.url}</a>
                            </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
    
}

export default Anime;
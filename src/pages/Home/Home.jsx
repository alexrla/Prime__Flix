// URL da Api: https://api.themoviedb.org/3/movie/now_playing?api_key=8bc0807f00a485ae205d0e186e5b7d45&language=pt-BR

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import styled from "styled-components";

import api from '../../services/api';

export default function Home()  {
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
         async function loadMovies() {
             const response = await api.get("movie/now_playing", {
                 params: {
                     api_key: "8bc0807f00a485ae205d0e186e5b7d45",
                     language: "pt-BR",
                     page: 1
                 } 
             });

             setMovies(response.data.results);
             setLoading(false);
        }

        loadMovies();
    }, []);

    if(loading) {
        return (
            <Loader>
                <h2>Carregando filmes...</h2>
            </Loader>
        );
    }
    else    {
        return (
            <>
                <Div></Div>
                <Container>
                    <MovieList>
                        {movies.map((movie) => {
                            return (
                                <article key={movie.id} className="movie">
                                    <div className="title">
                                        <span>{movie.title}</span>
                                    </div>
    
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                                    
                                    <Link to={`/filme/${movie.id}`} className="link-access">Acessar</Link>
                                </article>
                            )
                        })}
                    </MovieList>
                </Container>
            </>
        );
    }
}

const Loader = styled.div`
    align-items: center; 

    color: #FFFFFF;

    display: flex;

    height: 100vh;

    justify-content: center;
`;

const Div = styled.div`
    background-color: #000000;

    height: 60px;
`;

const Container = styled.div`
    align-items: center;

    display: flex;

    justify-content: center;

    padding-top: 5px;
`;

const MovieList = styled.div`
    display: flex;

    flex-wrap: wrap;

    justify-content: space-between;

    width: 800px;

    .movie  {
        align-items: center;

        background-color: rgba(0, 0, 0, 0.9);

        border-radius: 5px;

        display: flex;

        flex-direction: column;

        height: 400px;

        justify-content: space-between;

        margin: 20px;

        text-align: center;

        width: 350px;
    }

    .title  {
        align-items: center;

        display: flex;

        height: 32px;

        margin-top: 10px;
    }

    .title > span   {
        color: #FFFFFF;

        font-size: 16px;

        font-weight: bold;
    }

    .movie > img    {
        border-radius: 5px;

        height: 300px;

        margin-bottom: 10px;

        width: 300px;
    }

    .link-access    {
        background-color: #D31848;

        border-radius: 10px;

        color: #FFFFFF;

        font-size: 10px;

        font-weight: bold;

        margin-bottom: 10px;

        padding: 10px;

        text-decoration: none;
    }

    .link-access:hover {
        background-color: #B02220;
    }
`;
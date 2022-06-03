// URL da Api: https://api.themoviedb.org/3/movie/now_playing?api_key=8bc0807f00a485ae205d0e186e5b7d45&language=pt-BR

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import styled from "styled-components";

import api from '../../services/api';

export default function Home()  {
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
         async function loadingMovies() {
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

        loadingMovies();
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
                    <MovieList className="movieList">
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

    display: flex;

    font-size: 24px;

    height: calc(100vh - 60px);

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
`;

const MovieList = styled.div`
    display: flex;

    flex-wrap: wrap;

    justify-content: space-between;

    max-width: 90%;

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

        max-width: 90%;

        width: 350px;
    }

    .title  {
        align-items: center;

        display: flex;

        height: 32px;

        margin-top: 10px;
    }

    .title > span   {
        font-size: 16px;
    }

    .movie > img    {
        border-radius: 5px;

        height: 300px;

        margin-bottom: 10px;

        max-width: 100%;

        width: 300px;
    }

    .link-access    {
        background-color: #D31848;

        border-radius: 10px;

        font-size: 10px;

        margin-bottom: 10px;

        padding: 10px;
    }

    .link-access:hover {
        background-color: #B02220;
    }

    @media (max-width: 866px)   {
        align-items: center;
    
        flex-direction: column;
    }

    @media (max-width: 371px)   {
        .movie  {
            border-radius: 0;
        }

        .movie > img  {
            border-radius: 0;
        }
    }
`;
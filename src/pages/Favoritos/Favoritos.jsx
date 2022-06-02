import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import styled from 'styled-components';

export default function Favoritos() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const movieList = localStorage.getItem("@primeflix");

        setMovies(JSON.parse(movieList) || []);
    }, []);

    function deleteMovie(idMovie)  {
        let filterMovies = movies.filter((movie) => {
            return (movie.id !== idMovie)
        });

        setMovies(filterMovies);

        localStorage.setItem("@primeflix", JSON.stringify(filterMovies));

        toast.error("Filme removido com sucesso!");
    }

    return (
        <>
            <Div></Div>
            <Container>
                <Content>
                    <h1>Meus filmes</h1>

                    {movies.length === 0 && <p>Lista vazia! :(</p>}

                    <ul>
                        {movies.map((movie) => {
                            return (
                                <li key={movie.id}>
                                    <Link to={`/filme/${movie.id}`}>
                                        <span>{movie.title}</span>
                                    </Link>

                                    <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
                                </li>
                            )
                        })}
                    </ul>
                </Content>
            </Container>
        </>
    );
}

const Div = styled.div`
    background-color: #000000;

    height: 60px;
`;

const Container = styled.div`
    margin: 0 auto;

    max-width: 90%;

    width: 500px;
`;

const Content = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    h1  {
        font-size: 20px;

        padding-top: 20px;

        text-decoration: underline;
    }

    p   {
        font-size: 14px;

        padding-top: 20px;
    }

    ul  {
        padding-top: 30px;

        width: 500px;
    }

    li  {
        align-items: center;

        display: flex;

        justify-content: space-between;

        padding-bottom: 40px;

        width: 100%;
    }

    span    {
        background-color: #000000;

        border-radius: 5px;

        font-size: 14px;

        padding: 10px;
    }

    span:hover  {
        background-color: #FFFFFF;

        color: #000000;
    }

    button  {
        background-color: #D31848;

        border: none;

        border-radius: 5px;

        color: #FFFFFF;

        font-size: 14px;

        font-weight: bold;

        padding: 10px;
    }

    button:hover  {
        background-color: #B02220;

        cursor: pointer;
    }
`;
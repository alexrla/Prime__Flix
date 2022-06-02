import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";

import api from "../../services/api";

export default function Filme()  {
    const { idFilme } = useParams();

    const [ movie, setMovie ] = useState({});
    const [ loading, setLoading ] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadingMovie()   {
            await api.get(`/movie/${idFilme}`, {
                params: {
                    api_key: "8bc0807f00a485ae205d0e186e5b7d45",
                    language: "pt-BR"
                }
            })
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch(() => {
                navigate("/*", { replace: true })
                alert("Filme não encontrado!");
                return;
            })
        }

        loadingMovie();
   }, [idFilme, navigate]);

    if(loading) {
        return (
            <Loader>
                <h2>Carregando filme...</h2>
            </Loader>
        );
    }
    else    {
        return (
            <>
                <Div></Div>
                <Container style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,   
                                   backgroundPosition: "center", 
                                   backgroundRepeat: "no-repeat",
                                   backgroundSize: "cover"}}>
                    <DarkOverlay>
                        <Content>
                            <h1>{movie.title}</h1>

                            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

                            <strong>Avaliação: {movie.vote_average} / 10</strong>

                            <Sinopse>
                                <h2>Sinopse</h2>

                                <p>
                                    {movie.overview}
                                </p>
                            </Sinopse>

                            <Buttons>
                                <button className="add">
                                    Adicionar
                                </button>

                                <div className="margin"></div>

                                <button className="trailer">
                                    <a href={`https://youtube.com/results?search_query=${movie.title} Trailer`} target="_blank" rel="noreferrer">Trailer</a>
                                </button>
                            </Buttons> 
                        </Content>
                    </DarkOverlay>
                </Container>
            </>
        );
    }
}

const Loader = styled.div`
    align-items: center; 

    display: flex;

    height: calc(100vh - 60px);

    justify-content: center;
`;

const Div = styled.div`
    background-color: #000000;

    height: 60px;
`;

const Container = styled.div`
    height: 100vh;
`;

const DarkOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;

    height: 100vh;

    justify-content: center;

    left: 0;

    position: absolute;

    top: 60px;

    width: 100%;
`;

const Content = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    max-width: 90%;
    
    width: 500px;

    h1  {
        font-size: 20px;

        padding-top: 15px;

        text-align: center;

        text-decoration: underline;
    }

    strong  {
        background-color: #1E90FF;

        border-radius: 3px;

        font-size: 14px;

        padding: 5px;

        margin-top: 10px;
    }

    img {
        border: 1px solid #FAFAFA;

        border-radius: 5px;

        height: 160px;

        margin-top: 10px;

        max-width: 90%;

        width: 400px;
    }
`;

const Sinopse = styled.div`
    margin-top: 10px;
    
    h2  {
        font-size: 14px;

        padding-bottom: 10px;

        text-decoration: underline;
    }

    p   {
        font-size: 12px;

        line-height: 15px;

        text-align: justify;
    }
`;

const Buttons = styled.div`
    display: flex;

    margin-top: 10px;

    .margin {
        width: 30px
    }

    .add, .trailer {
        background-color: #D31848;

        border: none;

        border-radius: 10px;

        color: #FFFFFF;

        font-size: 10px;

        font-weight: bold;

        padding: 10px;
    }

    .add:hover, .trailer:hover {
        background-color: #B02220;

        cursor: pointer;
    }
`;
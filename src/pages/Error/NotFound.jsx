import { Link } from 'react-router-dom';

import styled from 'styled-components';

export default function NotFound()  {
    return (
        <>
            <Div></Div>
            <Container>
                <span>☹</span>

                <h1>404</h1>

                <p>Página não encontrada!</p>

                <Link to={"/"} className="home">Voltar para a página inicial</Link>
            </Container>
        </>
    );
}

const Div = styled.div`
    background-color: #000000;

    height: 60px;
`;

const Container = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    height: calc(100vh - 60px);

    justify-content: center;

    span    {
        font-size: 96px;

        padding-bottom: 10px;
    }

    h1  {
        font-size: 48px;    .a  {
        
        }

        padding-bottom: 10px;
    }

    p   {
        font-size: 30px;

        padding-bottom: 40px;

        text-align: center;
    }

    .home   {
        background-color: #D31848;

        border-radius: 10px;

        font-size: 10px;

        padding: 15px;

        text-decoration: none;
    }

    .home:hover {
        background-color: #B02220;
    }
`;
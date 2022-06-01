import { Link } from 'react-router-dom';

import styled from 'styled-components';

export default function NotFound()  {
    return (
        <Div>
            <span>☹</span>

            <h1>404</h1>

            <p>Página não encontrada!</p>

            <Link to={"/"} className="home">Voltar para a página inicial</Link>
        </Div>
    );
}

const Div = styled.div`
    align-items: center;

    color: #FFFFFF;

    display: flex;

    flex-direction: column;

    font-weight: bold;

    height: 100vh;

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
    }

    .home   {
        background-color: #D31848;

        border-radius: 10px;

        color: #FFFFFF;

        font-size: 10px;

        font-weight: bold;

        padding: 15px;

        text-decoration: none;
    }

    .home:hover {
        background-color: #B02220;
    }
`;
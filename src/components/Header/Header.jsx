import { Link } from 'react-router-dom';

import styled from "styled-components";

export default function Header()    {
    return (
        <HeaderContainer>
            <Link to="/" className="logo">
                Prime Flix
            </Link>

            <Link to="/favoritos" className="filmes-favoritos">
                Meus filmes
            </Link>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    align-items: center;

    background-color: #000000;

    display: flex;

    height: 60px;

    justify-content: space-around;

    position: fixed;

    right: 0;

    top: 0;

    width: 100%;

    .logo   {
        color: #ffffff;

        text-decoration: none;

        font-size: 24px;

        font-weight: bold;
    }

    .filmes-favoritos   {
        background-color: #D31848;

        border-radius: 10px;

        color: #FFFFFF;

        font-size: 10px;

        padding: 10px;

        position: absolute;

        right: 20px;

        text-decoration: none;
    }

    .filmes-favoritos:hover {
        background-color: #B02220;
    }
`;
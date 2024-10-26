import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 96px;
    background: #000000;
`;

export const Display = styled.nav`
    width: 95%;
    height: 100%;
    max-width: 1460px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    gap: 12px;
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
`;

export const Navbar = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;

    a {
        position: relative;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;

        color: #ffffff;
        text-decoration: none;
        transition: all 0.4s;

        &::after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: -5px;
            left: 0;
            border-bottom: #ffbb00 2px solid;
            transform-origin: bottom right;
            transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
        }

        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }

        &:hover {
            color: #d5d2d2;
        }
    }

    button {
        display: none;
    }

    .active {
        color: #ffbb00;

        &::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }

        &:hover {
            color: #ab7f04 !important;
        }
    }

    @media (max-width: 777px) {
        a {
            display: none;
        }

        button {
            display: flex;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }
`;

import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    background: #000000;
    padding: 2rem 0;
`;

export const Display = styled.div`
    width: 95%;
    height: 100%;
    max-width: 1460px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    gap: 12px;

    span {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: "Roboto";

        font-weight: 400;
        font-size: 18px;
        line-height: 32px;

        letter-spacing: 0.015em;

        color: #b3b3b3;

        b {
            font-family: "Roboto";

            font-weight: 500;
            font-size: 24px;
            line-height: 32px;

            letter-spacing: 0.015em;
            text-transform: uppercase;

            color: #ffffff;
        }
    }
`;

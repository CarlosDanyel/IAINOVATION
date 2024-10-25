import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background: #121212;
`;

export const Display = styled.div`
    width: 95%;
    max-width: 1460px;
    margin: 0 auto;

    padding: 100px 0 60px 0;

    h1 {
        font-family: "Poppins";

        font-weight: 600;
        font-size: 64px;
        line-height: 72px;

        color: #ffffff;

        span {
            color: #ffbb00;
        }
    }
`;

export const ContainerAbout = styled.section`
    padding: 82px 0 63px;
`;

export const DisplayAbout = styled.div`
    width: 95%;
    max-width: 1460px;
    margin: 0 auto;
`;

export const ContainerText = styled.div`
    width: 100%;
    max-width: 822px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 32px;
        line-height: 36px;
        color: #2e2e2e;
        white-space: pre-line;
        line-height: 3rem;

        margin: 0 0 10rem 0;
    }
`;

export const List = styled.ul`
    list-style: none;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 100%;
    gap: 66px;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 8px;
        cursor: pointer;
        transition: all 0.4s;

        img {
            border-radius: 8px;
        }

        span {
            font-family: "Roboto";

            font-weight: 400;
            font-size: 32px;
            line-height: 36px;

            color: #000000;
        }

        p {
            font-family: "Roboto";

            font-weight: 400;
            font-size: 20px;
            line-height: 36px;

            color: #000000;
        }

        &:hover {
            transform: translateY(-10%);
        }
    }
`;

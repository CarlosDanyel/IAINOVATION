import "swiper/swiper-bundle.css";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

export const HomePage = styled.section`
    width: 100%;
    background: #000000;
`;

export const Display = styled.div`
    width: 95%;
    height: 100%;
    max-width: 1460px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 27px;

    @media (max-width: 1131px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`;

export const TextHome = styled(motion.div)`
    padding: 156px 0 48px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

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

    p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 36px;

        color: #b3b3b3;
    }

    a button {
        max-width: 206px;
        margin: auto auto auto 0;

        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;

        text-transform: uppercase;
        color: #332200;

        display: flex;

        justify-content: center;
        align-items: center;
        padding: 16px 32px;

        background: #f2a50c;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        text-decoration: none;

        transition: all 0.4s;

        &:hover {
            background: #b37700;
            color: #332200;
            transform: translateY(-10%);
        }
    }

    @media (max-width: 1131px) {
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 136px 0 28px 0;
    }
`;

export const ImgHome = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
`;

export const SwiperPage = styled(Swiper)`
    position: absolute;
    right: 0;
    width: 640px;
    height: 775px;
    margin-right: 2.5rem;

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1405px) {
        width: 90%;

        @media (max-width: 1293px) {
            height: 850px;
            width: 90%;
        }
    }

    @media (max-width: 1131px) {
        inset: 0;

        width: 100%;
        height: 700px;
        margin: 0 auto;
        max-width: 800px;

        img {
            width: 100%;
        }

        @media (max-width: 671px) {
            height: 750px;

            @media (max-width: 611px) {
                height: 840px;
            }
        }
    }
`;

export const SwiperSlidePage = styled(SwiperSlide)`
    display: flex;
    justify-content: flex-end;
`;

export const News = styled.section`
    h2 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 64px;
        line-height: 72px;

        color: #121212;

        margin-bottom: 44px;

        span {
            color: #ffbb00;
        }
    }
`;

export const DisplayNews = styled.div`
    width: 95%;
    height: 100%;
    max-width: 1460px;
    margin: 236px auto 100px auto;
`;

export const List = styled(motion.ul)`
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    li {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 21rem;
        gap: 16px;

        div:has(div) {
            display: flex;
            align-items: baseline;
            gap: 8px;

            div {
                width: 15px;
                height: 15px;
                display: flex;
                align-items: center;
                justify-content: center;

                span {
                    width: 12px;
                    height: 8px;

                    background: #ffbb00;
                }
            }

            p {
                font-family: "Poppins";

                font-weight: 600;
                font-size: 24px;
                line-height: 40px;

                color: #121212;
            }
        }

        div:has(img) {
            height: 520px;
            overflow: hidden;
            cursor: pointer;

            img {
                height: 100%;
                width: 100%;
                transition: all 0.4s;
            }

            &:hover {
                > img {
                    transform: scale(1.1);
                }
            }
        }
    }
`;

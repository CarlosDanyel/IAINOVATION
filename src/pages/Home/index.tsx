import {
    ImgHome,
    TextHome,
    HomePage,
    Display,
    News,
    List,
    DisplayNews,
    SwiperPage,
    SwiperSlidePage,
} from "./styles";

import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import imgHome from "../../assets/imgHome1.png";
import imgHome2 from "../../assets/imgHome2.png";
import imgHome3 from "../../assets/imgHome3.png";

import imgNews1 from "../../assets/img1.png";
import imgNews2 from "../../assets/img2.png";
import imgNews3 from "../../assets/img3.png";

import { animationProps } from "../../utils/variant";
import { Helmet } from "react-helmet-async";
import { Link } from "react-scroll";

export const Home = () => {
    return (
        <>
            <Helmet title="Home" />

            <HomePage>
                <Display>
                    <TextHome {...animationProps}>
                        <h1>
                            The world of AI you've never seen
                            <span>.</span>
                        </h1>
                        <p>
                            Discover the hidden universe of Artificial
                            Intelligence and how they are transforming the world
                            in ways you never imagined. Explore fascinating
                            stories, innovations and secrets that go beyond the
                            obvious and what is shown in the news. Welcome to
                            the future you didn't know yets.
                        </p>
                        <Link
                            to="news"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            offset={-120}
                        >
                            <button>Find out more</button>
                        </Link>
                    </TextHome>
                    <ImgHome>
                        <SwiperPage
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            allowTouchMove={false}
                            modules={[Autoplay]}
                        >
                            <SwiperSlidePage>
                                <motion.img
                                    src={imgHome}
                                    alt="imagem de uma inteligencia artificial"
                                    initial={{ opacity: 1, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                />
                            </SwiperSlidePage>
                            <SwiperSlidePage>
                                <motion.img
                                    src={imgHome2}
                                    alt="imagem de uma inteligencia artificial"
                                    initial={{ opacity: 1, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                />
                            </SwiperSlidePage>

                            <SwiperSlidePage>
                                <motion.img
                                    src={imgHome3}
                                    alt="imagem de uma inteligencia artificial"
                                    initial={{ opacity: 1, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                />
                            </SwiperSlidePage>
                        </SwiperPage>
                    </ImgHome>
                </Display>
            </HomePage>
            <News id="news">
                <DisplayNews>
                    <h2>
                        what's currently happening<span>.</span>
                    </h2>

                    <List>
                        <li>
                            <div>
                                <img src={imgNews1} alt="" />
                            </div>
                            <div>
                                <div>
                                    <span></span>
                                </div>
                                <p>Are AIs more accurate?</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={imgNews2} alt="" />
                            </div>
                            <div>
                                <div>
                                    <span></span>
                                </div>
                                <p>
                                    X/Twitter will allow training third-party
                                    AIs with user-generated content
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={imgNews3} alt="" />
                            </div>
                            <div>
                                <div>
                                    <span></span>
                                </div>
                                <p>
                                    Fake news and deep fakes in elections: learn
                                    how to recognize manipulation by AIs
                                </p>
                            </div>
                        </li>
                    </List>
                </DisplayNews>
            </News>
        </>
    );
};

import { Helmet } from "react-helmet-async";
import {
    Container,
    ContainerAbout,
    ContainerText,
    Display,
    DisplayAbout,
    List,
} from "./styles";

import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";
import user5 from "../../assets/user5.png";
import user6 from "../../assets/user6.png";
import user7 from "../../assets/user7.png";
import user8 from "../../assets/user8.png";
import user9 from "../../assets/user9.png";
import user10 from "../../assets/user10.png";
import user11 from "../../assets/user11.png";
import user12 from "../../assets/user12.png";

export const About = () => {
    return (
        <>
            <Helmet title="About" />
            <Container>
                <Display>
                    <h1>
                        about us<span>.</span>
                    </h1>
                </Display>
            </Container>
            <ContainerAbout>
                <DisplayAbout>
                    <ContainerText>
                        <p>
                            We are information technology students at
                            Universidade São Judas Tadeu and Anhembi Morumbi
                            <br />
                            <br /> This website is part of the subject of
                            Instrumental English and Digital Thinking and was
                            created to show people content about AIs and
                            transmit this knowledge
                        </p>
                    </ContainerText>
                    <List>
                        <li>
                            <img src={user1} alt="" />
                            <span>Carlos</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user2} alt="" />
                            <span>Matheus Henrique</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user3} alt="" />
                            <span>Júlia Rocha</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user4} alt="" />
                            <span>Marcos Santos</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user5} alt="" />
                            <span>Andressa Pereira</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user6} alt="" />
                            <span>Eduardo Campos</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user7} alt="" />
                            <span>Pedro Henrique</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user8} alt="" />
                            <span>Gabriel Baldini</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user9} alt="" />
                            <span>Júlia Santos</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user10} alt="" />
                            <span>Sabrina Gomes</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user11} alt="" />
                            <span>Lucas Marzocca</span>
                            <p>I.T Student</p>
                        </li>
                        <li>
                            <img src={user12} alt="" />
                            <span>Guilherme Rocha</span>
                            <p>I.T Student</p>
                        </li>
                    </List>
                </DisplayAbout>
            </ContainerAbout>
        </>
    );
};

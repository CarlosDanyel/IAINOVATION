import { NavLink } from "react-router-dom";
import { Container, Display, Logo, Navbar } from "./styles";
import LogoMarca from "../../assets/logo.png";

export const Header = () => {
    return (
        <Container>
            <Display>
                <Logo to="/">
                    <img src={LogoMarca} alt="Logo da marca IAInnovation" />
                </Logo>
                <Navbar>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>About Us</NavLink>
                    <NavLink to={"/contents"}>Contents</NavLink>
                    <NavLink to={"/events"}>Events</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </Navbar>
            </Display>
        </Container>
    );
};

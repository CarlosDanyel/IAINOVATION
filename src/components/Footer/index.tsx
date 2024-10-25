import { MapPin } from "phosphor-react";
import { Container, Display } from "./styles";

export const Footer = () => {
    return (
        <Container>
            <Display>
                <span>
                    <b>CONTACT</b>
                    +55 11 9999-9999 | suporte@IAInnovation.com
                </span>

                <span>
                    <MapPin size={25} color="#ffffff" weight="fill" />
                    Rua Aqui Perto, 42 - Cruz São Paulo - S
                </span>
            </Display>
        </Container>
    );
};

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { pt, en } from "../../data/data";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";

import { MainContainer, Container, ContainerColumns, FullHeightText, FullHeightImg, Subtitle, LargeBtn, Headline } from "../../styles/mainStyles";
import { UserContext } from "../../components/UserContext";

const ContactPage = () => {
    const history = useHistory();
    const { language, setLanguage } = useContext(UserContext);

    const data = () => {
        switch(language) {
            case "en":
                return en;
            default:
                return pt;
        }
    }

    const goToHome = () => {
        history.push(`/`)
    }

    return (
        <MainContainer>
            <Header />
            <Container width="1024px">
                <Contact />
                {language === "pt" ? <LargeBtn onClick={goToHome}>Voltar para Home</LargeBtn> : <LargeBtn onClick={goToHome}>Back to Home</LargeBtn>}
            </Container>
        </MainContainer>
    )
}

export default ContactPage;
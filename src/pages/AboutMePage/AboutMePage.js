import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { pt, en } from "../../data/data";
import Header from "../../components/Header/Header";

import { MainContainer, Container, ContainerColumns, FullHeightText, FullHeightImg, Subtitle, LargeBtn, Headline } from "../../styles/mainStyles";
import { UserContext } from "../../components/UserContext";

const AboutMePage = () => {
    const history = useHistory();
    const { language, setLanguage } = useContext(UserContext);

    const goToHome = () => {
        history.push(`/`)
    }

    return (
        <MainContainer>
            <Header />
            {language === "pt" ? <Container width="600px">
                <p>Sou formada em jornalismo e história e trabalhei na área de design editorial, com editoras, revistas e jornais. Há dois anos, tive a oportunidade de migrar para o design digital, criando páginas na web para reportagens especiais, gráficos e aplicações interativas voltadas para a comunicação, além de desenvolver sites para empresas de maneira autônoma.</p>
                <LargeBtn onClick={goToHome}>Voltar para Home</LargeBtn>
            </Container> : <Container width="600px">
                <p>I have a degree in journalism and history and worked in the area of ​​editorial design, with publishers, magazines and newspapers. Two years ago, I had the opportunity to migrate to digital design, creating web pages for special reports, graphics and interactive applications aimed at communication, in addition to developing websites for companies autonomously.</p>
                <LargeBtn onClick={goToHome}>Back to Home</LargeBtn>
            </Container>}
        </MainContainer>
    )
}

export default AboutMePage;
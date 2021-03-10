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
                <p>Atualmente, trabalho como UX/UI designer senior na Medroom, empresa de realidade virtual voltada para a educação médica, onde atuo tanto com experiência do usuário quanto com o desenvolvimento front-end de produtos. Antes disso, trabalhei em empresas de comunicação e editoras com design e desenvolvimento de produtos gráficos e digitais, e tenho mais de dez anos de experiência na área. Acredito na importância do design centrado no usuário, na organização e no planejamento, na entrega de um código limpo e na constante busca por aprendizado. Minha formação em humanas me ajuda a utilizar a pesquisa e o contato com as pessoas como recursos essenciais para se entender o mundo e os caminhos que se abrem para a inovação.</p>
                <LargeBtn onClick={goToHome}>Voltar para Home</LargeBtn>
            </Container> : <Container width="600px">
                <p>Currently, I work as a UX / UI senior designer at Medroom, a virtual reality company focused on medical education, where I work both with user experience and with front-end product development. Before that, I worked in communication companies and publishers with design and development of graphic and digital products, and I have more than ten years of experience in the area. I believe in the importance of user-centered design, organization and planning, the delivery of a clean code and in constant learning. My training in humanities helps me to use research and contact with people as essential resources to understand the world and the paths that open up for innovation.</p>
                <LargeBtn onClick={goToHome}>Back to Home</LargeBtn>
            </Container>}
        </MainContainer>
    )
}

export default AboutMePage;
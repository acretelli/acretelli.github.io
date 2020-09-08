import React, { useContext } from "react";
import ProjectsDisplay from "../../components/ProjectsDisplay/ProjectsDisplay";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";

import { MainContainer, Container, ContainerColumns, FullHeightText, FullHeightImg, Subtitle, Headline } from "../../styles/mainStyles";

import { Retangle, FullHeightIntroText } from "./styles";

import profilePic from "../../images/profile_pic_2.JPG";
import { UserContext } from "../../components/UserContext";

const HomePage = () => {
    const { language, setLanguage } = useContext(UserContext);
    return (
        <MainContainer>
            <Header />
            <Container width="1024px">
                <ContainerColumns>
                    <FullHeightIntroText>
                        {language === "pt" ? <div>
                            <Subtitle>Oi, eu sou a Anna</Subtitle>
                            <div>
                                <Headline>Front-end Developer</Headline>
                            </div>
                            <div>
                                <Headline>Infografista</Headline>
                            </div>
                            <div>
                                <Headline>Designer Gráfico</Headline>
                            </div>
                        </div> : <div>
                            <Subtitle>Hi, I am Anna</Subtitle>
                            <div>
                                <Headline>Front-end Developer</Headline>
                            </div>
                            <div>
                                <Headline>Infographics Designer</Headline>
                            </div>
                            <div>
                                <Headline>Graphics Designer</Headline>
                            </div>
                        </div>  }
                    </FullHeightIntroText>
                    <FullHeightImg>
                        <img src={profilePic} alt="Foto ilustrativa"/>
                    </FullHeightImg>
                </ContainerColumns>
            </Container>
            <ProjectsDisplay />
            <Contact />
        </MainContainer>
    )
}

export default HomePage;
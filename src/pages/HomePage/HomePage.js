import React, { useContext } from "react";
import ProjectsDisplay from "../../components/ProjectsDisplay/ProjectsDisplay";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";

import { MainContainer, Container, ContainerColumns, FullHeightImg, Subtitle, Headline } from "../../styles/mainStyles";

import { FullHeightIntroText } from "./styles";

import profilePic from "../../images/profile_pic_2.JPG";
import { UserContext } from "../../components/UserContext";

const HomePage = () => {
    const { language } = useContext(UserContext);
    return (
        <MainContainer>
            <Header />
            <Container width="1024px">
                <ContainerColumns>
                    <FullHeightIntroText>
                        {language === "pt" ? <div>
                            <Subtitle>Oi, eu sou a Anna</Subtitle>
                            <div>
                                <Headline>UX/UI Designer</Headline>
                            </div>
                            <div>
                                <Headline>Front-end Developer</Headline>
                            </div>
                        </div> : <div>
                            <Subtitle>Hi, I am Anna</Subtitle>
                            <div>
                                <Headline>UX/UI Designer</Headline>
                            </div>
                            <div>
                                <Headline>Front-end Developer</Headline>
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
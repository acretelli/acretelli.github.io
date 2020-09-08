import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { pt, en } from "../../data/data";
import Header from "../../components/Header/Header";
import { UserContext } from "../../components/UserContext";

import { MainContainer, Container, ContainerColumns, FullHeightText, FullHeightImg, Subtitle, LargeBtn, Headline } from "../../styles/mainStyles";
import { ProjectsContainer, ProjectBox, ProjectBtn, ProjectImg, ProjectImgSmall } from "./styles";

const ProjectsDisplay = () => {
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

    const goToProject = id => {
        history.push(`/projects/${id}`)
    }

    const goToHome = () => {
        history.push(`/`)
    }

    return (
        <MainContainer>
            <Container width="100%">
                <Header />
                <Container width="1024px">
                    {language === "pt" ? <Headline>Conheça alguns projetos em que participei:</Headline> :  <Headline>Know some of the projects that I've participated:</Headline>}
                </Container>
                <Container width="1024px">
                    {language === "pt" ? <Subtitle>Projetos destaque</Subtitle> : <Subtitle>Main projects</Subtitle>}
                    <ProjectsContainer>
                        {data().map( project => {
                            if(project.category === "professional") {
                                return (
                                    <ProjectBox key={project.id}>
                                        <ProjectImgSmall src={project.mainPhoto} alt={project.title}/>
                                        <h2>{project.title}</h2>
                                        <p>{project.extract}</p>
                                        {language === "pt" ? <ProjectBtn onClick={() => goToProject(project.id)}>Ver projeto</ProjectBtn> : <ProjectBtn onClick={() => goToProject(project.id)}>See more</ProjectBtn>}
                                    </ProjectBox>
                                )
                            }
                        })}
                    </ProjectsContainer>
                </Container>
                
                <Container width="1024px">
                {language === "pt" ? <Subtitle>Outros projetos</Subtitle> : <Subtitle>Other projects</Subtitle>}
                    <ProjectsContainer>
                        {data().map( project => {
                            if(project.category === "other-projects") {
                                return (
                                    <ProjectBox key={project.id}>
                                        <ProjectImgSmall src={project.mainPhoto} alt={project.title}/>
                                        <h2>{project.title}</h2>
                                        <p>{project.extract}</p>
                                        {language === "pt" ? <ProjectBtn onClick={() => goToProject(project.id)}>Ver projeto</ProjectBtn> : <ProjectBtn onClick={() => goToProject(project.id)}>See more</ProjectBtn>}
                                    </ProjectBox>
                                )
                            }
                        })}
                    </ProjectsContainer>
                </Container>
                <Container width="1024px">
                {language === "pt" ? <Subtitle>Infografia</Subtitle> : <Subtitle>Infographics</Subtitle>}
                    <ProjectsContainer>
                        {data().map( project => {
                            if(project.category === "infography") {
                                return (
                                    <ProjectBox key={project.id}>
                                        <ProjectImgSmall src={project.mainPhoto} alt={project.title}/>
                                        <h2>{project.title}</h2>
                                        <p>{project.extract}</p>
                                        {language === "pt" ? <ProjectBtn onClick={() => goToProject(project.id)}>Ver projeto</ProjectBtn> : <ProjectBtn onClick={() => goToProject(project.id)}>See more</ProjectBtn>}
                                    </ProjectBox>
                                )
                            }
                        })}
                       
                    </ProjectsContainer>
                </Container>
                <Container width="1024px">
                {language === "pt" ? <Subtitle>Experimentos</Subtitle> : <Subtitle>Experiments</Subtitle>}
                    <ProjectsContainer>
                        {data().map( project => {
                            if(project.category === "educational") {
                                return (
                                    <ProjectBox key={project.id}>
                                        <ProjectImgSmall src={project.mainPhoto} alt={project.title}/>
                                        <h2>{project.title}</h2>
                                        <p>{project.extract}</p>
                                        {language === "pt" ? <ProjectBtn onClick={() => goToProject(project.id)}>Ver projeto</ProjectBtn> : <ProjectBtn onClick={() => goToProject(project.id)}>See more</ProjectBtn>}
                                    </ProjectBox>
                                )
                            }
                        })}
                    </ProjectsContainer>
                </Container>

                {language === "pt" ? <LargeBtn onClick={goToHome}>Voltar para Home</LargeBtn> : <LargeBtn onClick={goToHome}>Back to Home</LargeBtn>}
            </Container>
        </MainContainer>
    )
}

export default ProjectsDisplay;
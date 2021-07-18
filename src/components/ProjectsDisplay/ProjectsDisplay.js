import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { pt, en } from "../../data/data";

import { Container, ContainerColumns, FullHeightText, FullHeightImg, Subtitle, LargeBtn } from "../../styles/mainStyles";
import { ProjectsContainer, ProjectBox, ProjectBtn, ProjectImg, ProjectImgSmall } from "./styles";
import { UserContext } from "../UserContext";

const ProjectsDisplay = () => {
    const history = useHistory();
    const { language, setLanguage } = useContext(UserContext);

    console.log(language)

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

    const goToProjectsPage = () => {
        history.push('/projects')
    }

    return (
        <Container width="100%">
            <Container>
                {data().map( project => {
                    if(project.highlight) {
                        return (
                            <ContainerColumns key={project.id}>
                                <FullHeightImg>
                                    <ProjectImg src={project.mainPhoto} alt={project.title}/>
                                </FullHeightImg>
                                <FullHeightText>
                                    <div>
                                        <h2>{project.title}</h2>
                                        <p>{project.extract}</p>
                                        {language === "pt"? <ProjectBtn onClick={() => goToProject(project.id)}>Ver projeto</ProjectBtn> : <ProjectBtn onClick={() => goToProject(project.id)}>See more</ProjectBtn>}
                                    </div>
                                </FullHeightText>
                            </ContainerColumns>
                        )
                    }
                })}
            </Container>
            {language === "pt" ? <LargeBtn onClick={goToProjectsPage}>Todos os projetos</LargeBtn> : <LargeBtn onClick={goToProjectsPage}>All projects</LargeBtn>}
        </Container>
    )
}

export default ProjectsDisplay;
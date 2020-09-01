import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { UserContext } from "../../components/UserContext";
import { pt, en } from "../../data/data";

import { MainContainer, Container, ContainerColumns, FullHeightText, FullHeightImg, Subtitle, Headline, LargeBtn } from "../../styles/mainStyles";

import { Paragraph, TopImg, Gallery, GalleryItem } from "./styles";

const SingleProjectPage = () => {
    const history = useHistory();
    const params = useParams();
    const id = params.id;
    const { language, setLanguage } = useContext(UserContext);

    const data = () => {
        switch(language) {
            case "en":
                return en;
            default:
                return pt;
        }
    }

    const project = data().find( project => project.id === id);

    const goToProjects = () => {
        history.push('/projects')
    }

    return (
        <MainContainer>
            <Header />
            <div>
                <TopImg src={project.mainPhoto} alt="Imagem do site"/>
                <Container width="1024px">
                    <h1>{project.title}</h1>
                    <ContainerColumns>
                        <Paragraph>{project.description}</Paragraph>
                    </ContainerColumns>
                    <Gallery>
                        {project.photos && project.photos.map( photo => {
                            return <GalleryItem src={photo} alt="Imagem do site"/>
                        })
                        }
                    </Gallery>
                </Container>
            </div>

            {language === "pt" ? <LargeBtn onClick={goToProjects}>Voltar para Projetos</LargeBtn> : <LargeBtn onClick={goToProjects}>Back to Projects</LargeBtn>}
        </MainContainer>
    )
}

export default SingleProjectPage;
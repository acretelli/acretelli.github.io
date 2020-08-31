import styled from "styled-components";

export const ProjectsContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;

    @media (max-width: 500px) {
        display: block;
    }
    @media (min-width: 501px) and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export const ProjectBox = styled.div `
    margin: 16px;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
`

export const ProjectBtn = styled.button `
    margin: 16px 0;
    padding: 16px;
`

export const ProjectImg = styled.img `
    height: 100%;
    object-fit: cover;
`

export const ProjectImgSmall = styled.img `
    height: 160px;
    object-fit: cover;
`
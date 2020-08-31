import styled from "styled-components";

export const AppContainer = styled.div `
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
`

export const MainContainer = styled.div `
    width: 100%;
    max-width: 100vw;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`

export const Container = styled.div `
    margin: auto;
    width: 100%;
    max-width: ${props => props.width};
    min-height: ${props => props.height};
`

export const ContainerColumns = styled.div `
    display: flex;
    align-items: stretch;
    justify-content: flex-start;

    &:nth-child(even) {
        flex-direction: row-reverse
    }
`

export const FullHeightText = styled.div `
    width: 100%;
    height: 100vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const FullHeightImg = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1.5;
`

export const Subtitle = styled.h2 `
    display: inline-block;
    margin: 24px 0;
    padding: 8px;
    font-size: 2rem;
    background-color: #f5f5f5;
`

export const Headline = styled.h4 `
    display: inline-block;
    padding: 8px;
    font-size: 1.25rem;
    font-weight: 300;
    background-color: #f5f5f5;
`

export const LargeBtn = styled.button `
    display: block;
    margin: 80px auto;
    padding: 16px;
    font-size: 1.25rem;
    font-weight: 300;
    background-color: #f5f5f5;
`

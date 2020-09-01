import styled from "styled-components";

export const HeaderContainer = styled.div `
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
    padding: 24px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Menu = styled.nav `
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 500px) {
        display: block;
    }
`

export const MenuLink = styled.li `
    margin: 0 8px;
    cursor: pointer;
`

export const LanguageBtns = styled.div `
    margin: 0 8px;
    background-color: #fafafa;
    border-radius: 16px;

`

export const LanguageBtn = styled.button `
    min-width: 40px;
    margin: 0;
    padding: 8px 16px;
    border-radius: 16px;
    background-color: ${props => {
        if(props.active === props.language) {
            return "#e5e5e5"
        } else {
            return "transparent"
        }
    }};
    border: none;
    box-shadow: none;
    cursor: pointer;
`
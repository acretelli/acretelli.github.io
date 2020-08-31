import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { HeaderContainer, TextWhite, Menu, MenuLink, LanguageBtns, LanguageBtn } from "./styles";
import { UserContext } from "../UserContext";

const Header = () => {
    const history = useHistory();
    const { language, setLanguage } = useContext(UserContext);

    const handleLanguageSwitch = lang => {
        setLanguage(lang)
    }

    const goToHome = () => {
        history.push('/')
    }

    const goToContact = () => {
        history.push('/contact')
    }

    const goToProjects = () => {
        history.push('/projects')
    }

    const goToAbout = () => {
        history.push('/about-me')
    }

    return (
        <HeaderContainer>
            <div>
                {language === "pt" ? <p onClick={goToHome}>portfólio</p> : <p onClick={goToHome}>portfolio</p>}
            </div>
            {language === "pt" ? <Menu>
                <MenuLink onClick={goToAbout}>sobre</MenuLink>
                <MenuLink onClick={goToProjects}>projetos</MenuLink>
                <MenuLink onClick={goToContact}>contato</MenuLink>
                <LanguageBtns>
                    <LanguageBtn active={language} language="pt" onClick={() => handleLanguageSwitch("pt")}>pt</LanguageBtn>
                    <LanguageBtn active={language} language="en" onClick={() => handleLanguageSwitch("en")}>en</LanguageBtn>
                </LanguageBtns>
            </Menu> : <Menu>
                <MenuLink onClick={goToAbout}>about me</MenuLink>
                <MenuLink onClick={goToProjects}>projects</MenuLink>
                <MenuLink onClick={goToContact}>contact</MenuLink>
                <LanguageBtns>
                    <LanguageBtn active={language} language="pt" onClick={() => handleLanguageSwitch("pt")}>pt</LanguageBtn>
                    <LanguageBtn active={language} language="en" onClick={() => handleLanguageSwitch("en")}>en</LanguageBtn>
                </LanguageBtns>
            </Menu>}
        </HeaderContainer>
    )
}

export default Header;
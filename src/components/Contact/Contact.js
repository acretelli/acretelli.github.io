import React, { useContext } from "react";

import { Container, Headline } from "../../styles/mainStyles";

import { ContactContainer, SocialMediaContainer, SocialMediaBtn, ImgSmall } from "./styles"

import logoGithub from "../../images/github-image.svg"
import logoLinkedin from "../../images/linkedin.svg"
import logoBehance from "../../images/behance.svg"
import logoInstagram from "../../images/instagram.svg"
import iconMail from "../../images/email.svg"
import { UserContext } from "../UserContext";

const Contact = () => {
    const { language, setLanguage } = useContext(UserContext);
    return (
        <Container width="1024px" height="400px" id="contact">
            <ContactContainer>
                {language === "pt" ? <Headline>Onde me encontrar</Headline> : <Headline>Follow Me</Headline>}
                <SocialMediaContainer>
                    <a href="mailto:anna.cbf@gmail.com" >
                        <SocialMediaBtn>
                            <ImgSmall src={iconMail} alt="Ícone de email" />
                            <p>Email</p>
                        </SocialMediaBtn>
                    </a>
                    <a href="https://www.linkedin.com/in/annacbfernandes/" target="_blank">
                        <SocialMediaBtn>
                            <ImgSmall src={logoLinkedin} alt="Ícone do linkedin" />
                            <p>Linkedin</p>
                        </SocialMediaBtn>
                    </a>
                    <a href="https://github.com/acretelli" target="_blank">
                        <SocialMediaBtn>
                            <ImgSmall src={logoGithub} alt="Ícone do github" />
                            <p>Github</p>
                        </SocialMediaBtn>
                    </a>
                    <a href="https://www.behance.net/annacbfernandes" target="_blank">
                        <SocialMediaBtn>
                            <ImgSmall src={logoBehance} alt="Ícone do behance" />
                            <p>Behance</p>
                        </SocialMediaBtn>
                    </a>
                    <a href="https://www.instagram.com/anna.cretelli/" target="_blank">
                        <SocialMediaBtn>
                            <ImgSmall src={logoInstagram} alt="Ícone do instagram" />
                            <p>Instagram</p>
                        </SocialMediaBtn>
                    </a>
                </SocialMediaContainer>
            </ContactContainer>
        </Container>
    )
}

export default Contact;

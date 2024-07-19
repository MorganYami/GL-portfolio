import styled from "styled-components"
import colors from "../../utils/style/colors"
import logoEmail from "../../assets/logos/logoEmail.webp"
import logoGithub from "../../assets/logos/logoGithub.webp"
import logoLinkedIn from "../../assets/logos/logoLinkedIn.webp"
import { size } from "../../utils/style/device"


const StyledFooter = styled.footer`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colors.backgroundDarker}
`
const FootLinks = styled.a`
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    &:hover {
        color: ${colors.secondary};
    }
    @media screen and (max-width: ${size.laptop}) {
        font-size: 0.7em;
    }
    @media screen and (max-width: ${size.mobileL}) {
        display:none;
    }
`
const FootIcons = styled.img`
    display: none;    
    @media screen and (max-width: ${size.mobileL}) {
        display:flex;
    }
`

function Footer() {

    return(
        <StyledFooter id="Contact">
            <FootLinks href="mailto:webdevlabang@gmail.com"> <img src={logoEmail} alt=""/> &emsp;Me Contacter : webdevlabang@gmail.com</FootLinks>
            <FootLinks href="https://github.com/MorganYami"> <img src={logoGithub} alt=""/> &emsp;Mon Github</FootLinks>
            <FootLinks href="https://www.linkedin.com/in/guillaume-laban-b028b8172/"> <img src={logoLinkedIn} alt=""/> &emsp;Mon LinkedIn</FootLinks>
            <FootIcons src={logoEmail} alt="" />
            <FootIcons src={logoGithub} alt="" />
            <FootIcons src={logoLinkedIn} alt="" />
        </StyledFooter>
    )
}

export default Footer
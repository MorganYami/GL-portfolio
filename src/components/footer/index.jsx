import styled from "styled-components"
import colors from "../../utils/style/colors"
import logoEmail from "../../assets/logos/logoEmail.png"
import logoGithub from "../../assets/logos/logoGithub.png"
import logoLinkedIn from "../../assets/logos/logoLinkedIn.png"


const StyledFooter = styled.footer`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colors.backgroundDark}
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
`

function Footer() {

    return(
        <StyledFooter id="Contact">
            <FootLinks href="mailto:webdevlabang@gmail.com"> <img src={logoEmail} alt=""/> &emsp;Me Contacter : webdevlabang@gmail.com</FootLinks>
            <FootLinks href="https://github.com/MorganYami"> <img src={logoGithub} alt=""/> &emsp;Mon Github</FootLinks>
            <FootLinks href="https://www.linkedin.com/in/guillaume-laban-b028b8172/"> <img src={logoLinkedIn} alt=""/> &emsp;Mon LinkedIn</FootLinks>
        </StyledFooter>
    )
}

export default Footer
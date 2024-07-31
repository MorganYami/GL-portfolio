import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"
import { size } from "../../utils/style/device"
import colors from "../../utils/style/colors"
import kasaScreen from "../../assets/background/Kasa_Screen.webp"
import argentBankScreen from "../../assets/background/ArgnetBank_Screen.webp"
import logoCSS from "../../assets/logos/logoCSS.webp"
import logoSCSS from "../../assets/logos/logoSASS.webp"
import logoReact from "../../assets/logos/logoREACT.webp"
import logoRedux from "../../assets/logos/logoREDUX.webp"

const PortfolioBox = styled.div`
    ${flexCenter}
    ${backgroundStandard}
    @media screen and (min-width: ${size.desktopMax}) {
        width: 80%;
    } 
`
const ProjectBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 20px 0px;
    justify-content: space-evenly;
    @media screen and (max-width: ${size.tablet}) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
const Project = styled.div` 
    display: flex; 
    flex-direction: column;
    width: 400px;
    ${contourShadow}    
    border-color: ${colors.backgroundDarker};
    background-color: white;
    img {
        width: 100%;
        border-bottom: solid black 2px;
    }
    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5px 10px;
        img {
            width: 25px;
            border: none;
            margin: 0 5px;
        }
    }
    .ProjectLink {
        text-decoration: none;
        color: ${colors.backgroundDarker};
        font-weight: bold;
        &:hover {
            color: ${colors.secondary};
            text-decoration: underline;
            cursor: pointer;
        }
    }
    @media screen and (max-width: ${size.tablet}) {
        width: 90%;
        margin: 25px 0px 50px 0px;
    }
`

function Projets() {
    const openProject = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    return (
        <PortfolioBox id="Portfolio">
            <h2>Quelques Réalisations</h2>
            <ProjectBox>
                <Project>
                    <img src={kasaScreen} alt="Un screenshot du site Kasa"/>
                    <p>Kasa est un projet de site de location d'appartement</p>
                    <p>Tech: <img src={logoCSS} alt="css"/> + <img src={logoReact} alt="react"/></p>
                    <p className="ProjectLink" onClick={() => openProject("https://kasagl07.netlify.app/")}>Voir le site</p> 
                    <p className="ProjectLink" onClick={() => openProject("https://github.com/MorganYami/projet8_kasa")}>Voir le code source</p>
                </Project>
                <Project>
                    <img src={argentBankScreen} alt="Un screenshot du site Kasa"/>
                    <p>Argent Bank est un projet de site de consultation de compte en banque</p>
                    <p>Tech: <img src={logoSCSS} alt="scss"/> + <img src={logoReact} alt="react"/>+ <img src={logoRedux} alt="redux"/></p>
                    <p className="ProjectLink" onClick={() => openProject("https://github.com/MorganYami/ArgentBank-website")}>Voir le code source</p>
                </Project>
            </ProjectBox>
        </PortfolioBox>
    )
}

export default Projets
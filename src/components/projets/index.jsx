import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"
// import ProjetKasa from "../../assets/background/Kasa_Screen.png"
// import ProjetBank from "../../assets/background/ArgnetBank_Screen.png"
// import tempProjectImg from "../../assets/background/pexels-pixabay-247791.jpg"
import { size } from "../../utils/style/device"
import colors from "../../utils/style/colors"

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
    width: 400px;
    height: 200px;
    color: white;
    text-align: center;
    align-content: center;
    ${contourShadow}    
    border-color: ${colors.backgroundDarker};
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
                <Project id="kasa" onClick={() => openProject("https://plainenglish.io")}>
                </Project>
                <Project id="bank" onClick={() => openProject("https://plainenglish.io")}>
                </Project>
            </ProjectBox>
        </PortfolioBox>
    )
}

export default Projets
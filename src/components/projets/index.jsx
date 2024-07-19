import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"

import tempProjectImg from "../../assets/background/pexels-pixabay-247791.jpg"
import { size } from "../../utils/style/device"

const PortfolioBox = styled.div`
    ${flexCenter}
    ${backgroundStandard}
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
    background: no-repeat center url(${tempProjectImg});
    background-size: cover;
    width: 400px;
    height: 200px;
    color: white;
    text-align: center;
    align-content: center;
    ${contourShadow}
    @media screen and (max-width: ${size.tablet}) {
        width: 90%;
        margin-top: 25px
    }
`

function Projets() {
    return (
        <PortfolioBox id="Portfolio">
            <h2>Quelques Réalisations</h2>
            <ProjectBox>
                <Project className="projet">
                    <h3>Projet 1</h3>
                </Project>
                <Project className="projet">
                    <h3>Projet 2</h3>
                </Project>
            </ProjectBox>
        </PortfolioBox>
    )
}

export default Projets
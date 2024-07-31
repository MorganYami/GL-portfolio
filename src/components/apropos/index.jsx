import styled from "styled-components"
import { backgroundStandard, flexCenter } from "../../utils/style/variables"
import { size } from "../../utils/style/device"


const ProposBox = styled.div`  
    ${flexCenter}
    ${backgroundStandard}
    @media screen and (min-width: ${size.desktopMax}) {
        width: 80%;
    } 
`
const DescPerso = styled.p`
    width: 60%;
    margin-bottom: 50px;
    @media screen and (max-width: ${size.mobileL}) {
        width: 80%;
    }
    @media screen and (max-width: ${size.mobileM}) {
        font-size:0.8em;
    }
    @media screen and (min-width: ${size.desktopMax}) {
        width: 50%;
    } 
`

function Apropos() {
    return (
        <ProposBox id="APropos">
            <h2>À propos</h2>
            <DescPerso>
                Je suis un jeune développeur web à la recherche de nouvelles expériences. <br /><br />
                Friant de jeux vidéo de longue date, j'ai acquis un interet particulier pour le développement web.<br />
                Je dispose, depuis 2024, d'un titre professionel de « Développeur Intégrateur Web », obtenu à la suite d'une formation avec OpenClassrooms. <br />
                Je suis capable, entre autres, d'intégrer des maquettes de sites static ou dynamique avec Javascript, d'écrire des composants React, de gérer des States avec Redux et de communiquer avec une Api.
            </DescPerso>
        </ProposBox>
    )
}
export default Apropos
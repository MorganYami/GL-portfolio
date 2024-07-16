import styled from "styled-components"
import { backgroundStandard, flexCenter } from "../../utils/style/variables"


const ProposBox = styled.div`   
    ${flexCenter}
    ${backgroundStandard}
`
const DescPerso = styled.p`
    width: 60%;
    margin-bottom: 50px
`

function Apropos() {
    return (
        <ProposBox id="APropos">
            <h2>À propos</h2>
            <DescPerso>
                Je suis un jeune développeur web à la recherche de nouvelles expériences. <br /><br />
                Friant de jeux vidéo de longue date, j'ai acquis un interet particulier pour le développement web.<br />
                Je dispose, depuis 2024, d'un titre professionel de « Développeur Intégrateur Web », obtenu à la suite d'une formation avec OpenClassrooms. <br />
                
            </DescPerso>
        </ProposBox>
    )
}
export default Apropos
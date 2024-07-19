import styled from "styled-components"
import accueilImage from '../../assets/background/codescreen01.jpg'
import colors from "../../utils/style/colors"
import { flexCenter } from "../../utils/style/variables"
import { size } from "../../utils/style/device"

const AccueilBox = styled.div`
    ${flexCenter}
    height: 575px;
    background: no-repeat center url(${accueilImage});
    background-size: cover;
    color: white;
    padding: 10px 20px; 
    text-align: center;
    text-shadow: 2px 4px 4px ${colors.backgroundDark};
    @media screen and (max-width: ${size.mobileL}) {
        padding: 20px 20px;
        h2 {
            font-size: 1.3em;
        }
        h3 {
            font-size: 0.7em;
        }
    }
    
    
`

function Hello() {
    return(
        <AccueilBox id="Accueil">
            <h1>Guillaume LABAN</h1>
            <h2>Développeur / Intégrateur Web</h2>
            <h3>Je recherche un CDD ou un CDI dans le domaine de l'intégration Web.</h3>
        </AccueilBox>
    )
}

export default Hello
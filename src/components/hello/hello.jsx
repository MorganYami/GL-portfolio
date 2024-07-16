import styled from "styled-components"
import accueilImage from '../../assets/background/codescreen01.jpg'
import colors from "../../utils/style/colors"
import { flexCenter } from "../../utils/style/variables"

const AccueilBox = styled.div`
    ${flexCenter}
    height: 575px;
    background: no-repeat center url(${accueilImage});
    background-size: cover;
    color: white;
    padding: 10px 20px;    
    text-shadow: 2px 4px 4px ${colors.backgroundDark};
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
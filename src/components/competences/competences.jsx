import styled from "styled-components"
import { backgroundStandard, flexCenter } from "../../utils/style/variables"
import logoHtml from "../../assets/logos/logoHTML.png"
import logoCss from "../../assets/logos/logoCSS.png"
import logoScss from "../../assets/logos/logoSASS.png"
const Comp = styled.div`
    ${flexCenter}
    ${backgroundStandard}
`
const CompList = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`

function Competences(){
    return (
        <Comp id="Competences">
            <h2>Compétences</h2>
            <div>
                <h3>Maitrisées:</h3>
                <CompList>
                    <img src={logoHtml}  alt=""/>
                    <p>HTML</p>
                </CompList>
                <CompList>
                    <img src={logoCss}  alt=""/>
                    <p>CSS</p>
                </CompList>
                <CompList>
                    <img src={logoScss}  alt=""/>
                    <p>SCSS</p>
                </CompList>
                <CompList>Etc...</CompList>
                {/* Maitrisé:
                    Html Css,
                    Sass/Scss,
                    Javascript,
                    React,
                    Redux
                Outils:
                    Git,
                    Vscode,
                    Postman
                Notions:
                    NodeJS,
                    Php,
                    MySQL,
                    SEO */}
            </div>
        </Comp>
    )
}

export default Competences
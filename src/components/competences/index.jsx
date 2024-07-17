import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"
import colors from "../../utils/style/colors"

import logoHtml from "../../assets/logos/logoHTML.png"
import logoCss from "../../assets/logos/logoCSS.png"
import logoScss from "../../assets/logos/logoSASS.png"
import logoJS from "../../assets/logos/logoJS.png"
import logoReact from "../../assets/logos/logoREACT.png"
import logoRedux from "../../assets/logos/logoREDUX.png"
import logoGit from "../../assets/logos/logoGit.png"
import logoVS from "../../assets/logos/logoVScode.png"
import logoPost from "../../assets/logos/logoPostman.png"
import logoNode from "../../assets/logos/logoNodeJS.png"
import logoPhp from "../../assets/logos/logoPHP.png"
import logoSQL from "../../assets/logos/logoMySQL.png"
import logoSEO from "../../assets/logos/logoSEO.png"


const Comp = styled.div`
    ${flexCenter}
    ${backgroundStandard}
`
const CompBox = styled.div`
    width:80%;
    ${flexCenter}
`
const CompRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
const CompList = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    background-color: ${colors.tertiary};
    padding: 5px 10px;
    ${contourShadow}
`

function Competences() {
    return (
        <Comp id="Competences">
            <h2>Compétences</h2>
            <CompBox>
                <h3>Maitrisées:</h3>
                <CompRow>
                    <CompList>
                        <img src={logoHtml} alt="" />
                        <p>&emsp; HTML</p>
                    </CompList>
                    <CompList>
                        <img src={logoCss} alt="" />
                        <p>&emsp; CSS</p>
                    </CompList>
                    <CompList>
                        <img src={logoScss} alt="" />
                        <p>&emsp; SCSS</p>
                    </CompList>
                    <CompList>
                        <img src={logoJS} alt="" />
                        <p>&emsp; Javascript</p>
                    </CompList>
                    <CompList>
                        <img src={logoReact} alt="" />
                        <p>&emsp; React</p>
                    </CompList>
                    <CompList>
                        <img src={logoRedux} alt="" />
                        <p>&emsp;Redux</p>
                    </CompList>
                </CompRow>
                <h3>Outils:</h3>
                <CompRow>
                    <CompList>
                        <img src={logoGit} alt="" />
                        <p>&emsp;Git</p>
                    </CompList>
                    <CompList>
                        <img src={logoVS} alt="" />
                        <p>&emsp;VScode</p>
                    </CompList>
                    <CompList>
                        <img src={logoPost} alt="" />
                        <p>&emsp;Postman</p>
                    </CompList>
                </CompRow>
                <h3>Notions:</h3>
                <CompRow>
                    <CompList>
                        <img src={logoNode} alt="" />
                        <p>&emsp;NodeJS</p>
                    </CompList>
                    <CompList>
                        <img src={logoPhp} alt="" />
                        <p>&emsp;Php</p>
                    </CompList>
                    <CompList>
                        <img src={logoSQL} alt="" />
                        <p>&emsp;MySQL</p>
                    </CompList>
                    <CompList>
                        <img src={logoSEO} alt="" />
                        <p>&emsp;SEO</p>
                    </CompList>
                </CompRow>
            </CompBox>
        </Comp>
    )
}

export default Competences
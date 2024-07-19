import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"
import colors from "../../utils/style/colors"

import logoHtml from "../../assets/logos/logoHTML.webp"
import logoCss from "../../assets/logos/logoCSS.webp"
import logoScss from "../../assets/logos/logoSASS.webp"
import logoJS from "../../assets/logos/logoJS.webp"
import logoReact from "../../assets/logos/logoREACT.webp"
import logoRedux from "../../assets/logos/logoREDUX.webp"
import logoGit from "../../assets/logos/logoGit.webp"
import logoVS from "../../assets/logos/logoVScode.webp"
import logoPost from "../../assets/logos/logoPostman.webp"
import logoNode from "../../assets/logos/logoNodeJS.webp"
import logoPhp from "../../assets/logos/logoPHP.webp"
import logoSQL from "../../assets/logos/logoMySQL.webp"
import logoSEO from "../../assets/logos/logoSEO.webp"
import { size } from "../../utils/style/device"


const Comp = styled.div`
    ${flexCenter}
    ${backgroundStandard}
`
const CompBox = styled.div`
    width:90%;
    ${flexCenter}
`
const CompRow = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media screen and (max-width: ${size.tablet}) {
    
    }
`
const CompList = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    margin: 20px 10px;
    background-color: ${colors.tertiary};
    padding: 5px 10px;
    ${contourShadow}
    align-items: center;
    justify-content: center;
    img {
        height: 40px;
    }
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
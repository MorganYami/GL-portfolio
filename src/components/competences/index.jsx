import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"
import colors from "../../utils/style/colors"
import { motion } from "framer-motion"

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
    @media screen and (min-width: ${size.desktopMax}) {
        width: 80%;
    } 
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
    border-color: white;
    align-items: center;
    justify-content: center;
    img {
        height: 40px;
    }
    p {
        margin-left: 15px
    }
`

function Competences() {
    return (
        <Comp id="Competences">
            <h2>Compétences</h2>
            <CompBox>
                <h3>Maitrisées:</h3>
                <CompRow>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoHtml} alt="" />
                        <p> HTML</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoCss} alt="" />
                        <p> CSS</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoScss} alt="" />
                        <p> SCSS</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoJS} alt="" />
                        <p> Javascript</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoReact} alt="" />
                        <p> React</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoRedux} alt="" />
                        <p>Redux</p>
                    </CompList>
                </CompRow>
                <h3>Outils:</h3>
                <CompRow>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1}}>
                        <img src={logoGit} alt="" />
                        <p>Git</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1}}>
                        <img src={logoVS} alt="" />
                        <p>VScode</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1}}>
                        <img src={logoPost} alt="" />
                        <p>Postman</p>
                    </CompList>
                </CompRow>
                <h3>Notions:</h3>
                <CompRow>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoNode} alt="" />
                        <p>NodeJS</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoPhp} alt="" />
                        <p>Php</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoSQL} alt="" />
                        <p>MySQL</p>
                    </CompList>
                    <CompList as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                        <img src={logoSEO} alt="" />
                        <p>SEO</p>
                    </CompList>
                </CompRow>
            </CompBox>
        </Comp>
    )
}

export default Competences
import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"
import colors from "../../utils/style/colors"
import { size } from "../../utils/style/device"
import { motion } from "framer-motion"
// import formationList from "../../data/formation.json"

const FormationBox = styled.div`
    ${flexCenter}
    ${backgroundStandard}
    @media screen and (min-width: ${size.desktopMax}) {
        width: 80%;
    } 
`
const FormationCardList = styled.div`
    ${flexCenter}
`
const FormationCard = styled.div`
    
    background-color: ${colors.primary};
    width: 80%;
    height: 80px;
    margin-bottom: 50px;
    text-align: center;
    align-content: center;    
    ${contourShadow}
    border-color: white;

    @media (min-width: ${size.tablet}) {
        width: 500px;
    }
`


function Chrono(){
    return (
        <FormationBox id="Formations">
            <h2>Formation</h2> 
                <FormationCardList>
                    <FormationCard as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>2012: Baccalauréat Science - Privas</FormationCard>
                    <FormationCard as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>2018: Formation développeur web - Simplon Pau</FormationCard>
                    <FormationCard as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>2023-2024: Formation Intégrateur Web - OpenClassrooms</FormationCard>
                    <FormationCard as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>2024: Titre professionel «Développeur Intégrateur Web» - OpenClassroom</FormationCard>
                </FormationCardList>
        </FormationBox>
    )
}

export default Chrono
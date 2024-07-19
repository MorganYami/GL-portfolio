import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"
import colors from "../../utils/style/colors"
import { size } from "../../utils/style/device"
// import formationList from "../../data/formation.json"

const FormationBox = styled.div`
    ${flexCenter}
    ${backgroundStandard}
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

    @media (min-width: ${size.tablet}) {
        width: 500px;
    }
`
// function createFormationCard(formation) {
//     formation.forEach(element => {
//         return (
//             <FormationCard>${element.date}: ${element.description} - ${element.where}</FormationCard>
//         )
//     })
// }


function Chrono(){
    // console.log(formationList);
    return (
        <FormationBox id="Formations">
            <h2>Formation</h2> 
                <FormationCardList>
                    <FormationCard>2012: Baccalauréat Science - Privas</FormationCard>
                    <FormationCard>2018: Formation développeur web - Simplon Pau</FormationCard>
                    <FormationCard>2023-2024: Formation Intégrateur Web - OpenClassrooms</FormationCard>
                    <FormationCard>2024: Titre professionel «Développeur Intégrateur Web» - OpenClassroom</FormationCard>
                    {/* {console.log(formationList + "Deux")} */}
                </FormationCardList>
        </FormationBox>
    )
}

export default Chrono
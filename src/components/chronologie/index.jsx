import styled from "styled-components"
import { backgroundStandard, flexCenter } from "../../utils/style/variables"
import colors from "../../utils/style/colors"
// import formationList from "../../data/formation.json"

const FormationBox = styled.div`
    ${flexCenter}
    ${backgroundStandard}
`
const FormationCard = styled.div`
    background-color: ${colors.primary};
    width: 500px;
    height: 50px;
    margin-bottom: 20px;
    text-align: center;
    align-content: center;
    border-radius: 5px;

`

function Chrono(){
    return (
        <FormationBox id="Formations">
            <h2>Formation</h2> 
                <div>
                    <FormationCard>2012: Baccalauréat Science</FormationCard>
                    <FormationCard>2018: Formation développeur web - Simplon Pau</FormationCard>
                    <FormationCard>2023-2024: Formation Intégrateur Web - OpenClassrooms</FormationCard>
                    <FormationCard>2024: Titre professionel « Développeur Intégrateur Web »</FormationCard>
                    
                </div>
        </FormationBox>
    )
}

export default Chrono
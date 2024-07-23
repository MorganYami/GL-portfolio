import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"
import colors from "../../utils/style/colors"
import { size } from "../../utils/style/device"
import { motion } from "framer-motion"
import formationList from "../../data/formation.json"
import React, { Component } from "react"

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
class FormationCards extends Component {
    constructor() {
        super();
        this.state = {
            formationList: []
        }
    }
    componentDidMount() {
        let formations = formationList.formations.map((formations, key) => {
            return (
                <FormationCard
                    key={formations.id}
                    as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}
                >
                    {formations.date}: {formations.description} - {formations.where}
                </FormationCard>
            )
        })
        this.setState({formations: formations});
    }

    render() {
        return (
            <FormationBox id="Formations">
                <h2>Formation</h2>
                <FormationCardList>
                    {this.state.formations}
                </FormationCardList>
            </FormationBox>
        )
    }
}
export default FormationCards;
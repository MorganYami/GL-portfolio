import styled from "styled-components"
import { backgroundStandard, contourShadow, flexCenter } from "../../utils/style/variables"
import colors from "../../utils/style/colors"
import { motion } from "framer-motion"
import { size } from "../../utils/style/device"
import React, { Component } from "react"
import competanceList from "../../data/competances.json"


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
    .compDetail{
        margin-left: 0px;
    }
`

class CompetancesCards extends Component {
    constructor() {
        super();
        this.state = {
            competanceList: []
        }
    }
    componentDidMount() {
        let maitrise = competanceList.maitrise.map((maitrise, key) => {
            return (
                <CompList 
                key={maitrise.id}
                as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                    <img src={process.env.PUBLIC_URL + `/assets/logos/` + maitrise.url} alt="" />
                    <p> {maitrise.name} </p>
                </CompList>
            )
        })
        this.setState({maitrise: maitrise});

        let outils = competanceList.outils.map((outils, key) => {
            return (
                <CompList 
                key={outils.id}
                as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                    <img src={process.env.PUBLIC_URL + `/assets/logos/` + outils.url} alt="" />
                    <p> {outils.name} </p>
                </CompList>
            )
        })
        this.setState({outils: outils});

        let notions = competanceList.notions.map((notions, key) => {
            return (
                <CompList 
                key={notions.id}
                as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                    <img src={process.env.PUBLIC_URL + `/assets/logos/` + notions.url} alt="" />
                    <p> {notions.name} </p>
                </CompList>
            )
        })
        this.setState({notions: notions});

        
        let competances = competanceList.competances.map((competances, key) => {
            return (
                <CompList 
                key={competances.id}
                as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 1 }}>
                    <p className="compDetail"> {competances.name} </p>
                </CompList>
            )
        })
        this.setState({competances: competances});
    }

    render() {
        return (
            <Comp id="Competences">
             <h2>Compétences</h2>
             <CompBox>
                 <h3>Maitrisées:</h3>
                 <CompRow>
                    {this.state.maitrise}
                 </CompRow>
                 <h3>Outils:</h3>
                 <CompRow>
                    {this.state.outils}
                 </CompRow>
                 <h3>Notions:</h3>
                 <CompRow>
                    {this.state.notions}
                 </CompRow>
                 <h3>Savoir faire pratique:</h3>
                 <CompRow>
                    {this.state.competances}
                 </CompRow>
             </CompBox>
         </Comp>
        )
    }
}
export default CompetancesCards;
import styled from 'styled-components';
import Logo from '../../assets/logos/logoPortfolio_small.webp';
import colors from '../../utils/style/colors';
import { size } from '../../utils/style/device';
import { flexCenter } from '../../utils/style/variables';
import navButton from '../../assets/icons/navButton.svg'
import { useState } from 'react';

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.backgroundDarker};
`
const LogoImg = styled.img`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 25px;
    padding: 2px;
    margin-left: 10px;
`
const NavLarge = styled.nav`    
    display: flex;    
    @media screen and (max-width: ${size.tablet}) {
        display: none;
    }
`
const NavSmall = styled.nav`
    display: none;    
    @media screen and (max-width: ${size.tablet}) {
        ${flexCenter}
    }   
`
const ButtonNav = styled.img`
    margin-right: 20px;
    background-color: white;
    padding: 2px 5px;
    border-radius: 5px;
`
const NavLink = styled.a`
    margin-right: 20px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        color: ${colors.secondary};
        text-decoration: underline;
    }
`
const NSBox = styled.div`
    display: none;    
    @media screen and (max-width: ${size.tablet}) {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 75px;
        right: 0px;
        padding: 10px 20px;
        background-color: ${colors.backgroundDark};
        border-bottom-left-radius: 10px;
    }  
    
`
const NavLinkS = styled.a`
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
`

function Navbar() {
    const [displayNavBar, changeDisplayNavBar] = useState("false");

    if (displayNavBar) {
        return (
            <StyledHeader>
                <LogoImg id="logo" src={Logo} alt="" />
                <NavLarge>
                    <NavLink href="#Accueil">Accueil</NavLink>
                    <NavLink href="#APropos">À Propos</NavLink>
                    <NavLink href="#Competences">Compétences</NavLink>
                    <NavLink href="#Formations">Formations</NavLink>
                    <NavLink href="#Portfolio">Portfolio</NavLink>
                    <NavLink href="#Contact">Contact</NavLink>
                </NavLarge>
                <NavSmall>
                    <ButtonNav src={navButton} alt="" onClick={(e) => changeDisplayNavBar(!displayNavBar)} />
                </NavSmall>
            </StyledHeader>
        )
    }
    else {
        return (
            <StyledHeader>
                <LogoImg id="logo" src={Logo} alt="" />
                <NavLarge>
                    <NavLink href="#Accueil">Accueil</NavLink>
                    <NavLink href="#APropos">À Propos</NavLink>
                    <NavLink href="#Competences">Compétences</NavLink>
                    <NavLink href="#Formations">Formations</NavLink>
                    <NavLink href="#Portfolio">Portfolio</NavLink>
                    <NavLink href="#Contact">Contact</NavLink>
                </NavLarge>
                <NavSmall>
                    <ButtonNav src={navButton} alt="" onClick={(e) => changeDisplayNavBar(!displayNavBar)} />
                </NavSmall>
                <NSBox id="navLinks">
                    <NavLinkS href="#Accueil">Accueil</NavLinkS>
                    <NavLinkS href="#APropos">À Propos</NavLinkS>
                    <NavLinkS href="#Competences">Compétences</NavLinkS>
                    <NavLinkS href="#Formations">Formations</NavLinkS>
                    <NavLinkS href="#Portfolio">Portfolio</NavLinkS>
                    <NavLinkS href="#Contact">Contact</NavLinkS>
                </NSBox>
            </StyledHeader>
        )
    }


}

export default Navbar
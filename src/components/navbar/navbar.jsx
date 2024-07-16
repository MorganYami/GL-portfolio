import styled from 'styled-components';
import Logo from '../../assets/logos/logoPortfolio_small.png';
import colors from '../../utils/style/colors';

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.backgroundDark}
`
const LogoImg = styled.img`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 25px;
    padding: 2px;
    margin-left: 10px;
`
const NavLinks = styled.a`
    margin-right: 20px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        color: ${colors.secondary};
        text-decoration: underline;
    }
`

function Navbar() {
    return (
        <StyledHeader>
            <LogoImg id="logo" src={Logo} alt="" />
            <nav id="navLinkLarge">
                <NavLinks href="#Accueil">Accueil</NavLinks>
                <NavLinks href="#APropos">À Propos</NavLinks>
                <NavLinks href="#Competences">Compétences</NavLinks>
                <NavLinks href="#Formations">Formations</NavLinks>
                <NavLinks href="#Portfolio">Portfolio</NavLinks>
                <NavLinks href="#Contact">Contact</NavLinks>
            </nav>
        </StyledHeader>
    )
}

export default Navbar
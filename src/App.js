import styled from 'styled-components';
import Apropos from './components/apropos';
import Chrono from './components/chronologie';
import Competences from './components/competences';
import Footer from './components/footer';
import Hello from './components/hello';
import Navbar from './components/navbar';
import Projets from './components/projets';
import { flexCenter } from './utils/style/variables';
import { size } from './utils/style/device';

const StyledApp = styled.div`
  @media screen and (min-width: ${size.desktopMax}) {
    ${flexCenter}
    justify-content: flex-start;
  }
`

function App() {
  return (
    <StyledApp className="App">
      <Navbar />
      <Hello />
      <Apropos />
      <Competences />
      <Chrono />
      <Projets />
      <Footer />
    </StyledApp>
  );
}

export default App;

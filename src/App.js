
// import './App.css';
import Apropos from './components/apropos';
import Chrono from './components/chronologie';
import Competences from './components/competences';
import Footer from './components/footer';
import Hello from './components/hello';
import Navbar from './components/navbar';
import Projets from './components/projets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hello />
      <Apropos />
      <Competences />
      <Chrono />
      <Projets />
      <Footer />
    </div>
  );
}

export default App;

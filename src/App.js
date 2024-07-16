
// import './App.css';
import Apropos from './components/apropos/apropos';
import Chrono from './components/chronologie/chronologie';
import Competences from './components/competences/competences';
import Footer from './components/footer/footer';
import Hello from './components/hello/hello';
import Navbar from './components/navbar/navbar';
import Projets from './components/projets/projets';

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

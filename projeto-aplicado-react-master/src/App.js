import './App.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import SobreNos from './pages/SobreNos';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';

function App() {
  return (

    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre-nos" element={<SobreNos />} />
        <Route exact path="/cardapio" element={<Cardapio />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

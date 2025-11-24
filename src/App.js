
import Header from './components/Header';
import './App.css';
import Home from './Pages/Home';
import Feedback from './Pages/Feedback';
import { Routes, Route} from 'react-router-dom'; 
import Footer from './components/Footer';
import Encomendas from './Pages/Encomendas';
import Ranking from './Pages/Ranking';
function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encomendas" element={<Encomendas/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/melhoresdoces" element={<Ranking/>} />
        </Routes>
      <Footer />
    </div>
  );
}       


export default App;

    

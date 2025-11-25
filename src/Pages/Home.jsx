
import Slider from '../components/Slider';
import Calda from '../components/Calda';
import Sobre from '../components/Sobre';
import Cardapio from '../components/Cardápio';
import VideoSection from '../components/VideoSection';
import Contato from '../components/Contato';
import '../Calda.css';
import '../Cardapio.css';
import '../Contato.css';
import '../Footer.css';
import '../video.css';
import '../App.css';
import "../Slider.css";
import "../Sobre.css";

export default function Home() {
  return (
    <> 
    <Slider />
    <Calda />
     <Cardapio />
    <Sobre />
    <VideoSection />
    <Contato />
    </>
     
  );
}
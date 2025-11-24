
// useState: guarda o slide atual
// useEffect: executa o temporizador que muda o slide automaticamente
import { useState, useEffect } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg"

export default function Slider() {
  // index começa em 0 (primeiro slide)
  const [indice, setIndice] = useState(0);
  const imagens = [img1, img2, img3, img4];

  // Efeito que roda uma vez quando o componente é montado
  useEffect(() => {
    const temporizador = setInterval(() => {
      /* "% images.length" garante que volte pro início quando chegar no último 
      ( se 2 + 1 = 3 % 3 = 0 ) , no zero, recomeça */
      setIndice((indiceSlide) => (indiceSlide + 1) % imagens.length);
    }, 4000);

    // Isso evita que o temporizador continue rodando quando o componente for desmontado
    return () => clearInterval(temporizador);
  }, []); // array vazio: roda só uma vez

  return (
    // Container principal do slider — define o espaço visível
    <div className="slider-container">

      {/* Div que contém todos os slides lado a lado */}
      {/* O transform move o conjunto inteiro conforme o índice atual */}
      <div
        className="slider"
        style={{ transform: `translateX(-${indice * 100}%)` }}
      >

        {/* Faz um loop no array de imagens e cria uma div pra cada imagem */}
        {imagens.map((img, indiceImg) => (
          <div className="slide" key={indiceImg}>
            {/* A imagem de cada slide */}
            <img src={img} alt={`Slide ${indiceImg + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

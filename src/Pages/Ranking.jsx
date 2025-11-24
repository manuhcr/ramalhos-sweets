import React, { useState } from "react";
import DoceModal from "../components/DoceModal";
import "../Ranking.css";
import tortaGelada from '../assets/tortagelada5.png';
import boloRed from '../assets/boloredvelvet.jpg';
import cheesecake from '../assets/cheesecake.png';
import tortaMaça from '../assets/tortademaça2.png';

export default function Ranking() {
  const [selectedDoce, setSelectedDoce] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const abrirModal = (doce) => {
    setSelectedDoce(doce);
    setIsModalOpen(true);
  };
const doces = [
  {
    nome: "Torta Gelada de Morango",
    img: tortaGelada,
    tituloDescricao: "Critérios Melhor Doce de 2021 - Ramalhos Sweets:",
    descricao: `
      <b>Frescor e Intensidade da Fruta:</b> Avaliação da vivacidade do sabor da fruta principal e da sensação de frescor que ela proporciona.<br><br>
      <b>Leveza e Delicadeza da Base:</b> Análise da textura da base, buscando leveza e que não sobrecarregue a experiência.<br><br>
      <b>Equilíbrio entre Doçura e Acidez da Fruta:</b> Consideração da harmonia entre o dulçor adicionado e a acidez natural da fruta.<br><br>
      <b>Apresentação Refrescante e Cores Naturais:</b> Avaliação da estética que transmita a sensação de frescor e a autenticidade dos ingredientes.<br><br>
      <b>Qualidade da Fruta Utilizada:</b> Consideração do ponto de maturação, do aroma e do sabor da fruta principal.<br><br>
      <b>Sensação de Leveza e Revigoramento:</b> Avaliação da capacidade do doce de proporcionar uma sensação refrescante e agradável, especialmente em climas mais quentes.
    `,
    tituloWin: "Por que a Torta Gelada de Morango foi Eleita a Melhor de 2021",
    win: `
      <b>Frescor e Intensidade da Fruta:</b> A Torta Gelada de Morango oferecia uma explosão do sabor vibrante e fresco de morangos maduros.<br><br>
      <b>Leveza e Delicadeza da Base:</b> A base de pão de ló era incrivelmente leve e macia, permitindo que o sabor do morango e a cremosidade do creme fossem os protagonistas.<br><br>
      <b>Equilíbrio entre Doçura e Acidez da Fruta:</b> A doçura do creme era perfeitamente equilibrada pela acidez natural e refrescante dos morangos.<br><br>
      <b>Apresentação Refrescante e Cores Naturais:</b> A torta tinha tons de vermelho vivo dos morangos e o branco do creme, transmitindo frescor.<br><br>
      <b>Qualidade da Fruta Utilizada:</b> Utilização de morangos frescos, doces e aromáticos evidentes em cada mordida.<br><br>
      <b>Sensação de Leveza e Revigoramento:</b> Proporcionava uma sensação refrescante e revigorante, ideal para dias quentes.
    `
  },
  {
    nome: "Bolo Red Velvet com Cream Cheese",
    img: boloRed,
    tituloDescricao: "Critérios Melhor Doce de 2022 - Ramalhos Sweets:",
    descricao: `
      <b>Complexidade Aromática:</b> Avaliação da riqueza e da sutileza dos aromas que compõem o doce.<br><br>
      <b>Harmonia Textural em Camadas:</b> Análise da interação das diferentes texturas presentes em cada camada do doce.<br><br>
      <b>Equilíbrio entre Doçura e Acidez:</b> Proporção ideal entre o dulçor da massa e a acidez do cream cheese.<br><br>
      <b>Vibrância da Cor e Apelo Visual Sofisticado:</b> Avaliação da intensidade da cor vermelha e elegância da apresentação.<br><br>
      <b>Qualidade dos Lácteos Utilizados:</b> Consideração da qualidade e frescor do cream cheese.<br><br>
      <b>Sensação de Conforto e Familiaridade:</b> Capacidade de evocar sensações agradáveis e memórias afetivas.
    `,
    tituloWin: "Por que o Bolo Red Velvet com Cream Cheese foi Eleito o Melhor de 2022",
    win: `
      <b>Complexidade Aromática:</b> Aroma sutilmente achocolatado harmonizado com a frescura do cream cheese.<br><br>
      <b>Harmonia Textural em Camadas:</b> Massa macia com recheio cremoso denso, proporcionando uma experiência tátil rica.<br><br>
      <b>Equilíbrio entre Doçura e Acidez:</b> Doçura moderada equilibrada pela acidez suave do cream cheese.<br><br>
      <b>Vibrância da Cor e Apelo Visual Sofisticado:</b> Vermelho intenso da massa contrastado pelo branco do cream cheese.<br><br>
      <b>Qualidade dos Lácteos Utilizados:</b> Cream cheese fresco e de alta qualidade elevando a sobremesa.<br><br>
      <b>Sensação de Conforto e Familiaridade:</b> Clássico reconfortante executado de forma impecável.
    `
  },
  {
    nome: "Cheesecake de Frutas Vermelhas",
    img: cheesecake,
    tituloDescricao: "Critérios Melhor Doce de 2023 - Ramalhos Sweets:",
    descricao: `
      <b>Explosão de Sabores Frutados:</b> Avaliação da variedade, intensidade e harmonia dos sabores das frutas vermelhas.<br><br>
      <b>Cremosidade Sedosa do Recheio:</b> Textura suave, rica e aveludada do creme de queijo.<br><br>
      <b>Contraste Crocante da Base:</b> Base biscoito oferecendo crocância que complementa o recheio.<br><br>
      <b>Cores Vibrantes e Apelo Visual Fresco:</b> Apresentação com cores vivas das frutas destacando-se sobre o creme.<br><br>
      <b>Qualidade e Frescor das Frutas:</b> Ponto de maturação, aroma e sabor das frutas vermelhas.<br><br>
      <b>Equilíbrio entre Doçura e Acidez das Frutas:</b> Proporção ideal entre dulçor e acidez natural das frutas.
    `,
    tituloWin: "Por que o Cheesecake de Frutas Vermelhas foi Eleito o Melhor de 2023",
    win: `
      <b>Explosão de Sabores Frutados:</b> Combinação generosa de morangos, framboesas, mirtilos e groselhas.<br><br>
      <b>Cremosidade Sedosa do Recheio:</b> Recheio de cream cheese incrivelmente liso e cremoso.<br><br>
      <b>Contraste Crocante da Base:</b> Base de biscoito triturado oferecendo contraste crocante.<br><br>
      <b>Cores Vibrantes e Apelo Visual Fresco:</b> Frutas vermelhas brilhantes artisticamente sobre o cheesecake branco.<br><br>
      <b>Qualidade e Frescor das Frutas:</b> Frutas frescas, maduras e de alta qualidade.<br><br>
      <b>Equilíbrio entre Doçura e Acidez das Frutas:</b> Doçura suave equilibrada pela acidez revigorante das frutas.
    `
  },
  {
    nome: "Torta de Maçã Caramelizada",
  img: tortaMaça,
     
    tituloDescricao: "Critérios Melhor Doce de 2024 - Ramalhos Sweets:",
    descricao: `
      <b>Profundidade do Sabor Caramelizado:</b> Riqueza, complexidade e notas amanteigadas do caramelo nas maçãs.<br><br>
      <b>Textura da Maçã Assada:</b> Maciez das maçãs mantendo equilíbrio entre firmeza e delicadeza.<br><br>
      <b>Qualidade e Crocância da Massa:</b> Textura da massa crocante e saborosa.<br><br>
      <b>Equilíbrio entre Doçura e Acidez da Maçã:</b> Harmonia entre dulçor do caramelo e acidez natural das maçãs.<br><br>
      <b>Aroma Envolvente de Maçã e Caramelo:</b> Perfume que convida à degustação.<br><br>
      <b>Sensação de Conforto e Aconchego:</b> Capacidade de evocar sentimentos de familiaridade e satisfação.
    `,
    tituloWin: "Por que a Torta de Maçã Caramelizada foi Eleita a Melhor de 2024",
    win: `
      <b>Profundidade do Sabor Caramelizado:</b> Fatias de maçã caramelizaram lentamente, desenvolvendo sabor rico e amanteigado.<br><br>
      <b>Textura da Maçã Assada:</b> Maçãs perfeitamente assadas, levemente resistentes ao morder.<br><br>
      <b>Qualidade e Crocância da Massa:</b> Massa folhada crocante e dourada, complementando o recheio.<br><br>
      <b>Equilíbrio entre Doçura e Acidez da Maçã:</b> Doçura rica equilibrada pela acidez natural e levemente picante.<br><br>
      <b>Aroma Envolvente de Maçã e Caramelo:</b> Aroma quente e convidativo de maçãs assadas com caramelo.<br><br>
      <b>Sensação de Conforto e Aconchego:</b> Clássico reconfortante com execução primorosa.
    `
  }
];


  return (
   <section className="ranking-section">
      <h2 className="bestcandytitle">Ranking: melhores doces classificados de cada ano</h2>
      <div className="cards-container">
        {doces.map((doce, i) => (
          <div key={i}>
            <h3 className="bestcandytitle">Melhor doce de {2021 + i}:</h3>
            <div className="card">
              <div
                className="card-content"
                onClick={() => abrirModal(doce)}
              >
                <img className="imgbestone" width="160" src={doce.img} alt={doce.nome} />
                <div>
                  <h1 className="titlebestone">{doce.nome}</h1>
                  <p className="textbestone">
                    Clique no card e saiba o porque esse doce foi o queridinho de {2021 + i}!
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DoceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doce={selectedDoce}
      />
    </section>
  );
}

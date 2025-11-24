import React, { useState } from "react";
import imgmodal1 from '../assets/bolosetortas.png'
import imgmodal2 from '../assets/docesbrasileiros.webp'
import imgmodal3 from '../assets/sobremesasgeladas (2).webp'
import imgmodal4 from '../assets/docesespeciais.webp'
import imgmodal5 from '../assets/chocobrownies.webp'
import bolo from '../assets/pedaco-de-bolo.png'
import brigadeiro from '../assets/brigadeiro.png'
import sorvete from '../assets/sorvete.png'
import chocolate from '../assets/chocolate.png'
import doces from '../assets/doces.png'

export default function Cardápio() {
    const [tipo, setTipo] = useState(null)
    let conteudo = {
        bolos: (
            <>
                <h1 style={{ textAlign: "center" }}> Bolos e tortas </h1>
                <ul>
                    <li> <img className="doce" src={bolo} alt="cake" /> Bolo de chocolate com cobertura cremosa – <strong>R$ 49,90 (1kg)</strong></li>
                    <li><img className="doce" src={bolo}  alt="cake" /> Bolo de morango com chantilly – <strong>R$ 54,90 (1kg)</strong></li>
                    <li><img className="doce" src={bolo}  alt="cake" /> Bolo de cenoura com calda de chocolate – <strong>R$ 44,90 (1kg)</strong></li>
                    <li><img className="doce" src={bolo}  alt="cake" /> Bolo Red Velvet com cream cheese – <strong>R$ 64,90 (1kg)</strong></li>
                    <li><img className="doce" src={bolo}  alt="cake" /> Cheesecake de frutas vermelhas – <strong>R$ 69,90 (1kg)</strong></li>
                    <li><img className="doce" src={bolo}  alt="cake" /> Torta holandesa – <strong>R$ 59,90 (1kg)</strong></li>
                    <li><img className="doce" src={bolo}  alt="cake" /> Torta de limão com merengue – <strong>R$ 49,90 (1kg)</strong></li>
                    <li><img className="doce" src={bolo}  alt="cake" /> Torta de maçã caramelizada – <strong>R$ 55,90 (1kg)</strong></li>
                </ul>
            </>
        ),
        docesbrasileiros: (
            <>
                < h1 style={{ textAlign: "center" }} > Doces Brasileiros </h1>
                <ul>
                    <li> <img className="doce" src={brigadeiro} alt="candy" /> Brigadeiro gourmet (tradicional, branco, pistache, etc) – <strong>R$ 3,50 (unidade)</strong></li>
                    <li><img className="doce" src={brigadeiro} alt="candy" /> Beijinho de coco – <strong>R$ 3,00 (unidade)</strong></li>
                    <li><img className="doce" src={brigadeiro} alt="candy" /> Cajuzinho – <strong>R$ 3,00 (unidade)</strong></li>
                    <li><img className="doce" src={brigadeiro} alt="candy" /> Bicho de pé – <strong>R$ 3,50 (unidade)</strong></li>
                    <li><img className="doce" src={brigadeiro} alt="candy" /> Palha italiana – <strong>R$ 5,00 (unidade)</strong></li>
                    <li><img className="doce" src={brigadeiro} alt="candy" /> Quindim <strong>– R$ 6,50 (unidade)</strong></li>
                    <li><img className="doce" src={brigadeiro} alt="candy" /> Cocada (branca, queimada, com leite condensado)  <strong> – R$ 4,50 (unidade)</strong></li>
                    <li><img className="doce" src={brigadeiro} alt="candy" /> Canjica doce <strong>– R$ 9,90 (250g)</strong></li>
                </ul>
            </>
        ),
        colddeserts: (
            <>
                <h1 style={{ textAlign: "center" }}>Sobremesas Geladas</h1>
                <ul>
                    <li><img className="doce" src={sorvete} alt="icecream" /> Pavê de chocolate – <strong>  R$ 49,90 (1kg) </strong></li>
                    <li><img className="doce" src={sorvete} alt="icecream" /> Mousse de maracujá – <strong> R$ 7,90 (taça)</strong></li>
                    <li><img className="doce" src={sorvete} alt="icecream" /> Mousse de chocolate com raspas – <strong> R$ 8,90 (taça)</strong></li>
                    <li><img className="doce" src={sorvete} alt="icecream" /> Torta gelada de morango – <strong>R$ 54,90 (1kg)</strong></li>
                    <li><img className="doce" src={sorvete} alt="icecream" /> Sorvete artesanal de diferentes sabores – <strong>R$ 12,90 (pote 500ml)</strong></li>
                    <li><img className="doce" src={sorvete} alt="icecream" /> Geladinho gourmet (morango com ninho, ninho com chocolate, abacaxi com coco, etc)  – <strong>R$ 5,00 (unidade)</strong></li>
                </ul>
            </>
        ),
        chocoandbrownie: (
            <>
                <h1 style={{ textAlign: "center" }}>Chocolates e Brownies</h1>
                <ul>
                    <li><img className="doce" src={chocolate} alt="chocolate" /> Brownie de chocolate – <strong>  R$ 7,90 (unidade) </strong></li>
                    <li><img className="doce" src={chocolate} alt="chocolate" /> Brownie recheado (Nutella, doce de leite, Oreo) – <strong> R$ 9,90 (unidade)</strong></li>
                    <li><img className="doce" src={chocolate} alt="chocolate" /> Cookie recheado com chocolate – <strong> R$ 6,50 (unidade)</strong></li>
                    <li><img className="doce" src={chocolate} alt="chocolate" /> Trufas de chocolate (tradicional, ninho, nutella, sensação, etc) – <strong>R$ 4,90 (unidade)</strong></li>
                    <li><img className="doce" src={chocolate} alt="chocolate" /> Barrinha de chocolate caseira – <strong>R$ 7,50 (unidade)</strong></li>
                </ul>
            </>
        ),
        docesespeciais: (
            <>
                <h1 style={{ textAlign: "center" }}>Doces Especiais</h1>
                <ul>
                    <li> <img className="doce" src={doces} alt="sweets" /> Macarons coloridos – <strong> R$ 5,50 (unidade) </strong></li>
                    <li> <img className="doce" src={doces} alt="sweets" /> Churros – <strong> R$ 7,90 (unidade) </strong> </li>
                    <li> <img className="doce" src={doces} alt="sweets" /> Rabanada açucarada – <strong> R$ 6,50 (unidade) </strong></li>
                    <li> <img className="doce" src={doces} alt="sweets" /> Waffle com calda e frutas – <strong> R$ 14,90 (prato)</strong> </li>
                    <li> <img className="doce" src={doces} alt="sweets" /> Donuts  – <strong>  R$ 8,90 (unidade) </strong> </li>
                    <li><img className="doce" src={doces} alt="sweets"/>Morango do amor <strong>R$ 12,90 (unidade) </strong></li>
                </ul>
            </>
        )
    }
    function abrirModal(tipo) {
        setTipo(tipo);

    }
    return (
        <section className="cardapio">
            <h1 className="cardapiotitle">Nosso cardápio açucarado</h1>
            <div className="divcardapio">
                <div className="imagensmodal">
                    <img className="doces" src={imgmodal1} onClick={() => abrirModal('bolos')} />
                    <h2 className="cardapiosubtitle">Bolos e Tortas</h2>
                </div>

                <div className="imagensmodal">
                    <img className="doces" src={imgmodal2} onClick={() => abrirModal('docesbrasileiros')} />
                    <h2 className="cardapiosubtitle">Doces Brasileiros</h2>
                </div>
                <div className="imagensmodal">
                    <img className="doces" src={imgmodal3}
                        onClick={() => abrirModal('colddeserts')} />
                    <h2 className="cardapiosubtitle">Sobremesas geladas</h2>
                </div>

                <div class="imagensmodal">
                    <img className="doces" src={imgmodal4}
                        onClick={() => abrirModal('chocoandbrownie')} />
                    <h2 className="cardapiosubtitle">Chocolates e Brownies</h2>
                </div>
                <div className="imagensmodal">
                    <img className="doces" src={imgmodal5} onClick={() => abrirModal('docesespeciais')} />
                    <h2 className="cardapiosubtitle">Doces Especiais</h2>
                </div>
            </div>

            <div id="modalcardapio" className={`modalcardapio ${tipo ? "active" : ""} `} >
                <div className="modalcardapio-content">
                    <span className="close" onClick={() => setTipo(null)}> x </span>
                    <div id="modalcardapio-Conteudo">
                        {conteudo[tipo]}
                    </div>
                </div>
            </div >
          

        </section>
    )


}
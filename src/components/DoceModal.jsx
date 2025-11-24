import React from "react";
import '../DoceModal.css';

export default function DoceModal({ isOpen, onClose, doce }) {
  if (!isOpen || !doce) return null; // Se o modal estiver fechado ou doce for nulo, não renderiza

  // Desestruturação do doce, usando "img" para a imagem
  const { nome, img, tituloDescricao, descricao, tituloWin, win } = doce;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <h1 className="modal-title">{nome}</h1>
        <div className="modal-content"> 
           {/* Exibe a imagem única */}
        {img && <img src={img} alt={nome} className="modal-img" />}
        <div>
          
        <h2 className="subtitle">{tituloDescricao}</h2>
        <p className="description" dangerouslySetInnerHTML={{ __html: descricao }} />

        <h2 className="subtitle">{tituloWin}</h2>
        <p className="description" dangerouslySetInnerHTML={{ __html: win }} />
        </div>

        </div>
      
      </div>
    </div>
  );
}

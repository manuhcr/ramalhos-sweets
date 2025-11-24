import React, { useState, useRef, useEffect } from "react";
import "../Feedback.css";
import carla from '../assets/download.jpeg';
import bruno from '../assets/retrato-de-homem-branco-isolado_53876-40306.avif';
import ana from '../assets/pessoa-de-origem-indiana-se-divertindo_23-2150285283.avif';

export default function FeedbackAndReviews() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [success, setSuccess] = useState("");

 
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ana Silva",
      date: "15/10/2025",
      text: "Os bolos são simplesmente maravilhosos — massa úmida e cobertura cremosa. Encomendei para o aniversário e todos amaram!",
      stars: 5,
      avatar: ana
    },
    {
      id: 2,
      name: "Bruno Pereira",
      date: "12/09/2025",
      text: "Comprei brigadeiros e macarons para uma festa: frescos, saborosos e muito bem embalados. Atendimento cordial e entrega no prazo.",
      stars: 5,
      avatar: bruno
    },
    {
      id: 3,
      name: "Carla Nunes",
      date: "01/08/2025",
      text: "Encomenda impecável — acabamento lindo e sabores autênticos. Recomendo para quem quer doces de qualidade para eventos.",
      stars: 5,
      avatar: carla
    },
  ]);

  // Carousel ref
  const listRef = useRef(null);

  function scrollNext() {
    if (!listRef.current) return;
    listRef.current.scrollBy({ left: 320, behavior: "smooth" });
  }

  function scrollPrev() {
    if (!listRef.current) return;
    listRef.current.scrollBy({ left: -320, behavior: "smooth" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!feedback.trim() || !name.trim()) return;
    // Push to reviews array as dummy (in real app you'd call API)
    const newReview = {
      id: Date.now(),
      name: name.trim(),
      date: new Date().toLocaleDateString(),
      text: feedback.trim(),
      stars: rating,
      avatar: "/mnt/data/616ab214-08d5-4709-aaad-fa6db9887ac9.png",
    };
    setReviews((r) => [newReview, ...r]);
    setSuccess("Obrigada! Seu feedback foi adicionado.");
    setTimeout(() => setSuccess(""), 3000);
    setOpen(false);
    setFeedback("");
    setName("");
    setRating(5);
  }

  // small helper to render stars
  function Stars({ n }) {
    return (
      <div className="stars" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < n ? "star on" : "star"}>
            ★
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="fr-root">
      <div className="fr-wrap">
        <div className="fr-header">
          <div className="fr-left">
            <h2 className="fr-title">Avaliações da nossa doceria!</h2>
            <div style={{display:'flex',alignItems:'center',gap:8,marginTop:6}}>
              <Stars n={5} />
              <span style={{color:'#7a3d22',fontSize:14,marginLeft:6}}>Classificação média 4.9 — {reviews.length} avaliações</span>
            </div>
          </div>
          <div>
            <button className="open-btn" onClick={()=>setOpen(true)}>Escrever feedback</button>
          </div>
        </div>

        <div className="fr-carousel">
          <div className="fr-controls">
            <button onClick={scrollPrev} aria-label="anterior">◀</button>
            <button onClick={scrollNext} aria-label="proximo">▶</button>
          </div>

          <div className="fr-track" ref={listRef}>
            {reviews.map((r) => (
              <article className="fr-card" key={r.id}>
                <div className="meta">
                  <img src={r.avatar} alt={r.name} />
                  <div>
                    <div className="fr-name">{r.name}</div>
                    <div className="fr-date">{r.date}</div>
                    <Stars n={r.stars} />
                  </div>
                </div>
                <div className="fr-text">{r.text}</div>
              </article>
            ))}
          </div>
        </div>

        {/* success message */}
        {success && <div className="success-msg">{success}</div>}

        {/* Modal */}
        {open && (
          <div className="fr-modal-overlay" onClick={() => setOpen(false)}>
            <div className="fr-modal" onClick={(e)=>e.stopPropagation()}>
              <button style={{float:'right',background:'none',border:'none',fontSize:20,color:'#c76b78'}} onClick={()=>setOpen(false)}>×</button>
              <h3>Enviar feedback</h3>
              <p>Compartilhe sua opinião — isso ajuda muito!</p>

              <form onSubmit={handleSubmit}>
                <div className="fr-field">
                  <label>Nome</label>
                  <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Seu nome" />
                </div>
                <div className="fr-field">
                  <label>Avaliação</label>
                  <select value={rating} onChange={(e)=>setRating(Number(e.target.value))}>
                    <option value={5}>5 - Excelente</option>
                    <option value={4}>4 - Muito bom</option>
                    <option value={3}>3 - Bom</option>
                    <option value={2}>2 - Regular</option>
                    <option value={1}>1 - Ruim</option>
                  </select>
                </div>
                <div className="fr-field">
                  <label>Comentário</label>
                  <textarea value={feedback} onChange={(e)=>setFeedback(e.target.value)} placeholder="Seu comentário..."></textarea>
                </div>

                <div style={{display:'flex',justifyContent:'flex-end',gap:8}}>
                  <button type="button" onClick={()=>setOpen(false)} style={{background:'transparent',border:'1px solid #f2c7c9',padding:'8px 12px',borderRadius:10}}>Cancelar</button>
                  <button type="submit" className="fr-submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

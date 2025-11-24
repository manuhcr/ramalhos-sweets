
// 1️⃣ FeedbackList
export function FeedbackList({ feedbacks, onOpenModal }) {
  return (
    <section className="feedback-list grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {feedbacks.map((f, i) => (
        <FeedbackCard key={i} {...f} />
      ))}

      <button
        onClick={onOpenModal}
        className="bg-pink-500 text-white px-4 py-2 rounded-xl mt-4 hover:bg-pink-600 transition"
      >
        Enviar Feedback
      </button>
    </section>
  );
}

// 2️⃣ FeedbackCard
export function FeedbackCard({ nome, estrelas, comentario, foto }) {
  return (
    <div className="feedback-card bg-white shadow-lg rounded-2xl p-4 flex gap-3">
      {foto && (
        <img
          src={foto}
          alt={nome}
          className="w-14 h-14 rounded-full object-cover"
        />
      )}

      <div>
        <h3 className="font-bold">{nome}</h3>
        <p className="text-yellow-500">{"★".repeat(estrelas)}</p>
        <p className="text-gray-700 text-sm mt-1">{comentario}</p>
      </div>
    </div>
  );
}

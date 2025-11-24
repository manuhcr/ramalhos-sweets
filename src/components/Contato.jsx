import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Contato() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const nomeSobrenome = form.nomesobrenome.value;
    const email = form.email.value;
    const receberEmail = form.receberEmail.checked;
    const motivo = form.motivoContato.value;
    const contatoPreferido = form.Contato.value;

    let mensagemFinal = `Olá, ${nomeSobrenome}! Agradecemos o seu contato.`;
    let formaDeContato = '';

    if (contatoPreferido === 'radio-mail') formaDeContato = `pelo seu email`;
    else if (contatoPreferido === 'radio-telefone') formaDeContato = `pelo seu telefone`;
    else if (contatoPreferido === 'radio-whatsapp') formaDeContato = `pelo seu WhatsApp`;

    if (motivo === "0") mensagemFinal += ` Você não especificou o motivo da sua mensagem. Fale com a gente ${formaDeContato}.`;
    else if (motivo === "1") mensagemFinal += ` Qual a sua dúvida? Fale para a gente ${formaDeContato}.`;
    else if (motivo === "2") mensagemFinal += ` Qual a sua sugestão? Conta para a gente ${formaDeContato}.`;
    else if (motivo === "3") mensagemFinal += ` Obrigada pelo elogio! Ficamos felizes que você gostou dos nossos serviços.`;
    else mensagemFinal += ` Poxa! Sinto muito que você não gostou dos nossos serviços... Sua opinião é muito importante para nós.`;

    if (receberEmail && contatoPreferido !== 'radio-mail' && motivo !== "4") {
      mensagemFinal += ` Você receberá nossas novidades no seu e-mail ${email}.`;
    }

    window.alert(mensagemFinal);
    form.reset();
  };

  return (
    <section className="contatoPage">

      <h1 className="tituloPagina">Fala com a gente!</h1>

      <div className="boxGeral">

        {/* --- FORMULÁRIO --- */}
        <div className="formBox">

          <form onSubmit={handleSubmit} id="frmContato" className="formContato">

            <label htmlFor="nomesobrenome">Nome e sobrenome</label>
            <input type="text" id="nomesobrenome" className="input-padrao" required />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" className="input-padrao" placeholder="seuemail@dominio.com" />

            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" className="input-padrao" placeholder="(XX) XXXXX-XXXX" />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea cols="70" rows="6" id="mensagem" className="input-padrao" required></textarea>

            <label>Como prefere o nosso contato?</label>
            <div className="radioRow">
              <label><input className="radio" type="radio" value="radio-mail" name="Contato" /> E-mail</label>
              <label><input className="radio" type="radio" value="radio-telefone" name="Contato" /> Telefone</label>
              <label><input className="radio" type="radio" value="radio-whatsapp" name="Contato" /> Whatsapp</label>
            </div>

            <label htmlFor="motivoContato">Qual o motivo do seu contato?</label>
            <select className="select" id="motivoContato">
              <option value="0">Selecione</option>
              <option value="1">Dúvida</option>
              <option value="2">Sugestão</option>
              <option value="3">Elogio</option>
              <option value="4">Reclamação</option>
            </select>

            <label className="receberEmailBox">
              <input type="checkbox" id="receberEmail" className="chk" /> Gostaria de receber nossas novidades por e-mail?
            </label>

            <button type="submit" className="btnContato">Enviar</button>
          </form>
        </div>

        {/* --- MAPA --- */}
        <div className="mapBox">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14624.105809673623!2d-46.57717194285341!3d-23.603384246626245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cfc1a26a0e7%3A0xbdafca252ee4650d!2sR.%20S%C3%A3o%20Proc%C3%B3pio%2C%20166%20-%20Vila%20Alpina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003212-020!5e0!3m2!1spt-BR!2sbr!4v1740341932762!5m2!1spt-BR!2sbr"
            loading="lazy"
            allowFullScreen
          />
        </div>

      </div>

      {/* --- ICONES INFERIORES --- */}
      <div className="iconRow">

        <div className="iconBox">
          <FaMapMarkerAlt className="icon" />
          <p>Rua São Procópio, 166<br />São Paulo - SP</p>
        </div>

        <div className="iconBox">
          <FaPhoneAlt className="icon" />
          <p>(11) 90000-0000</p>
        </div>

        <div className="iconBox">
          <FaEnvelope className="icon" />
          <p>contato@exemplo.com</p>
        </div>

        <div className="iconBox">
          <FaGlobe className="icon" />
          <p>www.seusite.com</p>
        </div>

      </div>

    </section>
  );
}

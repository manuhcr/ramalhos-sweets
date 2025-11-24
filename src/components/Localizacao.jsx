import Contato from "./Contato";

export default function Localizacao() {
    return (
        <section className="location">
            <h1 className="localtitle">Onde estamos?</h1>
            <div className="localizacao">
                <div className="form-panel">
                    <Contato />
                </div>
                <iframe
                    className="mapa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14624.105809673623!2d-46.57717194285341!3d-23.603384246626245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cfc1a26a0e7%3A0xbdafca252ee4650d!2sR.%20S%C3%A3o%20Proc%C3%B3pio%2C%20166%20-%20Vila%20Alpina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003212-020!5e0!3m2!1spt-BR!2sbr!4v1740341932762!5m2!1spt-BR!2sbr"
                    width="800"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <p className="endereco"><strong>Endereço:</strong> Rua dos Doces, 125.
                    <strong> Bairro</strong> Confeitaria,
                    Cidade Açucarada - SP.
                    <strong> CEP:</strong> 12345-678.
                </p>
            </div>

        </section>
    );
}
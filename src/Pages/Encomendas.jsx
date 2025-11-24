import { useState, useMemo } from "react";
import axios from "axios"; 
import "../encomendas.css";
import { Donut } from "lucide-react";


export default function Encomendas() {
  const [filtro, setFiltro] = useState("");
  

  const [lista, setLista] = useState([
    { nome: "Carolina", doce: "Bolo de Morango com Chantilly", qtd: 2, unitario: 54.9 },
    { nome: "Ana Paula", doce: "Bolo de Chocolate com cobertura Cremosa", qtd: 2, unitario: 49.9 },
    { nome: "Manoela", doce: "Brigadeiro Gourmet branco", qtd: 1, unitario: 3.5 },
    { nome: "Livia", doce: "Cookie recheado com chocolate", qtd: 3, unitario: 6.5 },
  ]);
const [loading, setLoading] = useState(false);

  // ----------------------------
  // Helpers
  // ----------------------------
  const formataValor = (valor) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const calculaTotal = (qtd, unitario) => formataValor(qtd * unitario);

  // ----------------------------
  // Filtro por nome
  // ----------------------------
  const listaFiltrada = useMemo(() => {
    if (!filtro.trim()) return lista;
    const regex = new RegExp(filtro, "i");
    return lista.filter((item) => regex.test(item.nome));
  }, [filtro, lista]);

  // ----------------------------
  // Formulário
  // ----------------------------
  const [form, setForm] = useState({
    nome: "",
    qtd: "",
    doce: "",
    unit: "",
  });

  const atualizar = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();

    const qtd = Number(form.qtd);
    const unit = Number(form.unit);

    if (qtd < 1 || isNaN(qtd)) {
      alert("Quantidade inválida!");
      return;
    }

    if (unit <= 0 || isNaN(unit)) {
      alert("Valor unitário inválido!");
      return;
    }

    const novo = {
      nome: form.nome,
      doce: form.doce,
      qtd,
      unitario: unit,
    };

    setLista([...lista, novo]);
    setForm({ nome: "", qtd: "", doce: "", unit: "" });
  };

  // ----------------------------
  // Função Axios para buscar encomendas
  // ----------------------------
const buscarEncomendas = async () => {
  setLoading(true);

  try {
    const response = await axios.get("http://localhost:5000/encomendas_web");
    const encomendasAPI = response.data;

    const nomesExistentes = lista.map((e) => e.nome);
    const novasEncomendas = encomendasAPI.filter(
      (e) => !nomesExistentes.includes(e.nome)
    );

    setLista([...lista, ...novasEncomendas]);
  } catch (error) {
    console.error("Erro ao buscar encomendas:", error);
  } finally {
    // 🔥 força a animação a durar pelo menos 1000ms
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
  }
};


  return (
    <>
     <section className="container">
        
    
      <div className="delivery">
         <h1 className="encomendas-titulo">
        Encomendas
      </h1>
         {loading && (
           <div className="loader-overlay">
           <Donut className="donut-icon" />
           <p className="loader-text">Carregando...</p>
           </div>
        )}

          <input
            type="text"
            id="filtrar-tabela"
            className="filtrar-tabela"
            placeholder="Digite o cliente que deseja buscar"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        

        {/* tabela */}
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Doce</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody className="tabela-clientes">
            {listaFiltrada.map((item, index) => {
              const invalidaQtd = item.qtd < 1 || isNaN(item.qtd);
              const invalidaUnit = item.unitario <= 0 || isNaN(item.unitario);

              return (
                <tr key={index} className="encomenda-cliente">
                  <td className="nome">{item.nome}</td>
                  <td className="doce">{item.doce}</td>

                  <td className={`qtd ${invalidaQtd ? "info-invalida" : ""}`}>
                    {invalidaQtd ? "Quantidade inválida!" : item.qtd}
                  </td>

                  <td className={`unitario ${invalidaUnit ? "texto-erro" : ""}`}>
                    {invalidaUnit ? "Valor inválido!" : formataValor(item.unitario)}
                  </td>

                  <td className="total">
                    {!invalidaQtd && !invalidaUnit
                      ? calculaTotal(item.qtd, item.unitario)
                      : ""}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button onClick={buscarEncomendas} className="botao">
          Buscar encomendas
        </button>
      </div>
  <div className="adiciona">
          <div className="text-align center">
          <legend>Adicionar encomenda</legend>
        </div>

        <form className="formDelivery" id="frmContatos" onSubmit={enviar}>
          <div className="input">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              className="input-padrao"
              required
              value={form.nome}
              onChange={atualizar}
            />
          </div>

          <div className="input">
            <label htmlFor="qtd">Quantidade</label>
            <input
              type="text"
              id="qtd"
              className="input-padrao"
              required
              value={form.qtd}
              onChange={atualizar}
            />
          </div>

          <p className="mensagem"></p>

          <div className="input">
            <label htmlFor="doce">Escolha um doce:</label>
            <select
              id="doce"
              name="doce"
              value={form.doce}
              onChange={atualizar}
            >
              <option value="">Selecione um doce</option>

              <optgroup label="Bolos e Tortas">
                <option value="Bolo de chocolate com cobertura cremosa">
                  Bolo de chocolate com cobertura cremosa – R$ 49,90
                </option>
                <option value="Bolo de morango com chantilly">
                  Bolo de morango com chantilly – R$ 54,90
                </option>
                <option value="Bolo de cenoura com calda de chocolate">
                  Bolo de cenoura com calda de chocolate – R$ 44,90
                </option>
                <option value="Bolo Red Velvet com cream cheese">
                  Bolo Red Velvet com cream cheese – R$ 64,90
                </option>
              </optgroup>

              <optgroup label="Doces Brasileiros">
                <option value="Brigadeiro gourmet">Brigadeiro gourmet – R$ 3,50</option>
                <option value="Beijinho de coco">Beijinho de coco – R$ 3,00</option>
                <option value="Cajuzinho">Cajuzinho – R$ 3,00</option>
              </optgroup>
            </select>
          </div>

          <div className="input">
            <label htmlFor="unit">Valor Unitário</label>
            <input
              type="text"
              id="unit"
              className="input-padrao"
              required
              value={form.unit}
              onChange={atualizar}
            />
          </div>

          <div>
            <button id="add" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
      </section>

    </>
  );
}

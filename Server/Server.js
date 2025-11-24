// Server.js
import http from "http";

const encomendas = [
  { nome: "Julia", doce: "Bolo de Cenoura", qtd: 1, unitario: 44.9 },
  { nome: "Marcelo", doce: "Brigadeiro Gourmet", qtd: 5, unitario: 3.5 },
  { nome: "Fernanda", doce: "Cookie de Chocolate", qtd: 2, unitario: 6.5 },
  { nome: "Rafael", doce: "Bolo Red Velvet", qtd: 1, unitario: 64.9 },
];

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/encomendas_web") {
   res.writeHead(200, {                     // Define o cabeçalho da resposta HTTP e o status
  "Content-Type": "application/json",    // Diz pro navegador que o conteúdo enviado é JSON
  "Access-Control-Allow-Origin": "*",    // Permite que qualquer site (ex: React no localhost:3000) faça requisições
});

    res.end(JSON.stringify(encomendas));
  } else {
    res.writeHead(404);
    res.end("Página não encontrada");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

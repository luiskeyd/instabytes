import express from "express";
import routes from "./src/routes/postRoutes.js";

// const posts = [
//   // Array de objetos que representam os posts, inicialmente preenchido com dados de exemplo.
//   { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150"},
//   { id: 2, descricao: "Uma paisagem incrível!", imagem: "https://placecats.com/millie/300/150"},
//   { id: 3, descricao: "Meu novo pet!", imagem: "https://placecats.com/300/150"}
// ];

const app = express();
app.use(express.static("uploads"))
// Cria uma instância do Express, que será o ponto de partida da aplicação.
routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
  // Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto para receber requisições.
});
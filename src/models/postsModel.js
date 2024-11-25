import 'dotenv/config';
import { ObjectId } from "mongodb"
import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)
// Estabelece a conexão com o banco de dados usando a string de conexão obtida da variável de ambiente `STRING_CONEXAO`. O resultado da conexão é armazenado na variável `conexao`.

export async function getTodososPosts() {
  // Função assíncrona para obter todos os posts do banco de dados.
  const db = conexao.db("imersao-instabytes")
  // Obtém o banco de dados com o nome "imersao-instabytes" a partir da conexão estabelecida.
  const colecao = db.collection("posts")
  // Obtém a coleção "posts" dentro do banco de dados.
  return colecao.find().toArray()
  // Executa uma consulta para encontrar todos os documentos na coleção "posts" e retorna os resultados como um array.
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabytes")
  const colecao = db.collection("posts")
  return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}
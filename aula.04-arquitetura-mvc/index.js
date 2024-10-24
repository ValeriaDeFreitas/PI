// Importando o Express na aplicação
//const express = require("express");//CommonJS Modules
import express from "express"; //ES¨modules;

// Criando uma instância do Express
const app = express();
//Importando os Controllers(onde estão as rotas)
import ClienteController from "./controllers/ClienteController.js"

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Definir a pasta dos arquivos estáticos (public)
app.use(express.static('public'))

//Definindo o uso das rotas que estão no Controllers
app.use("/", ClienteController) 



// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  // Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
});







// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

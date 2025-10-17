//-->questo file conterrà le rotte necessarie per l'entità post

const express = require("express");
const router = express.Router();

//rotte per le operazioni CRUD (Index, Show, Create, Update e Delete):
// • INDEX (nome rotta) -> GET (metodo) /posts (endpoint)
router.get("/", (req, res) => {
  res.send("Lista dei post");
}); //GET http://localhost:3000/posts → “Lista dei post”

// • SHOW   -> GET /posts/:id
router.get("/:id", (req, res) => {
  res.send("Dettaglio del post" + req.params.id);
}); //GET http://localhost:3000/posts/1 → “Dettaglio del post 1”

// • STORE  -> POST /posts
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
}); //POST http://localhost:3000/posts → “Creazione nuovo post”

// • UPDATE -> PUT /posts/:id
router.put("/:id", (req, res) => {
  res.send("Modifica integrale del post" + req.params.id);
}); //PUT http://localhost:3000/posts/1 → “Modifica integrale del post 1”

// • MODIFY -> PATCH /posts/:id
router.patch("/:id", (req, res) => {
  res.send("Modifica parziale del post" + req.params.id);
}); //PATCH http://localhost:3000/posts/1 → “Modifica parziale del post 1”

// • DESTROY-> DELETE /posts/:id
router.delete("/:id", (req, res) => {
  res.send("Cancellazione del post" + req.params.id);
}); //DELETE http://localhost:3000/posts/1 → “Cancellazione del post 1”

module.exports = router;

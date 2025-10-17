//import dei dati nel controller
const posts = require("../data/posts");

// INDEX -> GET /posts
function index(req, res) {
  return res.json(posts);
}

// SHOW -> GET /posts/:id
function show(req, res) {
  const id = parseInt(req.params.id); // prendo l'id dall’URL
  let postTrovato = null; // inizializzo variabile vuota

  for (let i = 0; i < posts.length; i++) {
    // ciclo tutti i post
    if (posts[i].id === id) {
      // se trovo quello giusto
      postTrovato = posts[i];
    }
  }

  if (!postTrovato) {
    // se non lo trovo
    return res.status(404).json({ message: "Post non trovato" });
  }

  return res.json(postTrovato); // se lo trovo, lo invio in JSON
}

// STORE -> POST /posts
function store(req, res) {
  return res.send("Creazione nuovo post");
}

// UPDATE -> PUT /posts/:id
function update(req, res) {
  return res.send("Modifica integrale del post" + req.params.id);
}

// MODIFY -> PATCH /posts/:id
function modify(req, res) {
  return res.send("Modifica parziale del post" + req.params.id);
}

// DESTROY -> DELETE /posts/:id
function destroy(req, res) {
  const id = parseInt(req.params.id); // prendo l'id dall'URL

  // cerco in che posizione si trova il post
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    // se non lo trova
    return res.status(404).json({ message: "Post non trovato" });
  }

  // rimuovo il post dall'array
  posts.splice(index, 1);

  // stampo in console la lista aggiornata
  console.log("Lista aggiornata:", posts);

  // invio risposta vuota con stato 204
  return res.status(204).send();
}

module.exports = { index, show, store, update, modify, destroy };

//import dei dati nel controller
const posts = require("../data/posts");

/******************************************************************************/

// INDEX -> GET /posts -> restituisce la lista aggiornata di posts.js
function index(req, res) {
  res.json(posts);
}

/******************************************************************************/
// SHOW -> GET /posts/:id -> dà un singolo post
function show(req, res) {
  // recuperiamo l'id dall' URL e convertiamolo in un numero
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  //controllo
  if (!post) {
    //status 404
    res.status(404);

    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  res.json(post);
}

/******************************************************************************/

// STORE -> POST /posts -> crea un nuovo post
function store(req, res) {
  console.log("Dati ricevuti:", req.body);
  //genero  un nuovo id aggiungendo 1 all'ultimo id esistente
  const newId = posts[posts.length - 1].id + 1;

  //creo un nuovo post
  const newPost = {
    id: newId,
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    tags: req.body.tags,
  };

  //aggiungo il nuovo posto nel blog
  posts.push(newPost);

  // controllo
  console.log(posts);

  //restituisco lo status corretto e il nuovo post
  res.status(201);
  res.json(newPost);
}

/******************************************************************************/

// UPDATE -> PUT /posts/:id -> aggionra un post
function update(req, res) {
  //recupero id
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  //controllo
  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  //aggiorno il post
  post.title = req.body.title;
  post.image = req.body.image;
  post.content = req.body.content;
  post.tags = req.body.tags;

  //controllo
  console.log(posts);

  //restituisco il post aggiornato
  res.json(post);
}

/******************************************************************************/

// MODIFY -> PATCH /posts/:id -> -> aggionra un post
function modify(req, res) {
  res.send("Modifica parziale post" + req.params.id);
}

/******************************************************************************/

// DESTROY -> DELETE /posts/:id -> elimina un post
function destroy(req, res) {
  // recupero id
  const id = parseInt(req.params.id);

  // cerco il post tramite id
  const post = posts.find((post) => post.id === id);

  //controllo
  if (!post) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  // rimuovo il post dal blog
  posts.splice(posts.indexOf(post), 1);

  //controllo con console log in terminale
  console.log(posts);

  // invio la risposta con lo stato che conferma l'eliminazione riuscita
  res.sendStatus(204);
}

/******************************************************************************/

module.exports = { index, show, store, update, modify, destroy };

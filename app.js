//--> in questo file viene inizializzato il server Express e vengono registrati i router

// importo il framework Express
const express = require("express");

// creo un'istanza di Express
const app = express();

//____________________________________________________
//LISTA POST DEL BLOG
const posts = [
  {
    title: "Ciambellone della domenica",
    content: "Soffice, profumato e perfetto per la colazione con il latte.",
    image: "/img/ciambellone.jpeg",
    tags: ["colazione", "dolci", "tradizione"],
  },
  {
    title: "Cracker alla barbabietola",
    content: "Snack croccante e coloratissimo, ottimo con hummus o formaggi.",
    image: "/img/cracker_barbabietola.jpeg",
    tags: ["snack", "salati", "barbabietola"],
  },
  {
    title: "Pane fritto dolce",
    content: "Ricetta povera ma irresistibile, zucchero e cannella a pioggia.",
    image: "/img/pane_fritto_dolce.jpeg",
    tags: ["dolci", "frittura", "veloci"],
  },
  {
    title: "Pasta alla barbabietola",
    content: "Cremosa e vivace, con ricotta e noci per un tocco crunchy.",
    image: "/img/pasta_barbabietola.jpeg",
    tags: ["primi", "barbabietola", "cremoso"],
  },
  {
    title: "Torta paesana",
    content: "Dolce lombardo al pane raffermo, cacao e pinoli. Comfort food.",
    image: "/img/torta_paesana.jpeg",
    tags: ["dolci", "tradizione", "riciclo"],
  },
];
//____________________________________________________

// imposto una porta di riferimento
const port = 3000;

// uso il middleware static per servire i file statici
app.use(express.static("public"));

// imposto la rotta di index
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

//rotta /bacheca
app.get("/bacheca", (req, res) => {
  res.json(posts);
});

// IMPORTO E REGISTRO IL ROUTER DEI POST
const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

// metto in ascolto il server sulla porta definita
app.listen(port, () => {
  console.log(`✅ Server avviato sulla porta ${port}`);
});

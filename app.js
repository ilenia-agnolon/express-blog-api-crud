// importo Express
const express = require("express");
const app = express();
const port = 3000;

// middleware statici
app.use(express.static("public"));

// body-parser per JSON
app.use(express.json());

// importo il router dei post
const router = require("./routers/postsRouter");

// rotta di index
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// registro il router con prefisso /posts
app.use("/posts", router);

// avvio server
app.listen(port, () => {
  console.log(`✅ Server avviato sulla porta ${port}`);
});

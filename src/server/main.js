import express from "express";
import ViteExpress from "vite-express";

const app = express();
const PORT = 7669

app.get("/hello", (req, res) => {
  res.send("Hello Vite!");
});

ViteExpress.listen(app, PORT||3000, () =>
  console.log(`Server is listening on port ${PORT}`),
);

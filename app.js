import express from "express";
import router from "./routers/books.js";
import errorsHandler from "./middlewares/errorsHandler.js";
import notFound from "./middlewares/notFound.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/books", router);

app.use(notFound);
app.use(errorsHandler);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

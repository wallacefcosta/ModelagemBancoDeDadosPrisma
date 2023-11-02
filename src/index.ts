import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.listen(process.env.PORTA, () =>
  console.log(`servidor rodando na porta ${process.env.PORTA}`)
);

app.get("/", (_, res) => res.status(200).send("api bombou"));

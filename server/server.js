const express = require("express");
const cors    = require("cors");
const api     = require("./rotes/index");

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
app.use("/api", api);

app.listen(port);
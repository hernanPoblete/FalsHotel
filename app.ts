import express, { urlencoded } from 'express';
import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({
    path: path.join(process.cwd(), "/.env")
});

const app = express();
const port = process.env.PORT;

app.set('view-engine', require('ejs'));
app.use(urlencoded({extended:false}));
app.use(express.static("public"));

app.use("/", require("./router/index.js"));
app.use("/agenda", require("./router/agenda.js"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
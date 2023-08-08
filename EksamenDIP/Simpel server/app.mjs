import express from "express";
import pug from "pug";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/filer"));
app.use(express.json());


const exampleData = [
    { name: "Kasper", lastName: "Bryder", age: 31},
    { name: "Ellinor", lastName: "Bryder", age: 1},
    { name: "Sandra", lastName: "Haldrup", age: 27}
];

app.get('/index', (req, res) => {
    res.render('index', { data: exampleData });
});


app.listen(8080);
console.log("Lytter på port 8080 ...");
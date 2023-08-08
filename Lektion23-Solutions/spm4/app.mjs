import express from 'express';
import session from 'express-session';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/filer"));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));

const personer = [];

app.get('/', function (request, response) {
    if (request.session.personer == null) {
        request.session.personer = [{navn:'test', adresse:'testvej'}];
    }
    let valuesForTemplate = {personer:request.session.personer};
    response.render('index',valuesForTemplate);
});
app.get('/HentSomJSON', function (request, response) {
    if (request.session.personer == null) {
        request.session.personer = [{navn:'test', adresse:'testvej'}];
    }
    response.status(200).send(request.session.personer)
});

app.post('/', function (request, response) {
    request.session.personer.push({navn:request.body.navn, adresse:request.body.adresse})
    response.sendStatus(201);
});

app.listen(8080);

console.log('Lytter på port 8080 ...');

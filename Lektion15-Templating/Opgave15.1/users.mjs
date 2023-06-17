import pug from 'pug';
import express from 'express';

let app = express();

let user = {name: "kasper", username: "kapper", email: "kapper@gmail.com"}

app.set('view engine', 'pug');
app.set('views', 'Lektion15-Templating\\Opgave15.1\\views');

console.log(pug.renderFile("Lektion15-Templating\\Opgave15.1\\views\\users.pug", user));

app.get('/', (req, res) => {res.render('users', user)});
app.listen(8181);
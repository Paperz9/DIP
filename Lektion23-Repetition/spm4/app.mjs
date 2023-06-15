import express from 'express';
const app = express();
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');


app.use(express.static(__dirname + '/filer'));
app.use(express.json());
app.use(session({ secret: 'hemmelig', saveUninitialized: true, resave: true }));

// Get the list of persons from the session and render the index.pug template
app.get('/', function (request, response) {
    const persons = request.session.persons || [];
    response.render('index', { persons: persons });
});

// Add a new person to the session and send a success response
app.post('/', function (request, response) {
    const person = request.body;
    if (!request.session.persons) {
        request.session.persons = [];
    }
    request.session.persons.push(person);
    response.sendStatus(201);
});

app.listen(8080);

console.log('Listening on port 8080...');
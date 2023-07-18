import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.use(express.static(__dirname + '/filer'));
app.use(express.json());
app.use(session({ secret: 'hemmelig', saveUninitialized: true, resave: true }));

// Dummy data til at simulere en kontaktliste
let contacts = [
    { id: 1, name: 'Kontakt 1', phone: '12345678' },
    { id: 2, name: 'Kontakt 2', phone: '87654321' }
];

app.get('/', function (request, response) {
    response.render('index', { contacts });
});

app.post('/add', function (request, response) {
    const { name, phone } = request.body;
    const newId = contacts.length + 1;
    const newContact = { id: newId, name, phone };
    contacts.push(newContact);
    response.redirect('/');
});

app.get('/update/:id', function (request, response) {
    const contactId = parseInt(request.params.id);
    const contact = contacts.find((c) => c.id === contactId);
    if (!contact) {
        response.status(404).send('Kontakt ikke fundet');
    } else {
        response.render('update', { contact });
    }
});

app.post('/update/:id', function (request, response) {
    const contactId = parseInt(request.params.id);
    const contact = contacts.find((c) => c.id === contactId);
    if (!contact) {
        response.status(404).send('Kontakt ikke fundet');
    } else {
        const { phone } = request.body;
        contact.phone = phone;
        response.redirect('/update/${contactId}');
    }
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
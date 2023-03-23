// Opgave 14.1 - filserver

import express from 'express';
import { promises as fs } from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const host = 'localhost';
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + '/filer'));

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

app.get('/', async (request, respone) => {
    let filNavne = await fs.readdir(__dirname + '/filer');
    let html = genererLinks(filNavne);

    respone.send(html);

}).listen(port);
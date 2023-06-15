let express = require('express');
let app = express();
let pug = require('pug');
let path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
let valuesForTemplate= {navn:"Ole", alder:30, venner:[{navn:"Ib", alder:12}, {navn:"hans", alder:11}]};
console.log(pug.renderFile(path.join(__dirname, '/views/PugExample.pug'),valuesForTemplate));

app.get('/', (req, response) => response.render('PugExample', valuesForTemplate))
app.listen(8000, () => console.log('Test running'));

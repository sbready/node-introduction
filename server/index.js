const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/books_controller')
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public/build'))

app.post('/api/books', controller.create);
app.get('/api/books', controller.read);
app.put('/api/books/:id', controller.update);
app.delete('/api/books/:id', controller.delete);


const port = 3000
app.listen(port, () => console.log(`Listening on port: ${port}`));



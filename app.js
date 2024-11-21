const express = require('express');
const { create } = require('express-handlebars');
const path = require('path');
const { Server } = require('socket.io');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = create({
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  defaultLayout: 'main',
  extname: '.handlebars',
});
app.engine('.handlebars', hbs.engine);
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, 'views'));

const routes = require('./routes');
app.use('/', routes);

const httpServer = app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
const io = new Server(httpServer);

let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  socket.emit('updateProducts', products);

  socket.on('createProduct', (product) => {
    products.push(product);
    fs.writeFileSync('./data/products.json', JSON.stringify(products, null, 2));
    io.emit('updateProducts', products);
  });

  socket.on('deleteProduct', (id) => {
    products = products.filter((p) => p.id !== id);
    fs.writeFileSync('./data/products.json', JSON.stringify(products, null, 2));
    io.emit('updateProducts', products);
  });
});

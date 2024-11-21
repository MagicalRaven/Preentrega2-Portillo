const socket = io();

socket.on('updateProducts', (products) => {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach((product) => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    productList.appendChild(li);
  });
});

const productForm = document.getElementById('product-form');
productForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(productForm);
  const product = {
    id: Date.now(),
    name: formData.get('name'),
    price: parseFloat(formData.get('price')),
  };
  socket.emit('createProduct', product);
  productForm.reset();
});

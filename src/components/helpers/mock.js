export const mock = new Promise((resolve, reject) => {
  const productos = require("../../data/productos.json");
  setTimeout(() => {
    resolve(productos.data);
  }, 2000);
});

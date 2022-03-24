const data = [
  {
    id: 1,
    title: "Paseo",
    description: "Paseo a los caninos",
    price: 1200,
    pictureUrl: "https://www.snau.es/blog/wp-content/uploads/2019/02/perros_paseo.jpg",
  },
  {
    id: 2,
    title: "Adiestramiento",
    description: "Aprende a entender y enseñar a tu perro",
    price: 3700,
    pictureUrl: "https://soyunperro.com/wp-content/uploads/como-adiestrar-un-perro-7-1.jpg",
  },
  {
    id: 3,
    title: "Curso",
    description: "Aprende temás específicos y avanzados sobre tu canino",
    price: 2400,
    pictureUrl:
      "https://i0.wp.com/aprendeconkala.com/wp-content/uploads/2020/09/curso-online-de-reactividad-en-perros.jpg?fit=900%2C900&ssl=1",
  },
];

export const mock = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

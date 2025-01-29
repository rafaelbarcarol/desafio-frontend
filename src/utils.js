export function getProducts() {
  return new Promise((res) => {
    res([
      {
        name: "Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado",
        image: "/static/images/produtos/produto-1.png",
        price: { amount: 179.9, isDiscount: null },
        id: 1,
        sizes: [34, 35, 36, 37, 38, 39, 40],
      },
      {
        name: "Coturno Feminino Bebecê Tratorado Detalhe Tachas",
        image: "/static/images/produtos/produto-2.png",
        price: { amount: 349.9, isDiscount: 315 },
        id: 2,
        sizes: [34, 35, 36, 37, 38, 39, 40],
      },
      {
        name: "Scarpin Bebecê Salto Alto Taça Com Fivela",
        image: "/static/images/produtos/produto-3.png",
        price: { amount: 159.9, isDiscount: null },
        id: 3,
        sizes: [34, 35, 36, 37, 38, 39, 40],
      },
    ]);
  });
}

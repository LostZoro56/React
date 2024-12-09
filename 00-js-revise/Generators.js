let Products = {
  arr: [
    {
      name: "iphone 13",
      price: 100000,
      description: "classy",
      rating: 4.8,
      getCat: () => {
        console.log(this.category);
      },
    },
    {
      name: "mackbook m3",
      price: 100000,
      description: "classy",
      rating: 4.9,
      getCat: () => {
        console.log(this.category);
      },
    },
  ],
  category: "electronics",
  getProducts: function () {
    return this.arr;
  },
};

Products.getProducts()[0].getCat();

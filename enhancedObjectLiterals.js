function createBookShop(inventory) {
    return {
        inventory,
      inventoryValue() {
          return this.inventory.reduce( (total, actual) => total + actual.price, 0);
      },
      titleForPrice(title) {
          return this.inventory.find(book => book.title === title).price;
      }
    };
  }
  
  const inventory = [
    { title: 'Harry Potter', price: 10},
    { title: 'Eloquent Javascript', price: 15}
  ];
  
  const bookShop = createBookShop(inventory)
  
  bookShop.inventoryValue()
  bookShop.titleForPrice('Harry Potter')
  
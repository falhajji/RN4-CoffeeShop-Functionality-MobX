import { decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemToCart = addItem => {
    console.log("HELLO HUSS", addItem);

    this.items.push(addItem);
  };

  removeItemFromCart = removeItem => {
    this.items = this.items.filter(cartItem => cartItem !== item);
  };

  checkoutCart = checkOut => {
    this.items = [];
  };
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();

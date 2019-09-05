import { decorate, observable, computed } from "mobx";

class CartStore {
  items = [];

  addItemToCart = newItem => {
    console.log("HELLO HUSS", newItem);
    const foundItem = this.items.find(
      item => newItem.drink === item.drink && newItem.option === item.option
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
  };

  removeItemFromCart = itemToDelete => {
    this.items = this.items.filter(cartItem => cartItem !== itemToDelete);
  };

  checkoutCart = () => {
    this.items = [];
    alert("Thank you for ordering.");
  };

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

export default new CartStore();

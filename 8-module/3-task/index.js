export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if(!product) return;
    let cartItem = this.cartItems.find(
      item => item.product.id === product.id
    );

    if (!cartItem) {
      cartItem = {
        product,
        count: 1
      };
      this.cartItems.push(cartItem);
    } else {
      cartItem.count++;
    }

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    // ваш код
  }

  isEmpty() {
    return this.cartItems.length == 0
  }

  getTotalCount() {
    return this.products.length;
  }

  getTotalPrice() {
    return this.products.reduce((totalPrice, product) => totalPrice + product.price, 0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}


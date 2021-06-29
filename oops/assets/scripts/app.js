class Product {
  constructor(name, url, price) {
    this.name = name;
    this.imageUrl = url;
    this.price = price;
  }
}

class ProductsList {
  products = [
    new Product(
      "pillow",
      "https://images-na.ssl-images-amazon.com/images/I/51XHo25ShzS._SY450_.jpg",
      100
    ),
    new Product(
      "Carpet",
      "https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SL1500_.jpg",
      1000
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }

    return prodList;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCartClickHandler() {
    console.log("Added to cart");
    console.log(this.product);

    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addToCartButton = prodEl.querySelector("button");
    addToCartButton.addEventListener(
      "click",
      this.addToCartClickHandler.bind(this)
    );

    return prodEl;
  }
}

class Cart {
  cartItem = [];

  get cartSum() {
    return this.cartItem.reduce((prev, cur) => prev + cur.price, 0);
  }

  set cartItems(value) {
    this.cartItem = value;
    this.totalOutput.innerHTML = `<h2>Total: $${this.cartSum.toFixed(2)}</h2>`;
  }

  addProduct(product) {
    const updatedItem = [...this.cartItem];
    updatedItem.push(product);
    this.cartItems = updatedItem;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new Cart();
    const cartEl = this.cart.render();

    const productList = new ProductsList();
    const productListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(productListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

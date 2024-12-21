// Product Class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem Class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart Class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = new ShoppingCartItem(product, quantity);
      this.items.push(newItem);
    }
    this.displayCart();
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
    this.displayCart();
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear existing content
    cartItemsContainer.innerHTML = "";

    // Populate cart items
    if (this.items.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      this.items.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item py-2";
        itemDiv.innerHTML = `
                    <span>${item.product.name} - $${item.product.price.toFixed(
          2
        )} x ${item.quantity}</span>
                    <span>$${item
                      .getTotalPrice()
                      .toFixed(2)} <span class="remove-btn bg-red-400 text-white px-2 rounded cursor-pointer" data-id="${
          item.product.id
        }">Remove</span></span>
                `;
        cartItemsContainer.appendChild(itemDiv);
      });
    }

    // Update total price
    cartTotalElement.textContent = this.getTotalPrice().toFixed(2);

    // Add event listeners to remove buttons
    const removeBtns = document.querySelectorAll(".remove-btn");
    removeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = parseInt(btn.getAttribute("data-id"));
        this.removeItem(productId);
      });
    });
  }
}

// Initialize products and cart
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Headphones", 150);
const product3 = new Product(3, "Mouse", 50);

const cart = new ShoppingCart();

// Simulating adding products to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

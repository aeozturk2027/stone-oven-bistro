const cart = [];

const summary = document.querySelector("#dom-summary");
const cartItems = document.querySelector("#cart-items");
const totalPrice = document.querySelector("#cart-total-price");
const clearCartButton = document.querySelector("#clear-cart");
const productButtons = document.querySelectorAll("[data-name][data-price]");

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    summary.textContent = "No product selected yet.";
    totalPrice.textContent = "$0";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(listItem);
  });

  const latestItem = cart[cart.length - 1];
  summary.textContent = `Last selected product: ${latestItem.name}`;
  totalPrice.textContent = `$${total}`;
}

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = {
      name: button.dataset.name,
      price: Number(button.dataset.price)
    };

    cart.push(item);
    renderCart();
  });
});

clearCartButton.addEventListener("click", () => {
  cart.length = 0;
  renderCart();
});

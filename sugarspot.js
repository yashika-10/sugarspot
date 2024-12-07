
let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    alert('Item added to cart!');
    cart.push(this.previousElementSibling.previousElementSibling.innerText);
    console.log(cart);
  });
});

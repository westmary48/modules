import util from '../helpers/util.js';


const cart = [];

const getCart = () => {
    return cart;
};

const setCart = (book) => {
  cart.push(book);
};

const buyEvent = (e) => {
    e.preventDefault();
    const myCart = getCart();
    // reduce takes array of something and returns a single value
    // a is 0
    //b is an object
    // every time it goes through the loop i want it to return a + price
    const total = myCart.reduce((a, b) => {return a + b.price}, 0);
    window.alert(`You owe ${total.toFixed(2)}`);
}

const cartToDom = () => {
const myCart = getCart();
let domString = '<div class="row">';
domString += '<h2>Cart:</h2>';
domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
domString += '</div><div class="row d-flex flex-wrap">';
myCart.forEach((book) => {
  domString += `<div class="card col-2">`;
  domString += `  <img src=${book.image} class="card-img-top" alt="...">`;
  domString += `  <div class="card-body">`;
  domString += `    <h5 class="card-title">${book.title}</h5>`;
  domString += `    <p class="card-text">${book.price}</p>`;
  domString += `  </div>`;
  domString += `</div>`;
});
domString += `</div>`;
util.printToDom('cart-container', domString);
document.getElementById('purchase-btn').addEventListener('click', buyEvent)
}


export default { setCart, cartToDom }
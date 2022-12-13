function createCart(settings) {
  if (!settings.hasOwnProperty("taxrepository")) {
    throw Error(
      `This function requires a 'taxrepository' to be passed into the contructor!`
    );
  }
  const { taxrepository } = settings;
  // const defaultTaxRepository = (subtotal) => {
  //   return 0;
  // };
  // const taxrepository = settings.hasOwnProperty("taxrepository")
  //   ? settings.taxrepository
  //   : defaultTaxRepository;

  let items = [];

  function addItemToCart(item) {
    items.push(item);
  }

  function removeItemFromCart(removeThisItem) {
    items = items.filter((item, index, arr) => {
      return item.sku !== removeThisItem.sku;
    });
  }

  function getSubTotal() {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((accum, item) => accum + item, 0);
  }

  function getTotal() {
    return taxrepository(getSubTotal()) + getSubTotal();
  }

  function getTaxes() {
    return taxrepository(getSubTotal());
  }

  return Object.freeze({
    addItemToCart,
    removeItemFromCart,
    getSubTotal,
    getTotal,
    getTaxes,
  });
}

function calculateMyTax(subtotal) {
  return subtotal * 0.11;
}

const myCart = createCart({
  taxrepository: (val) => val * 0.05,
});
// const myCart = createCart({ taxrepository: calculateMyTax });
myCart.addItemToCart({ sku: "DEF456", price: 2.0, quantity: 2 });
myCart.addItemToCart({ sku: "HIG789", price: 6.0, quantity: 1 });
myCart.addItemToCart({ sku: "ABC123", price: 12.0, quantity: 1 });

console.log(`subtotal:  ${myCart.getSubTotal()}`);
console.log(`taxes:  ${myCart.getTaxes()}`);
console.log(`total:  ${myCart.getTotal()}`);

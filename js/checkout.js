class Bike {
  constructor(item) {
    this.name = item.name;
    this.size = {
      label: 'small',
      price: parseInt(item.size.price),
    };
    this.num = 1;
    this.selected = false;
  }

  set numItems(x) {
    this.num = parseInt(x);
  }

  get price() {
    return this.num * this.size.price;
  }
}

const bike1 = new Bike({
  name: 'bike1',
  size: {
    price: 100,
  },
});

const bike2 = new Bike({
  name: 'bike2',
  size: {
    price: 75,
  },
});

const bike3 = new Bike({
  name: 'bike3',
  size: {
    price: 150,
  },
});

const bike4 = new Bike({
  name: 'bike4',
  size: {
    price: 200,
  },
});

const prices = document.querySelectorAll('input[type="number"]');

function showItemValue(e, value) {
  e.value = value;
}

function changeSizeItem(item, size, index) {
  item.size.label = size[0];
  item.size.price = parseInt(size[1]);

  showItemValue(prices[index], item.price);
}

function changeNumItem(item, value, index) {
  item.numItems = value;

  showItemValue(prices[index], item.price);
}

function changeSize(item) {
  const size = item.value.split('-');

  if (item.name === 'sizeBike1') changeSizeItem(bike1, size, 0);
  if (item.name === 'sizeBike2') changeSizeItem(bike2, size, 1);
  if (item.name === 'sizeBike3') changeSizeItem(bike3, size, 2);
  if (item.name === 'sizeBike4') changeSizeItem(bike4, size, 3);
}

function changeNumItems(item) {
  if (item.name === 'numBike1') changeNumItem(bike1, item.value, 0);
  if (item.name === 'numBike2') changeNumItem(bike2, item.value, 1);
  if (item.name === 'numBike3') changeNumItem(bike3, item.value, 2);
  if (item.name === 'numBike4') changeNumItem(bike4, item.value, 3);
}

function changeSelected(item) {
  if (item.name === 'bike1') bike1.selected = item.checked;
  if (item.name === 'bike2') bike2.selected = item.checked;
  if (item.name === 'bike3') bike3.selected = item.checked;
  if (item.name === 'bike4') bike4.selected = item.checked;
}

function calculateTotal() {
  const items = [bike1, bike2, bike3, bike4];
  const selectedItems = items.filter((item) => item.selected);

  let total = selectedItems.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  if (total < 200) total += total * 0.15;
  else total -= total * 0.15;

  document.getElementById('checkout-total').innerText = total;

  if (total === 0) {
    alert('Please select an item');
  } else {
    const response = confirm(
      `Total charge is $${total}. Do you wish to proceed?`
    );

    if (response === true) {
      alert('Checkout successful!! Thank you for trusting us.');
    } else {
      alert('Order canceled');
    }
  }
}

showItemValue(prices[0], bike1.price);
showItemValue(prices[1], bike2.price);
showItemValue(prices[2], bike3.price);
showItemValue(prices[3], bike4.price);

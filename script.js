const itemList = document.getElementById('item-list');
const totalElement = document.getElementById('total');
const itemNameInput = document.getElementById('item-name');
const itemPriceInput = document.getElementById('item-price');

let total = 0;

function addItem() {
    const name = itemNameInput.value;
    const price = parseFloat(itemPriceInput.value);

    if (name.trim() === '' || isNaN(price)) {
        return;
    }

    const item = document.createElement('li');
    item.textContent = `${name}: R$ ${price.toFixed(2)}`;
    itemList.appendChild(item);

    total += price;
    totalElement.textContent = total.toFixed(2);

    itemNameInput.value = '';
    itemPriceInput.value = '';
}
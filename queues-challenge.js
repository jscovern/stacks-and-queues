var q = [
  { name: 'item1',  price: 0.29 },
  { name: 'item2', price: 4.00 },
  { name: 'item3', price: 10000 },
  { name: 'item4', price: 20 },
  { name: 'item5', price: 21 },
  { name: 'item6', price: 22 },
  { name: 'item7', price: 23 },
  { name: 'item8', price: 24 },
  { name: 'item9', price: 25},
  { name: 'item10', price: 26 },
  { name: 'item11', price: 27 },
  { name: 'item12', price: 28 },
  { name: 'item13', price: 29 },
  { name: 'item14', price: 30 },
  { name: 'item15', price: 31 },
  { name: 'item16', price: 32 }
];

function calculateTotal(itemArray) {
	var itemCounter = 1;
	var currItemPrice;
	var totalPrice = 0;
	var itemDiscount;
	var origArrayLength = itemArray.length;
	for (var i=0; i<origArrayLength; i++) {
		itemDiscount=0;
		currItemPrice = itemArray.shift().price;
		if(itemCounter%3===0) {
			itemDiscount+=0.1;
		}
		if(itemCounter%5===0) {
			itemDiscount+=0.2;
		}
		currItemPrice = currItemPrice * (1-itemDiscount);
		totalPrice+=currItemPrice;
		itemCounter++;
	}
	return totalPrice;
}

var total = calculateTotal(q);
console.log(total);
// total is 9004.29
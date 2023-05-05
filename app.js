const iceCream = [{
    name: 'Cookie Dough',
    quantity: 0,
    price: 1
}, {
    name: 'Vanilla',
    quantity: 0,
    price: 1
}, {
    name: 'Strawberry',
    quantity: 0,
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: 1
}, {
    name: 'Chocolate Chips',
    quantity: 0,
    price: 2
}]

const containers = [{
    name: 'Waffle Cone',
    quantity: 0,
    price: 2
}, {
    name: 'Waffle Bowl',
    quantity: 0,
    price: 4
}]

function buyIceCream(icecreamName){
    let foundIceCream = iceCream.find(i => iceCream.name == 'icecreamName')
    foundIceCream.quantity++
    console.log(foundIceCream.quantity);
}
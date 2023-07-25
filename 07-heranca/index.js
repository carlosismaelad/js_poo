const Appartment = require("./Appartment");
const House = require("./House");
const Property = require("./Property");

const land = new Property(200, 50000)

const someHouse = new House(160, 170000) // o VsCode trouxe o construtor da class Property apesar de não termos criado ele na class House

console.log(land)

console.log(someHouse)

console.log(someHouse, someHouse.pricePerSquareMeters())
// House { area: 160, price: 170000 } 1062.5

console.log(someHouse instanceof Property)
// true = someHouse ś uma instância de Property


const apt = new Appartment("201", 100, 160000)
console.log(apt)
console.log(apt.getFloor())
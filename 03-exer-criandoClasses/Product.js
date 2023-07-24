class Product{

    constructor(name, description, price){
        this.name = name,
        this.description = description,
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const watch = new Product('Relógio Cassio', {"Material": "Borracha", "Tipo": "Digital", "Resistência": "100atm"}, 300.00)

console.log(watch)

watch.addToStock(15)
const priceWithDiscount = watch.calculateDiscount(10)

console.log(watch)
console.log(`Preço com desconto: ${priceWithDiscount}`)

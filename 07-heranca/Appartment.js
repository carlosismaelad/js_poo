const Property = require("./Property");

class Appartment extends Property{
    
    constructor(number, area, price){
        super(area, price) // a forma correta de setar as propriedades que já existem na superclass
        this.number = number // propriedade EXCLUSIVA DESTA CLASSE
    }

    getFloor(){
        return this.number.slice(0, -2)
    }
}

module.exports = Appartment
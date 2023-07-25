class Property{

    constructor(area, price){
        this.area = area
        this.price = price
    }

    pricePerSquareMeters(){
        return this.price / this.area
    }
}

module.exports = Property
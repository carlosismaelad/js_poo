const Product = require("./Product");

class Book extends Product{

    constructor(title, synopse, genre, pages, author, description, price, inStock = 0){
        super(`Livro: ${title}`, description, price, inStock)
        this.title = title
        this.synopse = synopse
        this.genre = genre
        this.pages = pages
        this.author = author

    }
}

module.exports = Book
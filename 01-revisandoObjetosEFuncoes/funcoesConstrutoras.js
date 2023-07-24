// Funcoes construtoras são nomeadas usando Pascal-Case CreatesBook

function Book(title, pages, publication, tags, author, inStock){ 
    this.title = title,
    this.pages = pages,
    this.publication = publication,
    this.author = author,
    this.tags = tags
    this.published = false
    this.inStock = 0,
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    },
    this.save = function(){
        // 'Salvo no estoque'
    }
}

const author = {name: 'Andew hunt e David Thomas'}
const tags = ["Ciência", " Educação", " Programação", " Desenvolvimento"]



const cleanCode = new Book('Clean code', 425, 2009, tags, author)
const theLordOfRings = new Book('O senhor dos aneis: a sociedade do anel', 450, 2000,'Fantasy and Adventure', 'Tolkien')


console.log(cleanCode)
console.log(theLordOfRings)




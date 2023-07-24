//funcoes construtoras são nomeadas usando Pascal-Case CreatesBook
// O que passaríamos como parâmetros podemos passar diretamente na função
// usando a palavra reservada this
function CreatesBook(title, pages, publication, tags, author, inStock){ 
    this.title = title,
    this.pages = pages,
    this.publication = publication,
    this.author = author,
    this.tags = tags
    this.inStock = 0,
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    },
    this.save = function(){
        return 'Salvo no estoque'
    }
}

const author = {name: 'Andew hunt e David Thomas'}
const tags = ["Ciência", " Educação", " Programação", " Desenvolvimento"]



const cleanCode = new CreatesBook('Clean code', 425, 2009, tags, author)


console.log(cleanCode)




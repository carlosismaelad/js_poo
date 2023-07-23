//funcoes construtoras são nomeadas usando Pascal-Case CreatesBook
// O que passaríamos como parâmetros podemos passar diretamente na função
// usando a palavra reservada this
function CreatesBook(title, pages, tags, author){ 
    this.title,
    this.pages,
    this.publication,
    this.author,
    this.tags
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

const cleanCode = new CreatesBook('Clean code', 425, tags, author)

console.log(cleanCode)




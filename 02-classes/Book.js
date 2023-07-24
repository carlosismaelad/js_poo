class Book{

    constructor(title){
        this.title = title
        this.published = false
    }

    
    publish(){
        this.published = true
    }





}

const eragon = new Book('Eragon')

eragon.publish()

const eldest = new Book('Eldest')

console.log(eragon)
console.log(eldest)
// Book { title: 'Eragon', published: true }
// Book { title: 'Eldest', published: false }


console.log(eragon instanceof Book)
// retorna "true" ou "false" informando se eragon é ou não uma instância da classe Book

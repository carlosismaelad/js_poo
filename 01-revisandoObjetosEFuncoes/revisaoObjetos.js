// Objetos são estruturas no estilo de coleção onde podemos
// armazenar dados no formato chave-valor
// Nos objetos, conseguimos atribuir valores 
//  de diversos formatos: int, float, strings, bool, etc.

const book = {
    title: 'The Pragmatic Programer',
    pages: 352,
    publication: 1999,
    author: {
        writer1:'Andrew Hunt',
        writer2:'David Thomas'},
    inStock: 10,
    tags: ["Ciência", " Educação", " Programação", " Desenvolvimento"],
    
    addOnStock: function(quantity){ // conseguimos associar métodos aos objetos
        this.inStock += quantity
        return quantity
    }
}


if (book.inStock > 0){
    console.log(`
        O livro ${book.title} foi lançado no ano de ${book.publication}
        Categoria: ${book.tags}
        Autores: ${book.author.writer1} e ${book.author.writer2}
        ${book.inStock} unidades no estoque.`
    )
    
} else{
    console.log(`Produto ${book.title} em falta`)
}

// Acessando tudo
console.log(book)


book.addOnStock(2)
console.log(`Quantidade atualizada: ${book.inStock}`)


// Adicionando atributos ao objetos de forma dinâmica
book.save = function(){
    // salva no banco de dados
}

console.log(book)
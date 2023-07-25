const Author = require("./Author");


const john = new Author("John Doe")

const post = john.writePost("Título do post", "Lorem ipsum dolor sic...")

post.addComment("Carlos", "Muito interessante!")
post.addComment("Ana", "Discordo de vc por tal e tal motivo")

console.log(john)
console.log(post)
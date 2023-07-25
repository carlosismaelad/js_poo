const Comment = require("./Comment")

class Post{

    constructor(title, body, author){
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }

    addComment(userName, content){
        this.comments.push(new Comment(userName, content))
    }


}

module.exports = Post
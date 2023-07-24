class User{

    constructor(fullName,email, password){
        this.fullName = fullName,
        this.email = email,
        this.password = password
    }

    login(email, password){
        if(this.email == email && this.password == password){
            console.log('Login realizado com sucesso!')
        } else {
            console.log('e-mail ou senha incorretos!')
        }

    }
}

const john = new User('John Doe', 'john@mail.com', 123456)

john.login('john@mail.com', 123456)


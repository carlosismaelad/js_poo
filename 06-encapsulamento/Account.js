class Account{
    #password
    #balance

    constructor(user){
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password){
        
        if (this.#authenticate(email, password)){
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password){
        return this.email == email && this.#password == password
    }
}

const user = {
    email: "usuario@mail.com",
    password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance("usuario@mail.com", "123456"))
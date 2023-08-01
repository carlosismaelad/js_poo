class Wallet{
    #amount
    #username

    constructor(){
        this.#amount = 100.99 * 100 
        // para não salvar o valor com casas decimais. Suponhamso que a aplicação exige essa regra.
    }

    get amount(){
        return this.#amount / 100
        // O método retorna o valor que o usuário vê na conta. Ele não precisa saber da regra de negócio
    }

    set username(newUserName){
        if (typeof newUserName === 'string'){
            this.#username = newUserName
        } else {
            console.log('username must be of type string')
        }
    }

    get username(){
        return this.#username
    }
}

const myWallet = new Wallet()


myWallet.username = "John Doe"
console.log(myWallet.username)
console.log(myWallet.amount)
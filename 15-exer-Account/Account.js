class Account {
    number
    name
    #amount

    constructor(number, name) {
        this.number = number
        this.name = name
        this.#amount = 0.0
    }

    getNumber() {
        return this.number
    }

    setNumber(number) {
        this.number = number
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getAmount() {
        return this.#amount
    }

    initialDeposit(value) {
        this.#amount += value
    }

    withdraw(value) {
        this.#amount -= value + 5.0
    }

    showDataAccount() {
        return `Conta: ${this.number}, Titular: ${
            this.name
        }, Saldo: ${this.getAmount().toFixed(2)}.`
    }
}

export default Account

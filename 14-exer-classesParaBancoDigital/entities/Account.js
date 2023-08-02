class Account{
    #balance
    // #deposits
    // #loans
    // #transfers

    constructor(user){
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []

    }

    get balance(){
        return this.#balance
    }

    addDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(loan){
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(tranfer){
        if (transfer.toUser.email === this.owner.email ){
            this.#balance += tranfer.value
            this.transfers.push(tranfer) 
        } else if (tranfer.fromUser.email === this.owner.email){
            this.#balance -= tranfer.value
            this.transfers.push(tranfer) 
        }
    }
}

module.exports = Account
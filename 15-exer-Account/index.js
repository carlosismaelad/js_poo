import Account from './Account.js'

const number = parseInt(prompt('Entre com o número da conta: '))
const name = prompt('Informe o nome do titular da conta: ')
const res = prompt('Haverá depósito inicial? (s/n)')

let acc

if (res === 's' || res === 'S') {
    const value = parseFloat(prompt('Insira o valor: '))
    acc = new Account(number, name)
    acc.initialDeposit(value)
} else {
    acc = new Account(number, name)
}

alert(`Dados da conta: \n\n${acc.showDataAccount()}`)

const deposit = parseFloat(prompt('Insira o valor para um novo deposito: '))
acc.initialDeposit(deposit)
alert(`Dados da conta atualizados: \n\n${acc.showDataAccount()}`)

const witdraw = parseFloat(prompt('Insira o valor que deseja sacar'))
acc.withdraw(witdraw)
alert(
    `Dados da conta atualizados: \n\n${acc.showDataAccount()} \nTaxa de saque: $5.00`
)

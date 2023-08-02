const App = require("./App");

App.createUser("johndoe@email.com", "John Doe")
App.createUser("mariagreen@email.com", "Maria Green")
App.createUser("alexmorales@email.com", "Alex Morales")


App.deposit("johndoe@email.com", 200)

App.transfer("johndoe@email.com", "mariagreen@email.com", 50)

App.changeLoanFee(10)
App.takeLoan("alexmorales@email.com", 2000, 12)


console.log(App.findUser("johndoe@email.com"))
console.log(App.findUser("johndoe@email.com").account)
console.log(App.findUser("mariagreen@email.com"))
console.log(App.findUser("mariagreen@email.com").account)
console.log(App.findUser("alexmorales@email.com"))
console.log(App.findUser("alexmorales@email.com").account)
console.log(App.findUser("alexmorales@email.com").account.loans[0].installments)
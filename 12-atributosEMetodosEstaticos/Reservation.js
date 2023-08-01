class Reservation{

    constructor(guests, room, days){
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150.00

    static showBaseFee(){
        console.log(`Base fee is ${Reservation.baseFee}`)
    }

    static get premiumFee(){
        return Reservation.baseFee * 1.5
        
    }
}


Reservation.showBaseFee()

const resevation1 = new Reservation(3, "201", 5)
console.log(resevation1) // Reservation { guests: 3, room: '201', days: 5, total: 750 }

const resevation2 = new Reservation(2, "104", 2)
console.log(resevation2) // Reservation { guests: 2, room: '104', days: 2, total: 300 }

console.log(`Premium fee is $${Reservation.premiumFee}`)
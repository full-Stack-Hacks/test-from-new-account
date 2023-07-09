class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class King extends Person {
    constructor(name, age, kingdom) {
        super(name, age)
        this.kingdom = kingdom
    }

    decree() {
        return `I Decree taxes to the subjects of ${this.kindom}`
    }
}

class Knight extends Person {
    constructor(name, age, king) {
        super(name, age)
        this.king = king
    }

    collectTaxes() {
        return `I am collecting taxes for ${this.king}`
    }
}

class Squire extends Knight {
    constructor(name, age, king, rank) {
        super(name, age, king)
        this.rank = rank
    }

    getRank() {
        return `${this.name} is a ${this.rank} knight.`
    }
}

const squire = new Squire('Garrett', 23, 'Larry the ordinary', 'Junior grade') 
console.log(squire.getRank())
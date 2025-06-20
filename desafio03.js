class hero{
    constructor(name, age, type,){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        let attackDescription
        switch(this.type){
    case "mago":
        attackDescription = "magia"
        break
    case "guerreiro":
        attackDescription = "espada"
        break
    case "monge":
        attackDescription = "artes marciais"
        break
    case "ninja":
        attackDescription = "shuriken"
        break
    default:
        attackDescription = "usou um ataque desconhecido"
}
console.log(`O ${this.type} chamado ${this.name} atacou usando ${attackDescription}`)
    }
}




let heroMage = new hero("Kael'thas", 150, "mago")
let heroWarrior = new hero("Garrosh", 35, "guerreiro" )
let heroMonk = new hero("Soten", 52, "monge")
let heroNinja = new hero("chamuscado", 18, "ninja")

let listOfHeros = [heroMage, heroWarrior, heroMonk, heroNinja]

for(let hero of listOfHeros){
    hero.attack()
}
//segundo desafio do felipão
function rankedWins(victory, defeat){
    let wins = victory - defeat
    return wins  
}

let balance = rankedWins(32, 12)
let level = balance

if(balance < 10){
    level = "ferro"
}else if(balance >= 11 && balance <= 20){
    level = "Bronze"
}else if(balance >= 21 && balance <=50){
    level = "Prata"
}else if(balance >= 51 && balance <= 80){
    level = "Ouro"
}else if(balance >= 81 && balance <= 90){
    level = "Diamante"
}else if(balance >= 91 && balance <= 100){
    level = "Lendario"
}else if(balance >= 101){
    level = "Imortal"
}

console.log("O Héroi tem saldo de " + balance + " vitórias está no nível de " + level)
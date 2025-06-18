//segundo desafio do felipão

//criei a função com variaveis
function rankedWins(victory, defeat){
    let wins = victory - defeat
    let lvl = ""

    if(victory <= 10){
        lvl = "ferro"
    }else if(victory >= 10 && victory <= 20){
        lvl = "Bronze"
    }else if(victory >= 21 && victory <=50){
        lvl = "Prata"
    }else if(victory >= 51 && victory <= 80){
        lvl = "Ouro"
    }else if(victory >= 81 && victory <= 90){
        lvl = "Diamante"
    }else if(victory >= 91 && victory <= 100){
        lvl = "Lendario"
    }else if(victory >= 101){
        lvl = "Imortal"
    }

    return { wins, lvl }
}

console.log("---- Relatório de nível dos jogadores ---")


const heros = [
    {victory: 32, defeat: 12},
    {victory: 4, defeat: 2},
    {victory: 75, defeat: 22},
    {victory: 95, defeat: 2},]


//criado laço de repetição, tive que fazer algumas pesquisas para poder criar esse laço.
// entender que ao usar player.length ele vai até o ultimo valor do array criado.

for(let i = 0; i < heros.length; i++){
    const hero = heros[i]
    
    let final = rankedWins(hero.victory, hero.defeat)
    //saida
console.log("O Héroi tem o saldo de " + final.wins + " vitórias está no nível de " + final.lvl)
}




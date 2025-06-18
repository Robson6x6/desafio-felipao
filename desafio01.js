//declaração de variaveis

//criei uma variavel para armazenar o nome do nivel
let nomeHeroi = "Shumingo"
let xp = 7000
let nivel = ""

//como no desafio pulou do 5000 para o 7000 estendi um pouco a quantidade de experiencia do nivel ouro para platina diamante.

if(xp < 1000){
    nivel = "Ferro"
}else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze"
}else if (xp >= 2001 && xp <= 5000){
    nivel = "prata"
}else if (xp >= 5001 && xp <= 7000){
    nivel = "Ouro"
}else if (xp >= 7001 && xp <= 8000){
    nivel = "Platina diamante"
}else if (xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"
}else if (xp >= 9001 && xp <= 10000){
    nivel = "Imortal"
}else if (xp >= 10001){
    nivel = "Radiante"
}


console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel)

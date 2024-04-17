// DESAFIO HERÓI - Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
let nome = "Thor";
let xp = 10000;
let resultado; 


switch (true) {
    // Se XP for menor do que 1.000 = Ferro
    case xp < 1000:
    resultado = ("Ferro")
        break;
    //Se XP for entre 1.001 e 2.000 = Bronze
        case xp >= 1001 && xp <= 2000:
    resultado = ("Bronze");
        break;
    //Se XP for entre 2.001 e 5.000 = Prata
        case xp >= 2001 && xp <= 5000:
        resultado = ("Prata");
        break;
    //Se XP for entre 5.001 e 7.000 = Ouro
        case xp >= 5001 && xp <= 7000:
        resultado = ("Ouro");
        break;
    //Se XP for entre 7.001 e 8.000 = Platina
        case xp >= 7001 && xp <= 8000:
        resultado = ("Platina");
        break;
    //Se XP for entre 8.001 e 9.000 = Ascendente
        case xp >= 8001 && xp <= 9000:
        resultado = ("Ascedente");
        break;
    //Se XP for entre 9.001 e 10.000= Imortal
        case xp >= 9001 && xp <= 10000:
        resultado = ("Imortal");
        break;
    //Se XP for maior ou igual a 10.001 = Radiante
    case xp >= 10000 || xp <= 10001:
        resultado = ("Radiante");
}
// Resultado
console.log("O Herói " + nome, "está no nível : " + resultado );






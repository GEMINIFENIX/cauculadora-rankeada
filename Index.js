let vitoria = 50;
let derrota = 10;

function rank(vitoria, derrota) {
    let resultado = vitoria - derrota;

    switch (true) {
        case resultado < 10:
            return "Ferro";
  
        case resultado >= 11 && resultado <= 20:
            return "Bronze";
  
        case resultado >= 21 && resultado <= 50:
            return "Prata";
  
        case resultado >= 51 && resultado <= 80:
            return "Ouro";
  
        case resultado >= 81 && resultado <= 90:
            return "Diamante";
  
        case resultado >= 91 && resultado <= 100:
            return "Lendário";
  
        case resultado >= 101:
            return "Mítico";
  
        default:
            return "Lendário";
    return resultado
    }
}
let saldo = vitoria - derrota
let resultadoRank = rank(vitoria, derrota);
console.log(`O Herói tem um saldo de ${saldo} vitórias e está no nível de ${resultadoRank}`);



let nomeHeroi = "Shazan"
let XP = 5000


switch(XP){
    case "XP < 1.000":
    console.log ("O herói " + nomeHeroi + "está no nível Ferro")
break
    case "XP > 1001 && XP < 2.000":
    console.log ("O herói " + nomeHeroi + "está no nível Bronze")
break
    case "XP > 2.001 && XP < 5.000":
    console.log ("O herói " + nomeHeroi + "está no nível Prata")
break
    case "XP > 5.001 && XP < 7.000":
    console.log ("O herói " + nomeHeroi + "está no nível Ouro")
break
    case "XP > 7.001 && XP < 8.000":
    console.log ("O herói " + nomeHeroi + "está no nível Platina")
break
    case "XP >= 8.001 && XP <= 9.000":
    console.log ("O herói " + nomeHeroi + "está no nível Ascendente")
break
    case "XP > 9.001 && XP < 10.000":
    console.log ("O herói " + nomeHeroi + "está no nível Imortal")
break
    case "XP >= 10001":
    console.log ("O herói " + nomeHeroi + "está no nível Radiante");
break
    console.log("O Herói " + nomeHeroi + " está no nível: ")
}
console.log ("O heroi de nome " + nomeHeroi + "está no nível " + XP)
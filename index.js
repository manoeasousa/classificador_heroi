let nomeHeroi = "Shazan"
let XP = 10.001 

switch(XP){
    case "XP < 1.000":
    console.log ("O herói " + nomeHeroi + "está no nível Ferro")
break
    case "XP > 1001 && < 2.000":
    console.log ("O herói " + nomeHeroi + "está no nível Bronze")
break
    case "XP > 2.001 && < 5.000":
    console.log ("O herói " + nomeHeroi + "está no nível Prata")
break
    case "XP > 5.001 && < 7.000":
    console.log ("O herói " + nomeHeroi + "está no nível Ouro")
break
    case "XP > 7.001 && < 8.000":
    console.log ("O herói " + nomeHeroi + "está no nível Platina")
break
    case "XP >= 8.001 && <= 9.000":
    console.log ("O herói " + nomeHeroi + "está no nível Ascendente")
break
    case "XP > 9.001 && < 10.000":
    console.log ("O herói " + nomeHeroi + "está no nível Imortal")
break
    case "XP >= 10001":
    console.log ("O herói " + nomeHeroi + "está no nível Radiante");
break

}
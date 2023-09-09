

let op1 = "Piedra";
let op2 = "Papel";
let op3 = "Tijera";


let resultado = function(jug1,jug2) {
    if(jug1 != jug2){
        if (jug1 === op1 && jug2 === op2) {
            console.log("Jug Gana con " + op1);
        } else if (jug1 === op2 && jug2 === op3) {
            console.log("Jug Gana con " + op2);
        } else if (jug1 === op3 && jug2 === op1) {
            console.log("Jug Gana con " + op3);
        } else {console.log("Cpu Gana");}

    } else { console.log("Hay un empate");

    }
}

resultado(op1,op3);






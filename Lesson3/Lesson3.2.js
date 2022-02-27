let san1 = prompt("Бірінші санды енгізіңіз");
let san2 = prompt("Екінші санды енгізіңіз");
function argMax(san1, san2) {
    if (san1 > san2) return san1;
    else return san2;
}
alert(argMax(san1, san2));
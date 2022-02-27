let san1 = prompt("Бірінші санды енгізіңіз");
let san2 = prompt("Екінші санды енгізіңіз");
function argMin(san1, san2) {
    if (san1 > san2) return san2;
    else return san1;
}
alert(argMin(san1, san2));
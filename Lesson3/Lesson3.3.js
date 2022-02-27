let baga = prompt("Бағаны енгізіңіз 2-5");
function bagalar(baga) {
    if (baga == 5) return "Үздік";
    else if (baga == 4) return "Жақсы";
    else if (baga == 3) return "Қанағаттандырарлық";
    else if (baga == 2) return "Нашар";
    else return "2-5 аралығындағы санды енгізіңіз";
}
alert(bagalar(baga));
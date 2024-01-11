function Kiemtra (so) {
    if (so % 2 === 0) {
        return "Số " + so + "là số chẵn";
    }
    else {
        return "Số " + so + "là số lẻ";
    }
}
var socankiemtra = 8;
document.write (Kiemtra(socankiemtra));
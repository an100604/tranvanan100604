// Lấy số ngẫu nhiên từ 0 đến 1
var randomNumber = Math.floor(Math.random() * 2);

// Lấy số ngẫu nhiên từ 1 đến 10
// var randomNumber = Math.floor(Math.random() * 10) + 1;

var guess = prompt("Hãy đoán xem số là gì?");
while (guess != randomNumber) {
  guess = prompt("Số bạn đoán không đúng hãy thử lại ?");
}

alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber);
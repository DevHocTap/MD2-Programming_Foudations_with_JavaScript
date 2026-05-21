// Máy tự sinh số ngẫu nhiên từ 1 đến 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 5;
let isWin = false;
console.log(" Quiz Game Đoán số! (1 - 100)");
for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  let guess = parseInt(
    prompt(`Lần đoán thứ ${attempt}/${maxAttempts}. Nhập số bạn đoán:`),
  );
  if (isNaN(guess)) {
    alert("Vui lòng nhập một số hợp lệ!");
    attempt--;
    continue;
  }
  if (guess === targetNumber) {
    alert(
      `Chúc mừng! Bạn đã đoán đúng số ${targetNumber} ở lần đoán thứ ${attempt}.`,
    );
    isWin = true;
    break; 
  } else if (guess > targetNumber) {
    alert("Số bạn đoán quá lớn!");
  } else {
    alert("Số bạn đoán quá nhỏ!");
  }
}
if (!isWin) {
  alert(`Game Over! Bạn đã hết lượt. Số chính xác là: ${targetNumber}`);
}

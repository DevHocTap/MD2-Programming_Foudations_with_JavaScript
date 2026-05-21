let number

do {
    number = parseInt(prompt("Nhập vào một số từ 1 đến 10:"));

    if (isNaN(number) || number < 1 || number > 10) {
      alert("Số không hợp lệ. Vui lòng nhập lại.");
    }
} 
while (isNaN(number) || number < 1 || number > 10);

alert("Số bạn đã nhập là: " + number);
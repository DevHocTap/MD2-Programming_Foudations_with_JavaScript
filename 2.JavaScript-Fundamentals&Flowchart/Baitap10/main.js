let a = Number(prompt("Nhập số [A]: "))
let op = prompt("Nhập phép toán (+, -, *, /): ");
let b = Number(prompt("Nhập số [B]: "))


let result
let isValid = true

switch (op) {
    case "+":
        result = a + b
        break
    case "-":
        result = a - b
        break
    case "*":
        result = a * b
        break
    case "/":
        if (b === 0) { 
            alert("Không thể chia cho 0")
            isValid = false
        } else {
            result = a / b
        }
        break
    default:
        alert("Phép toán không hợp lệ")
        isValid = false
}

if (isValid) {
    console.log(`Kết quả của ${a} ${op} ${b} là: ${result}`)
    alert(`Kết quả của ${a} ${op} ${b} là: ${result}`)
}
const numbers = [10, 25,47,8,99,34,12];

function checkNumber(serachValue){
    if(numbers.includes(serachValue)){
      const index = numbers.indexOf(serachValue);
      console.log(`Số ${serachValue} có trong mảng và nằm ở vị trí ${index}`);
    } else {
      console.log(`Số ${serachValue} không có trong mảng`);
    }
}

console.log("Test hàm checkNumber:");
checkNumber(25);
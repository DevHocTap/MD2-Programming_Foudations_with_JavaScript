const parentBox = document.getElementById("parent-box");
const childBtn = document.getElementById("child-btn");

parentBox.addEventListener("click", function() {
  alert("Bạn đã click vào thẻ Parent (div lớn)");
});
childBtn.addEventListener("click", function(event) {
  console.log("Bạn đã click vào nút Child");
  event.stopPropagation();
});
// Kiểm tra xem giá trị có phải là số hợp lệ không
function isValidNumber(value) {
  return !isNaN(value);
}
// Kiểm tra đã nhập giá trị vào ô nhập liệu chưa
function isInputEmpty(value) {
  return value.trim() === "";
}

document.getElementById("calculateBtn").addEventListener("click", function () {
  // Lấy giá trị từ các ô nhập liệu
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = document.getElementById("result");
  var errorDiv = document.getElementById("error");
  var operation = document.querySelector('input[name="operation"]:checked');

  // Xóa lỗi trước đó
  errorDiv.textContent = "";

  // Kiểm tra số nhập vào
  if (!isValidNumber(num1)) {
    errorDiv.textContent = "Giá trị nhập ở ô số thứ nhất không phải là số.";
    return;
  }
  if (!isValidNumber(num2)) {
    errorDiv.textContent = "Giá trị nhập ở ô số thứ hai không phải là số.";
    return;
  }
  // Kiểm tra xem người dùng đã nhập giá trị vào ô nhập liệu chưa
  if (isInputEmpty(num1)) {
    errorDiv.textContent = "Vui lòng nhập số thứ nhất.";
    return;
  }
  if (isInputEmpty(num2)) {
    errorDiv.textContent = "Vui lòng nhập số thứ hai.";
    return;
  }
  // Kiểm tra xem người dùng có chọn phép tính không
  if (!operation) {
    errorDiv.textContent += "Vui lòng chọn một phép tính.";
    return;
  }

  // Chuyển đổi input thành số
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Xử lý các phép tính
  var calculatedResult;
  switch (operation.value) {
    case "add":
      calculatedResult = num1 + num2;
      break;
    case "subtract":
      calculatedResult = num1 - num2;
      break;
    case "multiply":
      calculatedResult = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        errorDiv.textContent = "Không thể chia cho 0.";
        return;
      }
      calculatedResult = num1 / num2;
      break;
    default:
      errorDiv.textContent += "Vui lòng chọn một phép tính hợp lệ.";
      return;
  }

  // Hiển thị kết quả
  result.value = calculatedResult;
});

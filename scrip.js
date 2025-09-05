function calculate(op) {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  let result = "";

  if (isNaN(a) || isNaN(b)) {
    result = "กรุณาใส่ตัวเลขทั้งสองช่อง";
  } else {
    switch(op) {
      case "+": result = a + b; break;
      case "-": result = a - b; break;
      case "*": result = a * b; break;
      case "/": result = b !== 0 ? a / b : "หารด้วยศูนย์ไม่ได้"; break;
    }
  }
  document.getElementById("result").innerText = "ผลลัพธ์: " + result;
}
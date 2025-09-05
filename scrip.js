let currentOperator = '';

/**
 * ฟังก์ชันนี้ใช้สำหรับตั้งค่าตัวดำเนินการเมื่อผู้ใช้กดปุ่ม
 * @param {string} op ตัวดำเนินการทางคณิตศาสตร์ (+, -, *, /)
 */
function setOperator(op) {
    currentOperator = op;
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("result");
    let result = "";

    if (isNaN(num1) || isNaN(num2)) {
        result = "กรุณาใส่ตัวเลขทั้งสองช่อง";
    } else if (currentOperator === '') {
        result = "กรุณาเลือกตัวดำเนินการ (+ - × ÷)";
    } else {
        switch(currentOperator) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num2 !== 0 ? num1 / num2 : "หารด้วยศูนย์ไม่ได้"; break;
        }
    }
    resultElement.innerText = "ผลลัพธ์: " + result;
}
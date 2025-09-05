function calculate(op) {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultElement = document.getElementById("result");

    const a = parseFloat(num1Input.value);
    const b = parseFloat(num2Input.value);

    if (num1Input.value.trim() === "" || num2Input.value.trim() === "") {
        resultElement.innerText = "ผลลัพธ์: กรุณาใส่ตัวเลขทั้งสองช่อง";
        resultElement.style.color = "red";
        return;
    }

    let result;
    resultElement.style.color = "#007bff"; 

    switch(op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                resultElement.innerText = "ผลลัพธ์: หารด้วยศูนย์ไม่ได้";
                resultElement.style.color = "red";
                return;
            }
            result = a / b;
            break;
    }

    resultElement.innerText = "ผลลัพธ์: " + result;
}
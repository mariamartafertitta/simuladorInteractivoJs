let num1;
do {
    num1 = parseFloat(prompt("Ingrese un numero"));

    if (isNaN(num1)) {
        alert("Ingrese un numero valido");
    }
} while (isNaN(num1));

let num2;
do {
    num2 = parseFloat(prompt("Ingrese el siguiente numero"));

    if (isNaN(num2)) {
        alert("Ingrese un numero valido")
    }
} while (isNaN(num2));

let operacion = prompt("Selelecione una operacion: 1 Suma  2 Resta  3 Multiplicacion 4 Division");

function calcular(num1Parametro, num2Parametro, operacionParametro) {
    switch (operacionParametro) {
        case "1":
            return num1Parametro + num2Parametro;
        case "2":
            return num1Parametro - num2Parametro;
        case "3":
            return num1Parametro * num2Parametro;
        case "4":
            return num1Parametro / num2Parametro;
        default:
            return "Operacion incorrecta";
    }
}

let resultado = calcular(num1, num2, operacion);
console.log(resultado);
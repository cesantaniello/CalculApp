function operacion(){
    const forma = document.getElementById("forma");
    const operandoA = forma["operandoA"];
    const operandoB = forma["operandoB"];
}

function sumar() {
    operacion();
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "You need to put numbers";
    document.getElementById("resultado").innerHTML = `${resultado}`;
    console.log(`${resultado}`);
}

function restar() {
    operacion();
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "You need to put numbers";
    document.getElementById("resultado").innerHTML = `${resultado}`;
    console.log(`${resultado}`);
}

function multiplicar() {
    operacion();
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "You need to put numbers";
    document.getElementById("resultado").innerHTML = `${resultado}`;
    console.log(`${resultado}`);
}

function dividir() {
    operacion();
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "You need to put numbers";
    if(operandoB.value == 0)
        resultado = "Division by zero is not possible";
    document.getElementById("resultado").innerHTML = `${resultado}`;
    console.log(`${resultado}`);
}
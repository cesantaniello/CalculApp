function operacion(){
    const forma = document.getElementById("forma");
    const operandoA = forma["operandoA"];
    const operandoB = forma["operandoB"];
}

function solucion(resultado) {       
    if(isNaN(resultado))
        resultado = "You need to put numbers";
    if(!isFinite(resultado))
        resultado = "Divion by zero is not allowed";
    document.getElementById("resultado").innerHTML = `${resultado}`;
    console.log(`${resultado}`);
}

function sumar() {
    operacion();
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    solucion(resultado);
}

function restar() {
    operacion();
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    solucion(resultado);
}

function multiplicar() {
    operacion();
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    solucion(resultado);
}

function dividir() {
    operacion();
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    solucion(resultado);
}
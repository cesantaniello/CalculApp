function sumar() {
    const forma = document.getElementById("forma");
    const operandoA = forma["operandoA"];
    const operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "La operación no incluye números";
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
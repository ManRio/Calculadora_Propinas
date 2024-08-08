'use strict';

// Evitamos que el formulario se envíe y se recargue la página

document.getElementById('calculator_form').addEventListener('submit', function(event){
    event.preventDefault();


    // leemos la entrada del formulario

    var billAmount = parseFloat(document.getElementById('bill').value);
    var servicePercentage = parseFloat(document.getElementById('service').value);

    //Validamos los valores de entrada

    if (isNaN(billAmount) || billAmount <= 0) {
    alert('Por favor, introduce el total correcto de la factura');
    return;
    }

    // Calculamos la propina y el total a pagar
    var tip = billAmount * servicePercentage;

    var result = tip + billAmount;


    // Mostramos el resultado en el HTML

    document.getElementById('total').textContent = result.toFixed(2);


});

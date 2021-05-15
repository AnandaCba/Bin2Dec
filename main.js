function bintodec(){

    let total = 0;
    let exponentiation = 0;

    //Buscando valores inseridos
    binNumber = document.getElementById('bin1').value;
    binaryLength = binNumber.length - 1;
    
    //Cálculo para conversão de binário para decimal
    for(binaryLength; binaryLength >= 0; binaryLength-- ){

        numberValuePosition = Number(binNumber.substr(binaryLength,1))
        decimalValue = numberValuePosition * Math.pow(2,exponentiation)
        total = total + decimalValue

        exponentiation = exponentiation + 1
    };
    //Exibe resultado
    result.innerHTML =  `${total}`
};

//Foco ao abrir a pagina e limpa a área
window.onload = function() {
    document.getElementById("bin1").focus();
    document.querySelector('textarea').value = '';
  };
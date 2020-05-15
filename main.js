//Criada a função para realizar o calculo
function transform(){

    //Caso o user tenha inserido valor "1" a condição joga o valor do número que representa na variável "br1"
    //Cada posição tem um valor especifico no qual vai receber esse valor se a informação que o user passou por "1"
    //Então isso se repete por 8 vezes, as 8 posições disponíveis para o user inserir valores

    // Vetor para armazenar number do user
    var arr = []
    
    var br1=0, 
        br2=0, 
        br3=0, 
        br4=0, 
        br5=0, 
        br6=0, 
        br7=0, 
        br8=0
    //Variável buscando o valor inserido pelo User
    var b1 = Number(document.getElementById('bin1').value)
    // Push para o array
    arr.push(b1)
        //Verificação...
        if (b1==1){
            br1 = 128;
            console.log(br1)
        }
    //Inicia todo o processo novamente
    var b2 = Number(document.getElementById('bin2').value)
    console.log(b2)
    arr.push(b2)
        if (b2==1){
            var br2 = 64;
            console.log(br2)
        }
    var b3 = Number(document.getElementById('bin3').value)
    arr.push(b3)
        if (b3==1){
            var br3 = 32;
            console.log(br3)
        }
    var b4 = Number(document.getElementById('bin4').value)
    arr.push(b4)
        if (b4==1){
            var br4 = 16;
            console.log(br4)
        }
    var b5 = Number(document.getElementById('bin5').value)
    arr.push(b5)
    if (b5==1){
        var br5 = 8;
        console.log(br5)
    }
    var b6 = Number(document.getElementById('bin6').value)
    arr.push(b6)
    if (b6==1){
        var br6 = 4;
        console.log(br6)
    }
    var b7 = Number(document.getElementById('bin7').value)
    arr.push(b7)
    if (b7==1){
        var br7 = 2;
        console.log(br7)
    }
    var b8 = Number(document.getElementById('bin8').value)
    arr.push(b8)
    if (b8==1){
        var br8 = 1;
        console.log(br8)
    }
    // Verificação se algum input é >1 || < 0 
    for(c = 0; c <= 9 ; c++){
        if (arr[c] > 1 ){
            window.alert('Digite apenas números binários (0 ou 1)')
            }
        if (arr[c] < 0){
            window.alert('Digite apenas números binários (0 ou 1)')
        }        
    }
    //Soma-se todos os valores e exibe na tela
    var soma = br1 + br2 + br3 + br4 + br5 + br6 + br7 + br8;
    res.innerHTML =  `${soma}`
}

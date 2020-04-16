function transform(){
    //Criada a função para realizar o calculo
    
    //Variável buscando o valor inserido pelo User
    var b1 = window.document.getElementById('bin1')
    //Transformo a variável em number para calculo
    var bn1 = Number.parseInt(b1.value)
    //Caso o user tenha inserido valor "1" a condição joga o valor do número que representa na variável "br1"
    //Cada posição tem um valor especifico no qual vai receber esse valor se a informação que o user passou por "1"
    //Então isso se repete por 8 vezes, as 8 posições disponíveis para o user inserir valores
    var br1 = 0;
        if (bn1==1){
            var br1 = 128;

        }  //Condição para verificar se o number é ou não binário. Se não for surge um alerta
        if (bn1>1 || bn1<0)
        {
            window.alert('Digite apenas números binários (0 ou 1)')
        }
    //Inicia todo o processo novamente
    var b2 = window.document.getElementById('bin2')
    var bn2 = Number.parseInt(b2.value)
    var br2 = 0;
        if (bn2==1){
            var br2 = 64;
        }
        if (bn2>1 || bn2<0)
        {
            window.alert('Digite apenas números binários (0 ou 1)')
        }
    
    var b3 = window.document.getElementById('bin3')
    var bn3 = Number.parseInt(b3.value)
    var br3 = 0;
        if (bn3==1){
            var br3 = 32;
        }
        if (bn3>1 || bn3<0)
        {
            window.alert('Digite apenas números binários (0 ou 1)')
        }
    
    var b4 = window.document.getElementById('bin4')
    var bn4 = Number.parseInt(b4.value)
    var br4 = 0;
        if (bn4==1){
            var br4 = 16;
        }
        if (bn4>1 || bn4<0)
        {
            window.alert('Digite apenas números binários (0 ou 1)')
        }
    
    var b5 = window.document.getElementById('bin5')
    var bn5 = Number.parseInt(b5.value)
    var br5 = 0;
    if (bn5==1){
        var br5 = 8;
    }
    if (bn5>1 || bn5<0)
    {
        window.alert('Digite apenas números binários (0 ou 1)')
    }

    var b6 = window.document.getElementById('bin6')
    var bn6 = Number.parseInt(b6.value)
    var br6 = 0;
    if (bn6==1){
        var br6 = 4;
    }
    if (bn6>1 || bn6<0)
    {
        window.alert('Digite apenas números binários (0 ou 1)')
    }

    var b7 = window.document.getElementById('bin7')
    var bn7 = Number.parseInt(b7.value)
    var br7 = 0;
    if (bn7==1){
        var br7 = 2;
    }
    if (bn7>1 || bn7<0)
    {
        window.alert('Digite apenas números binários (0 ou 1)')
    }

    var b8 = window.document.getElementById('bin8')
    var bn8 = Number.parseInt(b8.value)
    var br8 = 0;
    if (bn8==1){
        var br8 = 1;
    }
    if (bn8>1 || bn8<0)
    {
        window.alert('Digite apenas números binários (0 ou 1)')
    }
    //Soma-se todos os valores e exibe na tela
    var soma = br1 + br2 + br3 + br4 + br5 + br6 + br7 + br8;
    res.innerHTML =  `${soma}`

}
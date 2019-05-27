function ex1() {
    var n1 = 0;
    var n1 = Number(n1);
    var pResposta1 = document.all['resposta1'];
    for (x1=0;x1<25;x1++){
    var n1 = prompt("Qual seu salario?")    
        
    if (n1 <= 500) {
        n1 = n1 + (n1 *0.05) + 150;
        pResposta1.innerHTML += "Salario: " + n1 + "<br>"; 
        }
        else if (n1 >= 500.01 && n1 <=600) {
            n1 = n1 + (n1*0.12) + 150;
                pResposta1.innerHTML += "Salario: " + n1 + "<br>";
            }
            else if (n1 >= 600.01 && n1 <= 1200){
                n1 = n1 + (n1 *0.12) + 100;
                pResposta1.innerHTML += "Salario: " + n1 + "<br>"; 
            }
            else if (n1 > 1200){
                n1 = n1 + 100;
                pResposta1.innerHTML += "Salario: " + n1 + "<br>";
    }
    }
    }
function ex2(){
    var n1 = document.all['n1'].value;
    var n1 = Number(n1);
    var cont = 0;
    var x1 = 0;

    var pResposta1 = document.all['resposta1'];


    if( n1 == 1){
        pResposta1.innerHTML = "O numero não é primo!";
    }
    else{
        if(n1 <= 10){
            for(x1=1;x1<=n1;x1++){
                if(n1 % x1 == 0){
                    cont = cont + 1; 
                }
            }
        }
        else{
            for(x1=1;x1<=10;x1++){
                if (n1 % x1 == 0){
                    cont = cont + 1;
                }
            }
        }
    }
    if(cont == 2){
        pResposta1.innerHTML = "O numero é primo!"; 
    }
    else{
        pResposta1.innerHTML = "O numero não é primo!"; 
    }
}
function ex3() {
    var pResposta1 = document.all['resposta1'];
    var n1 = document.all['n1'].value;
    var n1 = Number(n1);
    var n2 = 0
    var n3 = 1
    var n4 = 0
    var x1 = 0

    for(x1=0;x1<n1;x1++){
        var n4 = n2 + n3
        var n2 = n3
        var n3 = n4
    pResposta1.innerHTML += " " + n4;
    }
    
}

function ex4() {
    var pResposta1 = document.all['resposta1'];
    var pResposta2 = document.all['resposta2'];
    var pResposta3 = document.all['resposta3'];
    var pResposta4 = document.all['resposta4'];
    var n1 = document.all['n1'].value;
    var n1 = Number(n1);
    var VT = 0;
    var VB = 0;
    var VR = 0;
    var cont = 0;
    var x1 = 0;

while(x1<50){
    var n1 = prompt("Qual o numero do seu vinho?")
    var n1 = Number(n1);

    if(n1 == 1){
        var VT = VT + 1;
    }
    if(n1 == 2){
        var VB = VB + 1;
    }
    if(n1 == 3){
        var VR = VR + 1;
    }
    var cont = cont + 1;
    var x1 = x1 + 1;
}
    if(x1 == 50){   
        var n2 = (VT * 100) / cont;
        var n3 = (VB * 100) / cont;
        var n4 = (VR * 100) / cont;
        pResposta1.innerHTML = "Porcentagem de vinho tinto: " + n2 + "%";
        pResposta2.innerHTML = "Porcentagem de vinho branco: " + n3 + "%";
        pResposta3.innerHTML = "Porcentagem de vinho rose: " + n4 + "%";
        pResposta4.innerHTML = "Quantidade total: " + cont;

    }
}

function ex5() {
    var n1 = document.all['n1'].value;
    var n1 = Number(n1);
    var pResposta1 = document.all['resposta1'];
    var cont = n1
    var fat = 0

    for (cont = n1; cont > 2 ; cont = cont - 1){

    if (cont == n1){
        fat = cont * (cont - 1)
        pResposta1.innerHTML = cont + " * " + (cont - 1) +  " = " + fat;
    }

    if (cont < n1 && cont != 1){
        fat = fat * (cont - 1)
         pResposta1.innerHTML = fat + " * " + (cont - 1) +  " = " + fat;
    }

    }
    pResposta1.innerHTML = "O fatorial de " + n1 + " é: " + fat;

    }

function ex1() {
    var n1 = document.all['n1'].value;
    var n1 = Number(n1);
    var n2 = document.all['n2'].value;
    var n2 = Number(n2);
    var n3 = document.all['n3'].value;
    var n3 = Number(n3);
    var pResposta1 = document.all['resposta1'];
    var pResposta2 = document.all['resposta2'];
    var pResposta3 = document.all['resposta3'];
    var x1 = 0;
    var x2 = 0;
    var b2 = 0;

    var b2 = n2 * n2;
    var delta = (b2) - (4 * n1 * n3);
    
    if (n1 == 0){
        pResposta1.innerHTML = "A tem que ser diferente de 0!";
    }
    else if(delta > 0){
        pResposta1.innerHTML = "Existem duas raizes:";
        var x1 = (-n2+Math.sqrt(delta)) / 2 * n1;
        var x2 = (-n2-Math.sqrt(delta)) / 2 * n1;
        pResposta2.innerHTML = "Primeira raiz X: " + x1;
        pResposta3.innerHTML = "Segunda raiz X: " + x2;
    }
    else if(delta == 0){
        pResposta1.innerHTML = "Duas raizes iguais!";
        var x1 = (-n2+Math.sqrt(delta)) / 2 * n1;
        var x2 = (-n2-Math.sqrt(delta)) / 2 * n1;
        pResposta2.innerHTML = "Primeira raiz X: " + x1;
        pResposta3.innerHTML = "Segunda raiz X: " + x2;
    }
    else if(delta < 0){
        pResposta1.innerHTML = "Não pertence aos reais";
    }
}

function ex2() {
    var n1 = document.all['n1'].value;
    var n1 = Number(n1);
    var n2 = document.all['n2'].value;
    var n2 = Number(n2);
    var n3 = document.all['n3'].value;
    var n3 = Number(n3);
    var pResposta1 = document.all['resposta1'];
    var pResposta2 = document.all['resposta2'];

    nt1 = n1 * 0.20;
    nt2 = n2 * 0.30;
    nt3 = n3 * 0.50;

    nt = nt1 + nt2 + nt3;

    if((nt >= 8) && (nt <= 10 )){
        pResposta1.innerHTML = "Nota: " + nt;
        pResposta2.innerHTML = "Conceito: A";
    }
    else if(nt >= 7){
        pResposta1.innerHTML = "Nota: " + nt;
        pResposta2.innerHTML = "Conceito: B";
    }
    else if(nt >= 6){
        pResposta1.innerHTML = "Nota: " + nt;
        pResposta2.innerHTML = "Conceito: C";
    }
    else if(nt >= 5){
        pResposta1.innerHTML = "Nota: " + nt;
        pResposta2.innerHTML = "Conceito: D";
    }
    else if(nt >= 0){
        pResposta1.innerHTML = "Nota: " + nt;
        pResposta2.innerHTML = "Conceito: E";
    }
}

function ex3() {
    var Inputn1 = document.all['n1'].value;
    var Inputn1 = Number(Inputn1);
    var Inputn2 = document.all['n2'].value;
    var Inputn2 = Number(Inputn2);
    var Inputn3 = document.all['n3'].value;
    var Inputn3 = Number(Inputn3);
    var pResposta = document.all['resposta'];
    if (Inputn1>Inputn2 && Inputn2>Inputn3) {
        pResposta.innerHTML = Inputn3 + ' ' + Inputn2 + ' '+ Inputn1;
    }else if(Inputn1>Inputn3 && Inputn3>Inputn2){
        pResposta.innerHTML = Inputn2 + ' ' + Inputn3 + ' '+ Inputn1;
        var ola = ola + 1
    }else if(Inputn2>Inputn1 && Inputn1>Inputn3){
        pResposta.innerHTML = Inputn3 + ' '+ Inputn1 + ' '+ Inputn2;
        var ola = ola + 1
    }else if(Inputn2>Inputn3 && Inputn3>Inputn1){
        pResposta.innerHTML = Inputn1 + ' '+ Inputn3 + ' '+ Inputn2;
        var ola = ola + 1
    }else if(Inputn3>Inputn1 && Inputn1>Inputn2){
        pResposta.innerHTML = Inputn2 + ' '+ Inputn1 + ' '+ Inputn3;
        var ola = ola + 1
    }else if(Inputn3>Inputn2 && Inputn2>Inputn1){
        pResposta.innerHTML = Inputn1 + ' '+ Inputn2 + ' '+ Inputn3;
        var ola = ola + 1
    }
}

function ex4() {
    var n1 = document.all['n1'].value;
    var n1 = Number(n1);
    var n2 = document.all['n2'].value;
    var n2 = Number(n2);
    var n3 = document.all['n3'].value;
    var n3 = Number(n3);
    var d1 = document.all['d1'].value;
    var d1 = Number(d1);
    var d2 = document.all['d2'].value;
    var d2 = Number(d2);
    var d3 = document.all['d3'].value;
    var d3 = Number(d3);
    var pResposta1 = document.all['resposta1'];

    if(n2 == 1){
        dd1 = 31
    }
    if(n2 == 2){
        dd1 = 28
    }
    if(n2 == 3){
        dd1 = 31
    }
    if(n2 == 4){
        dd1 = 30
    }
    if(n2 == 5){
        dd1 = 31
    }
    if(n2 == 6){
        dd1 = 30
    }
    if(n2 == 7){
        dd1 = 31
    }
    if(n2 == 8){
        dd1 = 31
    }
    if(n2 == 9){
        dd1 = 30
    }
    if(n2 == 10){
        dd1 = 31
    }
    if(n2 == 11){
        dd1 = 30
    }
    if(n2 == 12){
        dd1 = 31
    }
    ad1 = n3 * 365;
    ddd1 =  n1 + dd1 + ad1;

    if(d2 == 1){
        dd2 = 31
    }
    if(n2 == 2){
        dd2 = 28
    }
    if(n2 == 3){
        dd2 = 31
    }
    if(n2 == 4){
        dd2 = 30
    }
    if(n2 == 5){
        dd2 = 31
    }
    if(n2 == 6){
        dd2 = 30
    }
    if(n2 == 7){
        dd2 = 31
    }
    if(n2 == 8){
        dd2 = 31
    }
    if(n2 == 9){
        dd2 = 30
    }
    if(n2 == 10){
        dd2 = 31
    }
    if(n2 == 11){
        dd2 = 30
    }
    if(n2 == 12){
        dd2 = 31
    }
    ad2 = d3 * 365;
    ddd2 =  d1 + dd2 + ad2;

    if(ddd1 > ddd2){
        pResposta1.innerHTML = "Data um: " + n1 + "/" + n2 + "/" + n3 + " é a maior!";
    }
    else if(ddd1 < ddd2){
        pResposta1.innerHTML = "Data dois: " + d1 + "/" + d2 + "/" + d3 + " é a maior!";
    }
    else{
        pResposta1.innerHTML = "As datas são iguais!";
    }

}

function ex5() {
    var n1 = document.all['n1'].value;
    var n1 = Number(n1);
    var n2 = document.all['n2'].value;
    var n2 = Number(n2);
    var n3 = document.all['n3'].value;
    var n3 = Number(n3);
    var pResposta1 = document.all['resposta1'];
    var pResposta2 = document.all['resposta2'];

    if(n3 == 1){
         n3 = n2 + n2;
         pResposta1.innerHTML = "Soma dos dois numeros: " + n3;
    }
    else if(n3 == 2){
        n3 = Math.sqrt(n1)
        n4 = Math.sqrt(n2)
        pResposta1.innerHTML = "Raiz 1: " + n3;
        pResposta2.innerHTML = "Raiz 2: " + n4;
    }

}

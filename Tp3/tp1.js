    function ex1(){
        var pResposta1 = document.all['resposta1'];
        var pResposta2 = document.all['resposta2'];
        var n1 = [];
        var n2 = [];
        var n3 = [];
        cont = 0;
        cont2 = 0;
        x2 = 0;
        x3 = 0;

        for (x=0;x<8;x++){
            n1[x] = prompt("Qual numero você deseja");
        
        if(n1[x] >= 0){
            n2[x2] = n1[x];
            x2++
        }
        else{
            n3[x3] = n1[x]; 
            x3++
        }
    }
            pResposta1.innerHTML += "Positivos: " + n2.join() + "<br>";
            pResposta1.innerHTML += "Negativos: " + n3.join() + "<br>";
         }

    function ex2(){
            var pResposta1 = document.all['resposta1'];
            var pResposta2 = document.all['resposta2'];
            var n1 = [];
            var n2 = [];
            var n3 = [];
            cont = 0;
            cont2 = 0;
            x2 = 0;
            x3 = 0;
    
            for (x=0;x<8;x++){
                n1[x] = prompt("Qual numero você deseja");
            }
            for (x=0;x<8;x++){
                if(n1[x] > 50){
                    pResposta1.innerHTML += "Numero: " + n1[x] + " Posição: " + x + "<br>";    
                    cont = cont + 1;
                }
                if (x==7 && cont == 0){
                    pResposta1.innerHTML += "Sem numero maiores que 50! " + "<br>";    
                }
            }
        }

    function ex3(){
            var pResposta1 = document.all['resposta1'];
            var n1 = [];
    
            for (x=0;x<10;x++){
                n1[x] = Number(prompt("Qual numero você deseja"));
            }
            for (x=0;x<10;x++){
                if(n1[x] % 2 == 0){   
                    n1[x] = n1[x] + 5;
                }
                else{
                    n1[x] = n1[x] * 5;
                }
            }
            pResposta1.innerHTML += "Vetor: " + n1.join() + "<br>";
        }
     function ex4(){
            var pResposta1 = document.all['resposta1'];
            var pResposta2 = document.all['resposta2'];
            var n1 = [];
            var n2 = [];
            cont = 0;
            cont2 = 0;

            for (x=0;x<20;x++){
                n1[x] = Number(prompt("Qual numero você deseja"));
            }
            pResposta2.innerHTML = "Vetor desordenado: " + n1.join() + "<br>";
        for (x=0;x<20;x++){
            for (x2=0;x2<20;x2++){
                if(n1[x] < n1[x2]){
                    cont2 = cont2 + 1;
                }
                else{
                    cont = cont + 1; 
                }
            }
            n2[cont] = n1[x];
            cont = 0;
        }
        pResposta1.innerHTML = "Vetor ordenado: " + n2.join() + "<br>";
    }
    function ex5(){
    var pResposta1 = document.all['resposta1'];
    var n1 = [];
    x2 = 0;
    x = 0;
    ind = 0;
        while(x2==0){
        n1[x] = Number(prompt("Qual numero deseja!"));  

        if(n1[x] == 0){
            x2 = 10;
        }
        if(x == 100){
            x2 = 10;
        }
        x++
    }
    cop = x - 2;
    for(x3=0;x3<x;x3++){
        if(n1[cop] == n1[x3]){
            ind = ind + 1;
        }
    }
    pResposta1.innerHTML += "São iguais: " + ind + " numeros" + "<br>";
}


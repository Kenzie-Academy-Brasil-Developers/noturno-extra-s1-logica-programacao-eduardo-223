function calculateSalary (salario, vendas){
    let vendas30 = 0, vendas50 =0, porcento3 = 3,porcento5 = 5;

    if(vendas <= 1.200){
       vendas30 = parseFloat(vendas) * parseFloat(porcento3)/100;
       vendas30 = parseFloat(vendas) + parseFloat(vendas30);
       return vendas30;

    }else if(vendas > 1.200){
        vendas50 = parseFloat(vendas) * parseFloat(porcento5)/100;
        vendas50 = parseFloat(vendas) + parseFloat(vendas50);
        vendas30 = parseFloat(1.200) * parseFloat(porcento3)/100;
        vendas50 = vendas50 + vendas30;
        return parseFloat(vendas50 + salario);   
    }

}



function calculateStock (qtnAtual,qtnMaxima,qtnMinima){
    let mediaProduto = (qtnMaxima + qtnMinima) / 2;

    if(qtnAtual >= mediaProduto){
        return "Não efetuar a compra";
    }else{
        return "Efetuar compra";
    }
}

function calculateAge (anoNascimento, anoAtual){
    let = idadeAno = 0, idadeMese = 0, idadeDia = 0, idadeSemana = 0;

    idadeAno = anoAtual - anoNascimento;
    idadeMese = idadeAno * 12;
    idadeDia = idadeAno * 365;
    idadeSemana = idadeAno * 48;
      
    return ("Sua idade é "+idadeAno+ ", "+idadeMese+" meses, "+idadeSemana+" semanas, "+idadeDia+" dias.")
}

function getDiagonal (arr){
  
    for(let contador = 0; contador < arr.length; contador++){
      console.log(arr[contador][contador]);
    }
  }
  
  console.log( getDiagonal([ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ]))
  

function cashMachine (saque){
    let contador100 = 0, contador50 = 0, contador20 = 0, contador10 = 0, contador5 = 0, contador2 = 0, contador1 = 0 ;

        for(saque; saque >= 100;saque-=100){
            contador100 ++; 
        }for(saque; saque >= 50; saque-=50){
            contador50++;  
        }for(saque; saque >= 20; saque-=20){
            contador20++;  
        }for(saque; saque >= 10; saque-=10){
            contador10++;  
        }for(saque; saque >= 2; saque-=2){
            contador2++;  
        }for(saque; saque >= 1; saque-=1){
            contador1++;  
        }
        
  
    return (contador100+' notas de R$ 100. -- '+contador50+" notas de R$ 50. -- "+contador20+" notas de R& 20. -- "+contador10+" notas de R$ 10. -- "+contador2+" notas de R$ 2. -- "+contador1+" notas de R$ 1.")
 
}



console.log(cashMachine())
function printTable(){
    var num,result ="";
    num=Number(document.getElementById('txtNumber').value);
    var pTag= document.getElementById('pPrint');
    for(var i=1; i<=10; i++){
        // result +=  (num*i) + "<br/>" ;
        result += num+ " * " + i +" = "+ num*i + "<br/>";
    }
    pTag.innerHTML = result;
    console.log(result);
}


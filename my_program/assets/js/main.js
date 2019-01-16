(function(){
    var tableNumber =3,tableLimit=15;
    makeTable(tableNumber,tableLimit);    
    })();
    function makeTable(table = 2,tableLimit=10){
       var num = 1;
        for(num=1;num<=tableLimit;num++){
            console.log( table+ " * " + num +" = "+ table*num    );
        }
    }

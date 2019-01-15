(function(){
//console.log("HI");
var tableNumber =3,tableLimit=15;
makeTable(tableNumber,tableLimit);    
})();
function makeTable(table = 2,tableLimit=10){
   //console.log("2*1=2");
   //console.log("2*2=4"); 
   var num = 1;
//    var num = 1;
//    console.log("2*1=2");
//    console.log( table+ " * " + num +" = "+ table    );
//    num++;
//    console.log( table+ " * " + num +" = "+ table*num    );


    for(num=1;num<=tableLimit;num++){
//         console.log("i = "+ i);
        console.log( table+ " * " + num +" = "+ table*num    );
    }
}
// 2*1=2
// 2*2=4
// 2*10=20
// for(i=0;i> ;i++)
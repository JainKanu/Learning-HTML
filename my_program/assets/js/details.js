$(document).ready(function(){
        var mybuttons= $("input:button");
        // console.log(mybuttons);
        mybuttons.click(ShowHideMenu);
        // console.log(PAGECONTENT);
        });

function ShowHideMenu(e){
        console.log($(this).val());
        if($(this).val() == "Haryana") haryanaPage(PAGECONTENT.Haryana);
        if($(this).val() == "Punjab") punjabPage(PAGECONTENT.Punjab);
}

function haryanaPage(HARYANACONTENT){
    $("p").text(HARYANACONTENT.title);
    $("p").after(HARYANACONTENT.description);
}
function punjabPage(PUNJABCONTENT){
    $("p").text(PUNJABCONTENT.title);
    $("p").after(PUNJABCONTENT.description);
    }
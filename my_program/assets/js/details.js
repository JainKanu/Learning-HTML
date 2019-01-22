$(document).ready(function(){
        var mybuttons= $("p:button");
        mybuttons.click(ShowHideMenu);
        console.log(PAGECONTENT);
        });

function ShowHideMenu(e){
        if($(this).text() == "Haryana") haryanaPage(PAGECONTENT.Haryana);
        if($(this).text() == "Punjab") punjabPage(PAGECONTENT.Punjab);
}

function haryanaPage(HARYANACONTENT){
    $("p").text(HARYANACONTENT.title);
    $("p").after(HARYANACONTENT.description);
}
function punjabPage(PUNJABCONTENT){
    $("p").text(PUNJABCONTENT.title);
    $("p").after(PUNJABCONTENT.description);
    }
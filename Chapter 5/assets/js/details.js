$(document).ready(function(){
        var mybuttons= $("input:button");
        // console.log(mybuttons);
        mybuttons.click(ShowHideMenu);
        // console.log(PAGECONTENT);
        });

function ShowHideMenu(e){
        console.log($(this).val());
        if($(this).val() == "Haryana") advancePage(PAGECONTENT.Haryana);
        if($(this).val() == "Punjab") advancePage(PAGECONTENT.Punjab);
}

function handelPage(CONTENT){
    $("p").text(CONTENT.title);
    $("p+div").remove();
    $("p").after(CONTENT.description);
}
function advancePage(CONTENT){
        // $("p,.desc").hide()
        //         .text(CONTENT.title)
        //         .fadeIn('slow',ShowDesc.bind(this,CONTENT))
        $("p,.desc").slideUp(2000,showPage.bind(this,CONTENT));
        
    }
function showPage(CONTENT){
        handelPage(CONTENT);
        //$("p,.desc").fadeIn();
        $("p,.desc").slideDown();
}
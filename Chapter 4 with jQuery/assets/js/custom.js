
/* $(document).ready(function(){
    console.log("Hi");
});
window.onload =function(){
    console.log("Window on load");
};
$(function(){
    console.log("Hlo");
});

$(document).ready(function(){
    console.log("Hi --1");
}); */
/* 
    1 Selector  --> CSS
    2 Events    --> Javascript Event
    3 Event Method     --> Function Logic
    4  Result       --> How to show result in document
*/

$(document).ready(function(){
    var myMenuList = $("#nav ul li");//SELECTOR
    myMenuList.click(ShowHideMenu); // EVENT BIND AND CALLING METHOD
    console.log(PAGECONTENT);
    homePage(PAGECONTENT.Home)
});
function ShowHideMenu(e){ // HERE IS OUR LOGIC
        // console.log(e.target);
        if($(this).text() == "Home") homePage(PAGECONTENT.Home);
        if($(this).text() == "About") aboutPage(PAGECONTENT.About);
        if($(this).text() == "go") goPage(PAGECONTENT.go);
        

}
function homePage(HOMECONTENT){
    // console.log("Home--",$("#main h2").text());
    // console.log($("#main p"),$("#main p:nth-child(n1)").text());
    // $("#main p").eq(2).text("");
    // var description  = $("#main p");
    // for(var i=0; i<description.length;i++){
    //     console.log(description[i] ,i);
    // }
    /* $.each(description,function(key,val){
        // console.log(val,key);
        console.log($(this));
        $(this).text("MyDesc "+ key);
    }) */

    // console.log("Home--",HOMECONTENT);
    
    $("#main h2").text(HOMECONTENT.title);
    $("#main p").remove();
    $("#main h2").after(HOMECONTENT.description);
    
}
function aboutPage(ABOUTCONTENT){
    // console.log("About --",$("#main h2").text());
    // $("#main h2").text("About Page")
    $("#main h2").text(ABOUTCONTENT.title);
    $("#main p").remove();
    $("#main h2").after(ABOUTCONTENT.description);
}
function goPage(GOTCONTENT){
    // console.log("Go --",$("#main h2").text());
    // $("#main h2").text("Go Page")
        $("#main h2").text(GOTCONTENT.title);
        $("#main p").remove();
        $("#main h2").after(GOTCONTENT.description);
}
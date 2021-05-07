$(function(){
    $("input").on("click",function(){
        $("h1").text($("li:first").text());
    });
});

$(function(){
    $("input").on("click",function(){
        $("h1").text($("li:last").text());
    });
});

$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",$("#choices li").eq(randomChildNumber).attr("title"));
    });
});
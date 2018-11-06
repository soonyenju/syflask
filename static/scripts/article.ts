///<reference path="./node_modules/@types/jquery/index.d.ts"/>

$(document).ready(()=>{
    $("#hello").html("Hello, this is the page of article!");
    $("#hello").css("color", "#009966");

    $.ajax({
        url: "https://www.baidu.com"
    })
});
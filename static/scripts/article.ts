///<reference path="./node_modules/@types/jquery/index.d.ts"/>

$(document).ready(()=>{
    $("#hello").html("hello World!");
    $("#hello").css("color", "#009966");

    $.ajax({
        url: "https://www.baidu.com"
    })
});
$(function () {
    var pre=$("#pre");
    var type=$(pre).attr("data-type");
    $(pre).addClass("prettyprint");
    if(type)$(pre).addClass("lang-"+type);
    prettyPrint();
})
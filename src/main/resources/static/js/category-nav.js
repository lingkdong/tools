$(function () {
    $(".left-category").click(function (event) {
        leftCategory(this);
        stopEvent(event)
    })
})

function leftCategory(obj) {
     var categoryCode=$(obj).attr("data-categoryCode");
    if($(obj).hasClass("open")){
        $("#left-nav-ul").find("li[name='"+categoryCode+"_sub']").removeClass("d-block").addClass("d-none");
        $(obj).removeClass("open");
    }else {
        $("#left-nav-ul").find("li[name='"+categoryCode+"_sub']").removeClass("d-none").addClass("d-block");
        $(obj).addClass("open");
    }
}
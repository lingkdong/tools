$(function () {
   $(".pager a").click(function (event) {
       changePage(event);
       stopEvent(event)
   }) 
})

function changePage(event) {
    var number=$(event.delegateTarget).attr("data-number");
    var username=$("#find-user").attr("data-username");
    if(isBlank(number))number="0";
    var url=PRE_FOX_ANON_BASE+"/users/index?number="+number;
    if(isNotBlank(username)){
      url=url+"&username="+username
    }
    jump_page(url);
}
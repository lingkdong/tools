$(function () {
    findUser=$("#find-user");
    var value=$(findUser).val();
    $(findUser).focus().val("").val(value);
   $(".pager a").click(function (event) {
       changePage(event);
       stopEvent(event)
   })

    $(findUser).keyup(function (event) {
        if(event.keyCode==13){
            searchUsers();
        }
        stopEvent(event);
    })

})

function changePage(event) {
    var number=$(event.delegateTarget).attr("data-number");
    var username=$(findUser).attr("data-username");
    if(isBlank(number))number="0";
    var url=PRE_FOX_ANON_BASE+"/users/index?page="+number;
    if(isNotBlank(username)){
      url=url+"&username="+username
    }
    jump_page(url);
}

function searchUsers() {
    var url=PRE_FOX_ANON_BASE+"/users/index?";
    var username=$(findUser).val().trim();
    if(isNotBlank(username)){
        url=url+"&username="+username
    }
    jump_page(url);
}

$(function () {
    username = $("#username");
    password = $("#password");
    msgContainer = $("#js-flash-container");
    login = $("#login");
    // $(login).click(function (event) {
    //     sendLogin();
    //     stopEvent(event)
    // })
})
//detect login
function detect() {
  if((isBlank($(username).val())) || isBlank($(password).val())  ){
      addMsg(msgContainer, FlashType.ERROR, "用户名或密码错误");
      return false;
  }
    return true;
}

// function sendLogin() {
//     if (detect()) {
//         $.ajax({
//             type: "post",
//             url: "/tools/user/sendLogin.json",
//             async: false,
//             dataType: "text",
//             data: {
//                 username: $(username).val(),
//                 password: md5($(password).val())
//             },
//             beforeSend: function () {
//                 $(login).attr(DISABLED, true);
//             },
//             success: function (result) {
//                 result = JSON.parse(result);
//                 if (HttpStatus.OK == result.status) {
//                     // return to
//
//                 } else {
//                     addMsg(msgContainer, FlashType.ERROR, "用户名或密码错误");
//                 }
//             },
//             error: function (result) {
//                 alertServerError();
//             },
//             complete: function () {
//                 $(login).removeAttr(DISABLED);
//             }
//         });
//     } else {
//         addMsg(msgContainer, FlashType.ERROR, "用户名或密码错误");
//     }
// }
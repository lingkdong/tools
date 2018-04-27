$(function () {
    character=$("#character");
    $(character).keyup(function (event) {
        findAscII()
        stopEvent(event)
    });
})

function detectCharacter(obj) {
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (""==value) {
        item_error(obj, "字符不能为空")
        return false;
    }else if(value.length>1){
        item_error(obj, "请输入单个字符")
        return false;
    }
    //success
    item_success(obj);
    return true;
}

function findAscII() {
   if(detectCharacter(character)){
       clearCharacterFocus();
       var value=$(character).val();
       var find=$("th[name='character-"+value+"']");
       if(isExist(find)){
           for (var i = 0, max = find.length; i < max; i++) {
               $(find[i]).addClass("border-green")
           }
       }else {
           item_error(character, "未查询到您输入的字符,请注意中英文切换");
       }
   }
}
function clearCharacterFocus() {
   $("th").removeClass("border-green");
}

$(function () {
    msgContainer = $("#js-flash-container");
    character=$("#character");
    calculate = $("#calculate");
    $(character).keyup(function (event) {
        detectCharacter(this);
    });
    $(calculate).click(function (event) {
        getAscII()
        stopEvent(event)
    })
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

function getAscII() {
   if(detectCharacter(character)){
       $.ajax({
           type: "post",
           url: PRE_FOX_ANON_BASE + "/ascII/get-ascII.json",
           async: true,
           dataType: "json",
           data: {
               character:$(character).val()
           },
           beforeSend: function () {
               $(calculate).attr(DISABLED, DISABLED).attr("获取中...")
           },
           success: function (result) {
               if (backDetectResult(result) == true) {
                   var ascII = result.data;
                   addSuccessMsg(msgContainer,
                       '<p class="fs-2">'+$(character).val()+' =</p>' +
                       '<span class="fw-bold fs-3">' + ascII + '</span>')
               }
           },
           error: function (result) {
               alertServerError();
           },
           complete: function () {
               $(calculate).removeAttr(DISABLED).attr("获取")
           }
       });
   }
}

function backError(item) {
    switch (item.property) {
        case 'character':
            item_error($(character), backErrorTxt("字符", item.status));
            break;
    }
}
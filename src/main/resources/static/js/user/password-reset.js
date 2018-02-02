$(function () {
    email = $("#email");
    msgContainer = $("#js-flash-container");
    reset = $("#reset");
    emailBody=$("#email-body")
    $(reset).click(function (event) {
         sendReset();
         stopEvent(event);
    })
})

function sendReset() {
    if (detectEmail()) {
        $.ajax({
            type: "post",
            url: PRE_FOX_ANON_BASE + "/user/send-password-reset.json",
            async: true,
            dataType: "text",
            data: {
                "email": $(email).val(),
            },
            beforeSend: function () {
                $(reset).attr(DISABLED, true).val("邮件发送中...");
            },
            success: function (result) {
                if (backDetectResult(result)) {
                    addMsg(msgContainer, FlashType.SUCCESS, "邮件发送成功");
                    $(emailBody).html(reset_success_html);
                }
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
                $(reset).removeAttr(DISABLED).val("发送重置邮件");
            }
        });
    }
}

function detectEmail() {
    var obj = email;
    var value = $(obj).val();
    if (isBlank(value)) {
        addMsg(msgContainer, FlashType.ERROR, "邮箱不能为空");
        return false;
    }
    //detect format errored
    if (!isEmail(value)) {
        addMsg(msgContainer, FlashType.ERROR, "邮箱格式错误");
        return false;
    }
    return true;
}

function backDetectResult(result) {
    result = JSON.parse(result);
    if (HttpStatus.OK == result.status) {
        return true;
    } else if (HttpStatus.PARAM_INCORRECT == result.status) {
        var data = result.data;
        if (data instanceof Array) {
            for (var i = 0; i < data.length; i++) {
                backError(data[i]);
            }
        } else {
            backError(data);
        }

    } else if (HttpStatus.INTERNAL_SERVER_ERROR == result.status) {
        alertServerError();
    }
    return false;
}


function backError(item) {
    switch (item.property) {
        case 'email':
            var error = "";
            if (HttpStatus.USER_NOT_EXIST == item.status) {
                error = "账户不存在";
            } else {
                error = backErrorTxt("邮箱", item.status)
            }
            addMsg(msgContainer, FlashType.ERROR, error);
            break;
    }
}
var reset_success_html='<label for="return"> 重置链接已发送至您的邮箱，请检查邮箱。如果几分钟内仍未收到收到重置邮件，请检查您的邮箱垃圾桶。 </label><input' +
    ' class="btn btn-primary btn-block" tabindex="3" id="return" onclick="returnToIndex()" value="返回登录"/>';
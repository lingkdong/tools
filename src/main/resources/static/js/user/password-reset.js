$(function () {
    email = $("#email");
    msgContainer = $("#js-flash-container");
    reset = $("#reset");
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
            async: false,
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
                    time(reset,"发送重置邮件","跳转至登录",5,PRE_FOX_INDEX_HTML);
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
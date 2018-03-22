$(function () {
    passwordBody = $("#password-body");
    password = $("#password");
    change = $("#change");
    msgContainer = $("#js-flash-container");
    confirm= $("#confirm");

    $(change).click(function (event) {
        sendChange();
        stopEvent(event);
    })
})

function detect() {

    if(isBlank($(password).val())) {
        addMsg(msgContainer, FlashType.ERROR, "密码不能为空");
        return false;
    }
    if(!isPassword($(password).val())) {
        addMsg(msgContainer, FlashType.ERROR, "密码格式错误");
        return false;
    }
    if(isBlank($(confirm).val())) {
        addMsg(msgContainer, FlashType.ERROR, "确认密码不能为空");
        return false;
    }
    if($(password).val()!=$(confirm).val()){
        addMsg(msgContainer, FlashType.ERROR, "密码和确认密码不一致");
        return false;
    }
    return true;
}

function sendChange() {
    if(detect()){
        $.ajax({
            type: "post",
            url: PRE_FOX_ANON_BASE + "/user/send-password-change.json",
            async: true,
            dataType: "json",
            data: {
                password:  md5($(password).val()),
                token:$(passwordBody).attr("data-token")
            },
            beforeSend: function () {
                $(change).attr(DISABLED, true).html("更改密码...");
            },
            success: function (result) {
                if (backDetectResult(result)) {
                    addMsg(msgContainer, FlashType.SUCCESS, "密码修改成功，5秒后跳转到登录页");
                    time(passwordBody,"","即将跳转",5,PRE_FOX_LOGIN);
                }
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
                $(change).removeAttr(DISABLED).html("更改密码");
            }
        });
    }
}

function backDetectResult(result) {
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
        case 'token':
            addMsg(msgContainer, FlashType.ERROR, "重置链接无效或已过期");
            break;
        case 'password':
            addMsg(msgContainer, FlashType.ERROR, backErrorTxt("密码",item.status));
            break;
    }
}

function redirectToReset() {
    window.location.href = PRE_FOX_ANON_BASE+"/user/password-reset"
}
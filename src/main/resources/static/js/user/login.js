$(function () {
    username = $("#username");
    password = $("#password");
    msgContainer = $("#js-flash-container");
    login = $("#login");
    $(login).click(function (event) {
        sendLogin();
        stopEvent(event)
    })
})
//detect login
function detect() {
    if ((isBlank($(username).val())) || isBlank($(password).val())) {
        addMsg(msgContainer, FlashType.ERROR, "用户名或密码错误");
        return false;
    }
    return true;
}

function sendLogin() {
    if (detect()) {
        $.ajax({
            type: "post",
            url: PRE_FOX_ANON_BASE+"/user/send-login.json",
            async: true,
            dataType: "text",
            data: {
                username: $(username).val(),
                password: md5($(password).val())
            },
            beforeSend: function () {
                $(login).attr(DISABLED, true);
            },
            success: function (result) {
                 backDetectResult(result);
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
                $(login).removeAttr(DISABLED);
            }
        });
    } else {
        addMsg(msgContainer, FlashType.ERROR, "用户名或密码错误");
    }

}

function backDetectResult(result) {
    result = JSON.parse(result);
    if (HttpStatus.OK == result.status) {
        var url =PRE_FOX_INDEX;
        if (!isBlank(result.data)) {
            url = result.data;
        }
        try {
            window.location.href=url;
        }catch (error){
            returnToIndex();
        }

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
        case 'username':
            if (HttpStatus.IS_DISABLED == item.status) {
                addMsg(msgContainer, FlashType.ERROR, "账户已停用");
            } else {
                addMsg(msgContainer, FlashType.ERROR, "用户名或密码错误");
            }
            break;
        case 'password':
            addMsg(msgContainer, FlashType.ERROR, "用户名或密码错误");
            break;
        case 'validCode':
            addMsg(msgContainer, FlashType.ERROR, "验证码错误");
            break;

    }
}
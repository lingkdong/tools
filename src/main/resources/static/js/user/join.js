$(function () {
    username = $("#user_name");
    password = $("#user_password");
    email = $("#user_email");
    validCode = $("#user_valid");
    send = $("#valid_button");
    $(username).keyup(function () {
        detectUserName();
    });
    $(password).keyup(function () {
        detectPassword();
    });
    $(email).keyup(function () {
        detectEmail();
    });
    $(validCode).keyup(function (event) {
        detectValidCode();
        stopEvent(event);
    });
    $("#signup_button").click(function (event) {
        signUp();
        stopEvent(event);
    })

    $(send).click(function (event) {
        $(send).attr("disabled", true).html("发送中...");
        if (detectUserName() && detectPassword() && detectEmail()) {
            sendValid();
        } else {
            $(send).removeAttr("disabled").html("获取验证码");
        }
        stopEvent(event);
    })
})
var JOIN_BASE_URL = PRE_FOX_ANON_BASE+"/user/";

function detectUserName() {
    var obj = username;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "用户名不能为空")
        return false;
    }
    //detect format errored
    if (!isUserName(value)) {
        item_error(obj, "用户名只支持数字、字母、下划线，或其组合");
        return false;
    }
    //exist
    if (nameUnique()) {
        //success
        item_success(obj);
    }
    return true;
}

function detectPassword() {
    var obj = password;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "密码不能为空")
        return false;
    }
    //detect format errored
    if (!isPassword(value)) {
        item_error(obj, "密码必须包含数字、字母、特殊符号且大于等于8位");
        return false;
    }
    //success
    item_success(obj);
    return true;
}
function detectEmail() {
    var obj = email;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "邮箱不能为空")
        return false;
    }
    //detect format errored
    if (!isEmail(value)) {
        item_error(obj, "邮箱格式错误");
        return false;
    }
    //exist
    if (emailUnique()) {
        //success
        item_success(obj);
    }
    return true;
}
function detectValidCode() {
    var obj = validCode;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "验证码不能为空")
        return false;
    }
    //detect format errored
    if (!isValidCode(value)) {
        item_error(obj, "验证码错误");
        return false;
    }
    //success
    item_success(obj);
    return true;
}

function signUp() {
    if (detectUserName() && detectPassword() && detectEmail() && detectValidCode()) {
        // ajax submit
        $.ajax({
            type: "post",
            url: "create.json",
            async: true,
            dataType: "json",
            data: {
                "username": $(username).val(),
                "password": md5($(password).val()),
                "email": $(email).val(),
                "validCode": $(validCode).val()
            },
            success: function (result) {
                if (backDetectResult(result));
                {
                    window.location.href = PRE_FOX_AUTHC_BASE+"/user/complete";
                }
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
            }
        });
    }
}

function nameUnique() {
    var flag = false;
    $.ajax({
        type: "post",
        url: JOIN_BASE_URL + "name-unique.json",
        async: false,
        dataType: "text",
        data: {
            "username": $(username).val()
        },
        success: function (result) {
            flag = backDetectResult(result);
        },
        error: function (result) {
            alertServerError();
        },
        complete: function () {
        }
    });
    return flag;
}
function emailUnique() {
    var flag = false;
    $.ajax({
        type: "post",
        url: JOIN_BASE_URL + "email-unique.json",
        async: false,
        dataType: "text",
        data: {
            "email": $(email).val()
        },
        success: function (result) {
            flag = backDetectResult(result);
        },
        error: function (result) {
            alertServerError();
        },
        complete: function () {
        }
    });
    return flag;
}
// back program detect result
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
        case 'username':
            item_error($(username), backErrorTxt("用户名", item.status));
            break;
        case 'password':
            item_error($(password), backErrorTxt("密码", item.status));
            break;
        case 'email':
            item_error($(email), backErrorTxt("邮箱", item.status));
            break;
        case 'validCode':
            item_error($(validCode), backErrorTxt("验证码", item.status));
            break;
    }
}

function sendValid() {
    $.ajax({
        type: "post",
        url: JOIN_BASE_URL + "send-valid.json",
        async: true,
        dataType: "text",
        data: {
            "username": $(username).val(),
            "password": md5($(password).val()),
            "email": $(email).val()
        },
        beforeSend: function () {
        },
        success: function (result) {
            if (backDetectResult(result)) {
                alertSuccess("验证码以发送至您的邮箱，若未发现邮件，请检查您的垃圾箱");
                try {
                    time(send,"获取验证码","重新发送",60)
                } catch (error) {
                    console.log(error)
                }

            }
        },
        error: function (result) {
            alertServerError();
        },
        complete: function () {
            $(send).removeClass(itemStatus.LOADING);
            $(send).removeAttr(DISABLED).html("获取验证码");
        }
    });
}
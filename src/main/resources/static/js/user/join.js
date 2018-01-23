$(function () {
    username = $("#user_name");
    password = $("#user_password");
    email = $("#user_email");
    validCode = $("#user_valid");
    send = $("#valid_button");
    $(username).change(function () {
        detectUserName(true);
    });
    $(password).change(function () {
        detectPassword(true);
    });
    $(email).change(function () {
        detectEmail(true);
    });
    $(validCode).click(function (event) {
        detectValidCode(true);
        stopEvent(event);
    });
    $("#signup_button").click(function (event) {
        signUp();
        stopEvent(event);
    })

    $(send).click(function (event) {
        $(send).attr("disabled",true).html("发送中...");
        if (detectUserName(false) && detectPassword(false) && detectEmail(false)) {
            sendValid();
        }else {
            $(send).removeAttr("disabled").html("获取验证码");
        }
        stopEvent(event);
    })
})
var JOIN_BASE_URL="/tools/anon/user/";
var itemStatus = {
    "loading": "is-autocheck-loading-16",
    "success": "is-autocheck-successful",
    "errored": "is-autocheck-errored"
};
//loading
function item_loading(obj) {
    clearItemStatus();
    $(obj).addClass(itemStatus["loading"]);
}

//success
function item_success(obj) {
    clearItemStatus(obj);
    $(obj).addClass(itemStatus["success"]);
}
function item_error(obj, txt) {
    clearItemStatus(obj);
    //lable
    var group = getItemGroup(obj);
    if (isExist(group)) {
        $(group).addClass("errored")
    }
    //logo
    $(obj).addClass(itemStatus["errored"]);
    addItemInfo(group, txt);
    $(obj).parent().children(".note").hide();
}
//clear status class
function clearItemStatus(obj) {
    var group = getItemGroup(obj);
    //lable
    if (isExist(group)) {
        $(group).removeClass("errored");
    }
    //logo
    for (var key in itemStatus) {
        $(obj).removeClass(itemStatus[key]);
    }

    // error info
    var info = getItemInfo(group);
    if (isExist(info)) {
        $(info).remove();
    }
    $(obj).parent().children(".note").show();
}

function getItemGroup(obj) {
    return $($(obj).parent()).parent(".form-group");
}

function getItemInfo(group) {
    return $(group).children(".error")
}

function addItemInfo(group, txt) {
    var info = getItemInfo(group);
    if (isExist(info)) {
        $(info).html(txt);
    } else {
        var dd = '<dd class="error">' + txt + '</dd>';
        $(group).append($(dd));
    }
}


function detectUserName(isChange) {
    var obj = username;
    var value = $(obj).val();
    if (isBlank(value)) {
        if (!isChange) {
            item_error(obj, "用户名不能为空")
        }
        return false;
    }
    //loading
    item_loading(obj);
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

function detectPassword(isChange) {
    var obj = password;
    var value = $(obj).val();
    if (isBlank(value)) {
        if (!isChange) {
            item_error(obj, "密码不能为空")
        }
        return false;
    }
    //loading
    item_loading(obj);
    //detect format errored
    if (!isPassword(value)) {
        item_error(obj, "密码必须包含数字、字母、特殊符号且大于等于8位");
        return false;
    }
    //success
    item_success(obj);
    return true;
}
function detectEmail(isChange) {
    var obj = email;
    var value = $(obj).val();
    if (isBlank(value)) {
        if (!isChange) {
            item_error(obj, "邮箱不能为空")
        }
        return false;
    }
    //loading
    item_loading(obj);
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
function detectValidCode(isChange) {
    var obj = validCode;
    var value = $(obj).val();
    if (isBlank(value)) {
        if (!isChange) {
            item_error(obj, "验证码不能为空")
        }
        return false;
    }
    //loading
    item_loading(obj);
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
    if (detectUserName(false) && detectPassword(false) && detectEmail(false) && detectValidCode(false)) {
        // ajax submit
        $.ajax({
            type: "post",
            url: "create.json",
            async: false,
            dataType: "text",
            data: {
                username: $(username).val(),
                password: md5($(password).val()),
                email: $(email).val(),
                validCode: $(validCode).val()
            },
            success: function (result) {
                backDetectResult(result);
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
        url: JOIN_BASE_URL+"name-unique.json",
        async: false,
        dataType: "text",
        data: {
            username: $(username).val()
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
        url: JOIN_BASE_URL+"email-unique.json",
        async: false,
        dataType: "text",
        data: {
            email: $(email).val()
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

function backErrorTxt(property, status) {
    switch (status) {
        case HttpStatus.IS_BLANK:
            return property + "不能为空";
        case HttpStatus.INVALID_FORMAT:
            return property + "格式错误";
        case HttpStatus.ALREADY_EXIT:
            return property + "已存在";
        case HttpStatus.IS_EXPIRED:
            return property + "失效或已过期";
        case HttpStatus.PARAM_INCORRECT:
            return property + "错误";

    }
}

function sendValid() {
    $.ajax({
        type: "post",
        url: JOIN_BASE_URL+"sendValid.json",
        async: false,
        dataType: "text",
        data: {
            username: $(username).val(),
            password: md5($(password).val()),
            email: $(email).val()
        },
        beforeSend:function () {
        },
        success: function (result) {
            if (backDetectResult(result)) {
                alertSuccess("验证码以发送至您的邮箱");
                try{
                    time(send)
                } catch (error){
                   console.log(error)
                }

            }
        },
        error: function (result) {
            alertServerError();
        },
        complete: function () {
            $(send).removeClass(itemStatus.loading);
        }
    });
}
function _copy(obj) {
    obj.select(); // 选择对象
    document.execCommand("Copy");
}
function _clear0(obj) {
    $(obj).val("");
}

function isBlank(value) {
    return (value == null || value == undefined || value.trim() == '');
}

function isNotBlank(value) {
    return !(value == null || value == undefined || value == '');
}

function isExist(obj) {
    return !(obj == undefined || obj == null || obj.length == 0);
}

var HttpStatus = {
    OK: 2000,
    IS_BLANK: 4008,
    INVALID_FORMAT: 4009,
    ALREADY_EXIT: 4010,
    PARAM_INCORRECT: 4007,
    IS_EXPIRED: 4011,
    IS_DISABLED:4012,
    LOGIN_EXPIRED:4013,
    INTERNAL_SERVER_ERROR: 5003
}
var FlashType = {
    SUCCESS: "success",
    WARN: "warn",
    ERROR: "error"
}
var DISABLED = "disabled";
//reg
var usename_reg = /^[a-zA-Z0-9_]+$/;
var password_reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,}$/;
var email_reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var validcode_reg = /^[a-zA-Z0-9]+$/;
var year_reg=/^[0-9]{4}$/;
var month_reg=/^(0?[1-9]|1[0-2])$/;
var day_reg=/^((0?[1-9])|((1|2)[0-9])|30|31)$/;
var phone_reg=/^0?(13[0-9]|14[56789]|15[012356789]|166|17[012345678]|18[0-9]|19[89])[0-9]{8}$/;
function isUserName(value) {
    return usename_reg.test(value);
}
function isPassword(value) {
    return password_reg.test(value);
}
function isEmail(value) {
    return email_reg.test(value);
}
function isValidCode(value) {
    return validcode_reg.test(value);
}
function isYear(value){
    return year_reg.test(value);
}
function isMonth(value) {
    return month_reg.test(value);
}
function isDay(value) {
    return day_reg.test(value);
}
function isPhone(value) {
    return phone_reg.test(value);
}
//new modify
function isDate() {
   try {
       new Date(arguments);
       return true;
   }catch (error){
       return false;
   }
}
var wait_time = 60;
function time(obj) {
    if (wait_time == 0) {
        $(obj).removeAttr("disabled");
        $(obj).html("获取验证码");
        wait_time = 60;
    } else {
        $(obj).attr("disabled", true);
        $(obj).html("重新发送(" + wait_time + ")");
        wait_time--;
        setTimeout(function () {
                time(obj)
            },
            1000)
    }
}

function stopEvent(e) {
    window.event? window.event.cancelBubble = true : e.stopPropagation();
    window.event? window.event.returnValue = false : e.preventDefault();
}

function alertMsg(type, msg) {
    if (isBlank(msg)) {
        return false;
    }
    parent = $("#body");
    pop = $("#pop-msg");
    if (isExist(pop)) {
        $(pop).remove();
    }
    if ((!isBlank(type)) && isExist(parent)) {
        var html = '<div id="pop-msg" class="w-250 flash b-radius-5 flash-' + type + '" style="position: fixed; right: 2%; bottom: 2%;"><button class="pd-18 flash-close js-flash-close"' +
            ' type="button"' +
            ' onclick="closeParent(this)"><svg aria-hidden="true" class="octicon octicon-x" height="16"' +
            ' version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48' +
            ' 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48' +
            ' 1.48z"></path></svg></button><span class="flash-info">' + msg + '</span></div>';
        $(parent).append(html);
        setTimeout(function () {
            $("#pop-msg").fadeOut(3000)
        }, 3000);
    } else {
        alert(msg)
    }

}

function alertServerError() {
    alertMsg(FlashType.ERROR, "服务器错误，请稍后再试");
}

function alertSuccess(msg) {
    alertMsg(FlashType.SUCCESS, msg);
}
function alertError(msg) {
    alertMsg(FlashType.ERROR, msg);
}

function alertWarn(msg) {
    alertMsg(FlashType.WARN, msg);
}

function closeParent(obj) {
    $(obj).parent().remove();
}

// add in parent
function addMsg(parent, type, msg) {
    if (!isBlank(msg)) {
        if ((!isExist(parent)) || isBlank(type)) {
            alert(msg);
        } else {
            var info = $(parent).find(".flash-add-info");
            if (isExist(info)) {
                $(info).html(msg);

            } else {
                var html = '<div class="flash flash-full flash-'+type+'"><button class="flash-close js-flash-close" onclick="closeParent(this)" type="button" aria-label="Dismiss this message"><svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg></button> ' +
                    '<span class="flash-add-info">'+msg+'</span></div>';
                $(parent).append(html);
            }
        }
    }
}
/*...........form item detect.........*/
var itemStatus = {
    LOADING: "is-autocheck-loading-16",
    SUCCESS: "is-autocheck-successful",
    ERRORED: "is-autocheck-errored"
};

//loading
function item_loading(obj) {
    clearItemStatus();
    $(obj).addClass(itemStatus.LOADING);
}

function select_item_loading(obj) {
    clearItemStatus();
}

//success
function item_success(obj) {
    clearItemStatus(obj);
    $(obj).addClass(itemStatus.SUCCESS);
}
//success
function select_item_success(obj) {
    clearItemStatus(obj);
}

function item_error(obj, txt) {
    clearItemStatus(obj);
    //lable
    var group = getItemGroup(obj);
    if (isExist(group)) {
        $(group).addClass("errored")
    }
    //logo
    $(obj).addClass(itemStatus.ERRORED);
    addItemInfo(obj, txt);
    $(obj).parent().children(".note").hide();
}
function select_item_error(obj, txt) {
    clearItemStatus(obj);
    //lable
    var group = getItemGroup(obj);
    if (isExist(group)) {
        $(group).addClass("errored")
    }
    $(obj).addClass(itemStatus.ERRORED);
    addItemInfo(obj, txt);
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

function addItemInfo(obj, txt) {
    group=getItemGroup(obj)
    var info = getItemInfo(group);
    if (isExist(info)) {
        $(info).html(txt);
    } else {
         info = '<dd class="error">' + txt + '</dd>';
        $(info).css("color","red");
        $(group).append($(info));
    }
}
function addItemInfo_position(obj, txt) {
    group=getItemGroup(obj)
    var info = getItemInfo(group);
    if (isExist(info)) {
        $(info).remove();
    } else {
        info = '<dd class="error" style="margin-left: '+obj.position().left+'px">' + txt + '</dd>';
        $(info).css("color","red");
        $(group).append($(info));
    }
}

function item_error_position(obj, txt) {
    clearItemStatus(obj);
    //lable
    var group = getItemGroup(obj);
    if (isExist(group)) {
        $(group).addClass("errored")
    }
    //logo
    $(obj).addClass(itemStatus.ERRORED);
    addItemInfo_position(obj, txt);
    $(obj).parent().children(".note").hide();
}
/*...........form item detect.........*/

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
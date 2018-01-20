function _copy(obj) {
    obj.select(); // 选择对象
    document.execCommand("Copy");
}
function _clear0(obj) {
    $(obj).val("");
}

function isBlank(value) {
    return (value == null || value == undefined || value == '');
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
    INTERNAL_SERVER_ERROR: 5003
}
var FlashType = {
    success: "success",
    WARN: "warn",
    ERROR: "error"
}
//reg
var usename_reg = /^[a-zA-Z0-9_]+$/;
var password_reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,}$/;
var email_reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var validcode_reg = /^[a-zA-Z0-9]+$/;

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

function stopEvent(event) {
    event.stopPropagation();
    event.preventDefault();
}

function flash(type, msg) {
    if(isBlank(msg)){
        return false;
    }
    parent=$("#body");
    pop=$("#pop-msg");
    if(isExist(pop)){
        $(pop).remove();
    }
    if ((!isBlank(type))&&isExist(parent)) {
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

function flashAjaxError() {
    flash(FlashType.ERROR, "服务器错误，请稍后再试");
}

function closeParent(obj) {
    $(obj).parent().remove();
}
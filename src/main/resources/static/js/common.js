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
    return !(obj == undefined || obj == null||obj.length==0);
}

var HttpStatus = {
    OK: 2000,
    IS_BLANK: 4008,
    INVALID_FORMAT: 4009,
    ALREADY_EXIT: 4010,
    PARAM_INCORRECT: 4007,
    IS_EXPIRED: 4011,
    INTERNAL_SERVER_ERROR:5003
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

var wait_time=60;
function time(obj) {
    if (wait_time == 0) {
        $(obj).removeAttr("disabled");
        $(obj).html("获取验证码");
        wait_time = 60;
    } else {
        $(obj).attr("disabled", true);
        $(obj).html("重新发送(" + wait_time + ")");
        wait_time--;
        setTimeout(function() {
                time()
            },
            1000)
    }
}

function stopEvent(event) {
    event.stopPropagation();
    event.preventDefault();
}
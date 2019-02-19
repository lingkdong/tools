$(function () {
    if (window.sidebar) {
        $(".bookmarks").attr("href", window.location)
            .attr("title", document.title);
    }
    nginxUrl = $("#nginxUrl").val();
})

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

function strCut(value, size) {
    if (isNotBlank(value) && value.length > size) {
        return value.substring(0, size)
    }
    return value;
}

var HttpStatus = {
    OK: 2000,
    IS_BLANK: 4008,
    INVALID_FORMAT: 4009,
    ALREADY_EXIT: 4010,
    PARAM_INCORRECT: 4007,
    IS_EXPIRED: 4011,
    IS_DISABLED: 4012,
    LOGIN_EXPIRED: 4013,
    INTERNAL_SERVER_ERROR: 5003,
    NOT_EXIST: 4014,
    USER_NOT_EXIST: 4002,
    FILE_EMPTY: 4015,
    FILE_UPLOAD_ERROR: 4016,
    FILE_CONVERT_ERROR: 4017,
    NOT_ASCII: 4018
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
var year_reg = /^[0-9]{4}$/;
var month_reg = /^(0?[1-9]|1[0-2])$/;
var day_reg = /^((0?[1-9])|((1|2)[0-9])|30|31)$/;
var phone_reg = /^0?(13[0-9]|14[56789]|15[012356789]|166|17[012345678]|18[0-9]|19[89])[0-9]{8}$/;
var positive_reg = /^[0-9]*[1-9][0-9]*$/;

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

function isYear(value) {
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

function isPositive(value) {
    return positive_reg.test(value);
}

//new modify
function isDate() {
    try {
        new Date(arguments);
        return true;
    } catch (error) {
        return false;
    }
}

var wait_time = 60;

function time(obj, normalInfo, waitInfo, waitTime, url) {
    if (wait_time > waitTime) {
        wait_time = waitTime;
    }
    if (wait_time == 0) {
        if (isNotBlank(url)) {
            window.location.href = url;
        }
        $(obj).removeAttr("disabled");
        $(obj).html(normalInfo);
        wait_time = 60;
    } else {
        $(obj).attr("disabled", true);
        $(obj).html(waitInfo + "(" + wait_time + ")");
        wait_time--;
        setTimeout(function () {
                time(obj, normalInfo, waitInfo, waitTime, url)
            },
            1000)
    }
}

function stopEvent(e) {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
    window.event ? window.event.returnValue = false : e.preventDefault();
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
        var html = '<div id="pop-msg" class="w-250 m-h-100 flash b-radius-5 flash-' + type + '" style="position: fixed;' +
            ' right: 2%; bottom: 2%;"><button class="pd-18 flash-close js-flash-close outline-none"' +
            ' type="button"' +
            ' onclick="closeParent(this)"><svg aria-hidden="true" class="octicon octicon-x" height="16"' +
            ' version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48' +
            ' 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48' +
            ' 1.48z"></path></svg></button><div class="flash-info mr-3">' + msg + '</div></div>';
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
            var html = '<div class="flash flash-full flash-' + type + '" style="border-radius: 5px"><button class="flash-close' +
                ' js-flash-close outline-none" onclick="closeParent(this)" type="button" aria-label="Dismiss this message"><svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg></button> ' +
                '<div class="flash-add-info mr-3">' + msg + '</div></div>';
            $(parent).html(html)
        }
    }
}

function addErrorMsg(obj, msg) {
    addMsg(obj, FlashType.ERROR, msg);
}

function addSuccessMsg(obj, msg) {
    addMsg(obj, FlashType.SUCCESS, msg);
}

function addWarnMsg(obj, msg) {
    addMsg(obj, FlashType.WARN, msg);
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
    group = getItemGroup(obj)
    var info = getItemInfo(group);
    if (isExist(info)) {
        $(info).html(txt);
    } else {
        info = '<dd class="error">' + txt + '</dd>';
        $(info).css("color", "red");
        $(group).append($(info));
    }
}

function addItemInfo_position(obj, txt) {
    group = getItemGroup(obj)
    var info = getItemInfo(group);
    if (isExist(info)) {
        $(info).remove();
    } else {
        info = '<dd class="error" style="margin-left: ' + $(obj).position().left + 'px">' + txt + '</dd>';
        $(info).css("color", "red");
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
        case HttpStatus.NOT_EXIST:
            return property + "不存在";
        case HttpStatus.NOT_ASCII:
            return property + "非ascII";

    }
}

var PRE_FOX_AUTHC_BASE = "/tools/authc";
var PRE_FOX_ANON_BASE = "/tools/anon";
var PRE_FOX_INDEX = PRE_FOX_ANON_BASE + "/index";
var PRE_FOX_LOGIN = PRE_FOX_ANON_BASE + "/user/login";

function jump_index() {
    window.location.href = PRE_FOX_INDEX;
}

function jump_page(url) {
    window.location.href = url;
}

function open_blank(url) {
    window.open(url, "_blank");
}

function makePreZero(obj, len) {
    var value = $(obj).val() + "";
    len = len - value.length;
    var zero = ""
    for (i = 0; i < len; i++) {
        zero = zero + "0";
    }
    return zero + value;
}

function isIE() {
    return (!+[1,])
}

function isInArray(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
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

function bookmark(url, title) {
    try {
        if (!url) {
            url = window.location
        }
        if (!title) {
            title = document.title
        }
        var browser = navigator.userAgent.toLowerCase();
        if (window.sidebar) { // Mozilla, Firefox, Netscape
//            window.sidebar.addPanel(title, url, "");
        } else if (window.external) { // IE or chrome
            if (browser.indexOf('chrome') == -1) { // ie
                window.external.AddFavorite(url, title);
            } else { // chrome
                //Please Press CTRL+D (or Command+D for macs) to bookmark this page
                alertError('请按CTRL+D(Mac按Command+D) 来添加标签');
            }
        } else if (window.opera && window.print) { // Opera - automatically adds to sidebar if rel=sidebar in the tag
            return true;
        } else if (browser.indexOf('konqueror') != -1) { // Konqueror
            //Please press CTRL+B to bookmark this page.
            alertError('请按CTRL+B来添加标签');
        } else if (browser.indexOf('webkit') != -1) { // safari
            //Please press CTRL+B (or Command+D for macs) to bookmark this page
            alertError('请按CTRL+B(按Command+D) 来添加标签');
        } else {
            alertError('您的浏览器不支持该操作.');
        }
    } catch (error) {
        alertError('请按CTRL+D(Mac按Command+D) 来添加标签');
    }
}

$(function () {
    $('body').on("click", ".bookmarks", function () {
        var url = $(this).attr("data-url");
        var name = $(this).attr("data-name");
        if (isNotBlank(url)) {
            url = window.location.host + url;
        }
        bookmark(url, name);
    })
})
var type_array = new Array("jpg", "jpeg", "png", "gif");

function isLargeSize(fileSize) {
    var size = fileSize / 1024;
    if (size > 2000) {
        addErrorMsg(msgContainer, "图片不能大于2M");
        return true
    }
    return false;
}

function scroll2Footer(time) {
    $('html,body').animate({
            scrollTop: $('.footer').offset().top
        }
        , time);
}

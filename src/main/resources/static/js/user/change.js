$(function () {
    msgContainer = $("#js-flash-container");
    avatarForm=$("#avatar-form");
    file = $("#upload-profile-picture");
    img = $("#avatar-img");
    trueName = $("#true_name");
    birthYear = $("#birth-year");
    birthMonth = $("#birth-month");
    birthday = $("#birth-day");
    male = $("#male");
    skillTag = $("#skillTag");
    phone = $("#phone");
    userLocal = $("#location");
    complete = $("#complete");
    $(trueName).keyup(function () {
        detectTrueName();
    });
    $(birthYear).keyup(function () {
        detectBirthYear();
    });
    $(birthMonth).change(function () {
        detectBirthMonth();
    });
    $(birthday).keyup(function () {
        detectBirthDay();
    });
    $(male).keyup(function () {
        detectMale();
    });
    $(skillTag).keyup(function () {
        detectSkillTag();
    });
    $(phone).keyup(function () {
        detectPhone();
    });
    $(complete).click(function (event) {
        sendChange();
        stopEvent(event);
    })
    $(file).change(function (event) {
        var flag = fileDetect(this)
        $(file).attr("valid", flag)
        stopEvent(event);
    });
});
var type_array = new Array("jpg", "jpeg", "png", "gif");
function getPath(obj, fileQuery, transImg) {
    var value = fileQuery.value;
    if (isBlank(value)) {
        return true;
    }
    var fileType = value.substring(value.lastIndexOf(".") + 1).toLowerCase();
    if (!isInArray(type_array, fileType)) {
        addErrorMsg(msgContainer, "只支持" + type_array.toString().toLocaleUpperCase() + "类型图片")
        return false;
    }
    if (isIE && !fileQuery.files) {  // IE浏览器判断
        var filePath = obj.value;
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        var file = fileSystem.GetFile(filePath);
        if (isLargeSize(file.Size)) {
            return false;
        }
        if (obj.select) {
            obj.select();
            var path = document.selection.createRange().text;
            obj.removeAttribute("src");
            obj.setAttribute("src", transImg);
            obj.style.filter =
                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + path + "', sizingMethod='scale');";  // IE通过滤镜的方式实现图片显示
        } else {
            obj.src = value;
        }

    } else {
        var file = fileQuery.files[0];
        if (isLargeSize(file.size)) {
            return false;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            obj.setAttribute("src", e.target.result);
        }
        reader.readAsDataURL(file);
    }
    msgContainer.html("");
    return true;
}

function fileDetect(obj) {
    var file_img = document.getElementById("avatar-img");
    return getPath(file_img, obj, file_img);
}

function isLargeSize(fileSize) {
    var size = fileSize / 1024;
    if (size > 1000) {
        addErrorMsg(msgContainer, "图片不能大于1M");
        return true
    }
    return false;
}
function detectTrueName() {
    var obj = trueName;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "真实姓名不能为空")
        return false;
    }
    item_success(obj);
    return true;
}

function detectBirthYear() {
    var obj = birthYear;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "年份不能为空")
        return false;
    }
    //detect format errored
    if (!isYear(value)) {
        item_error(obj, "年份格式错误");
        return false;
    }
    //success
    item_success(obj);
    return true;
}
function detectBirthMonth() {
    var obj = birthMonth;
    //loading
    select_item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error_position(obj, "月份不能为空")
        return false;
    }
    //detect format errored
    if (!isMonth(value)) {
        item_error_position(obj, "月份格式错误");
        return false;
    }
    //success
    select_item_success(obj);
    return true;
}
function detectBirthDay() {
    var obj = birthday;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error_position(obj, "日期不能为空")
        return false;
    }
    //detect format errored
    if (!(isDay(value) && isDate($(birthYear).val(), $(birthMonth).val(), $(birthday).val()))) {
        item_error_position(obj, "日期格式错误");
        return false;
    }
    //success
    item_success(obj);
    return true;
}

function detectMale() {
    var obj = male;
    //loading
    select_item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "性别不能为空")
        return false;
    }
    //detect format errored
    if (!(value == 1 || value == 0)) {
        item_error(obj, "性别格式错误");
        return false;
    }
    //success
    select_item_success(obj);
    return true;
}
var BASE_CHANGE_URL = PRE_FOX_AUTHC_BASE + "/user/";
function detectSkillTag() {
    var obj = skillTag;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "技能标签不能为空")
        return false;
    }
    //success
    item_success(obj);
    return true;
}
// not  necessary
function detectPhone() {
    var obj = phone;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    //detect format errored
    //phone can blank
    if (!isBlank(value)) {
        if (!isPhone(value)) {
            item_error(obj, "手机格式错误");
            return false;
        }
        item_success(obj);
    } else {
        clearItemStatus(obj)
    }
    return true;
}

function sendChange() {
    var flag=$(file).attr("valid");
    if (flag=="true") {
        $(avatarForm).attr("action",BASE_CHANGE_URL + "/avatar.json");
        $(avatarForm).ajaxSubmit({
            dataType: "json",
            beforeSend: function () {
                $(complete).attr(DISABLED, true).html("保存...");
            },
            success: function (result) {
                if(backDetectResult(result)){
                    $(file).attr("data-value",result.data);
                   sendProfile();
                }else {
                    var item=result.data;
                    switch (item.status) {
                        case HttpStatus.INVALID_FORMAT:
                            addErrorMsg(msgContainer,"只支持" + type_array.toString().toLocaleUpperCase() + "类型图片")
                        case HttpStatus.FILE_UPLOAD_ERROR:
                         alertError("保存失败，请稍后再试")
                    }
                }
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
                $(complete).removeAttr(DISABLED).html("保存修改");
            }
        });
    }else {
        sendProfile();
    }

}
function sendProfile() {
    if (detectTrueName() && detectBirthYear() && detectBirthMonth() && detectBirthDay() && detectMale() && detectSkillTag() && detectPhone()) {
        $.ajax({
            type: "post",
            url: BASE_CHANGE_URL + "/send-change.json",
            async: true,
            dataType: "json",
            beforeSend: function () {
                $(complete).attr(DISABLED, true).html("保存...");
            },
            data: {
                picture:$(file).attr("data-value"),
                trueName: $(trueName).val().trim(),
                birthday: makePreZero(birthMonth, 2) + "/" + makePreZero(birthday, 2) + "/" + $(birthYear).val(),
                male: $(male).val(),
                skillTag: $(skillTag).val(),
                location: $(userLocal).val()
            },
            success: function (result) {
              if(backDetectResult(result)){
                  alertSuccess("个人资料，保存成功")
              }
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
                $(complete).removeAttr(DISABLED).html("保存修改");
            }
        });
    }
}
// back program detect result
function backDetectResult(result) {
    if (HttpStatus.OK == result.status) {
        return true;
    } else if (HttpStatus.LOGIN_EXPIRED == result.status) {
        alertError("登录过期，请重新登录")
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
        case 'trueName':
            item_error($(trueName), backErrorTxt("真实姓名", item.status));
            break;
        case 'birthday':
            item_error($(birthday), backErrorTxt("生日", item.status));
            break;
        case 'male':
            item_error($(male), backErrorTxt("性别", item.status));
            break;
        case 'skillTag':
            item_error($(skillTag), backErrorTxt("技能标签", item.status));
            break;
        case 'phone':
            item_error($(phone), backErrorTxt("手机", item.status));
            break;
    }
}


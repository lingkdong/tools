$(function () {
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
        sendComplete();
        stopEvent(event);
    })

});

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
var BASE_COMPLETE_URL=PRE_FOX_AUTHC_BASE+"/user/";
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
    if(!isBlank(value)){
        if (!isPhone(value)) {
            item_error(obj, "手机格式错误");
            return false;
        }
        item_success(obj);
    }else {
        clearItemStatus(obj)
    }
    return true;
}
function sendComplete() {
    $(complete).attr("disabled", true).html("保存...");
    if (detectTrueName() && detectBirthYear() && detectBirthMonth() && detectBirthDay() && detectMale() && detectSkillTag() && detectPhone()) {
        var _month = $(birthMonth).val() + "";
        var _day = $(birthday).val() + "";
        if (_month.length == 1) _month = "0" + _month;
        if (_day.length == 1) _month = "0" + _day;
        $.ajax({
            type: "post",
            url: BASE_COMPLETE_URL+"send-complete.json",
            async: true,
            dataType: "text",
            data: {
                trueName: $(trueName).val().trim(),
                birthday: _month+"/" + _day+"/"+$(birthYear).val(),
                male: $(male).val(),
                skillTag: $(skillTag).val(),
                location: $(userLocal).val()
            },
            success: function (result) {
                if (backDetectResult(result)==true)
                {
                    returnToIndex();
                }
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
            }
        });
    }
    $(complete).removeAttr("disabled").html("保存资料");
}
// back program detect result
function backDetectResult(result) {
    result = JSON.parse(result);
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
            item_error($(password), backErrorTxt("生日", item.status));
            break;
        case 'male':
            item_error($(email), backErrorTxt("性别", item.status));
            break;
        case 'skillTag':
            item_error($(skillTag), backErrorTxt("技能标签", item.status));
            break;
        case 'phone':
            item_error($(phone), backErrorTxt("手机", item.status));
            break;
    }
}



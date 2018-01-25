$(function () {
    trueName = $("#true_name");
    birthYear = $("#birth-year");
    birthMonth = $("#birth-month");
    birthday = $("#birth-day");
    male = $("#male");
    skillTag = $("#skillTag");
    phone = $("#phone");
    location1 = $("#location");
    complete=$("#complete");
    $(trueName).keyup(function () {
        detectTrueName();
    });
    $(birthYear).keyup(function () {
        detectBirthYear();
    });
    $(birthMonth).keyup(function () {
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
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "月份不能为空")
        return false;
    }
    //detect format errored
    if (!isMonth(value)) {
        item_error(obj, "月份格式错误");
        return false;
    }
    //success
    item_success(obj);
    return true;
}
function detectBirthDay() {
    var obj = birthday;
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error(obj, "日期不能为空")
        return false;
    }
    //detect format errored
    if (!(isDay(value) || isDate($(birthYear).val(), $(birthMonth).val(), $(birthday).val()))) {
        item_error(obj, "日期格式错误");
        return false;
    }
    //success
    item_success(obj);
    return true;
}

function detectMale() {
    var obj = male;
    //loading
    item_loading(obj);
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
    item_success(obj);
    return true;
}

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
    if (!isPhone(value)) {
        item_error(obj, "手机格式错误");
        return false;
    }
    if (!isBlank(value)) {
        //success
        item_success(obj);
    } else {
        clearItemStatus(obj)
    }
    return true;
}
function sendComplete() {
    $(complete).attr("disabled", true).html("保存...");
    if(detectTrueName()&&detectBirthYear()&&detectBirthMonth()&&detectBirthDay()&&detectMale()&&detectSkillTag()&&detectPhone()){

    }

    $(complete).removeAttr("disabled").html("保存资料");
}
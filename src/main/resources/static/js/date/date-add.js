$(function () {
    msgContainer = $("#js-flash-container");
    startYear = $("#start-year");
    startMonth = $("#start-month");
    startday = $("#start-day");
    operator = $("#operator");
    differ = $("#differ");
    calculate = $("#calculate");
    $(startYear).keyup(function (event) {
        detectYear(this);
    });
    $(startMonth).keyup(function (event) {
        detectMonth(this);
    });
    $(startday).keyup(function (event) {
        detectDay(this);
    });

    $(differ).keyup(function (event) {
        detectDiffer(this);
    });
    $(calculate).click(function (event) {
        dateAdd()
        stopEvent(event)
    })
})

function detectYear(obj) {
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
function detectMonth(obj) {
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
function detectDay(obj) {
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error_position(obj, "日期不能为空")
        return false;
    }
    //detect format errored
    if (!isDay(value)) {
        item_error_position(obj, "日期格式错误");
        return false;
    }
    //success
    item_success(obj);
    return true;
}
function detectDiffer(obj) {
    //loading
    item_loading(obj);
    var value = $(obj).val();
    if (isBlank(value)) {
        item_error_position(obj, "天数不能为空")
        return false;
    }
    //detect format errored
    if (!isPositive(value)) {
        item_error_position(obj, "天数格式错误");
        return false;
    }
    //success
    item_success(obj);
    return true;
}
function dateAdd() {
    if (detectYear(startYear) && detectMonth(startMonth) && detectDay(startday)
    ) {
        var _startDate = makePreZero(startMonth, 2) + "/" + makePreZero(startday, 2) + "/" + $(startYear).val();
        $.ajax({
            type: "post",
            url: PRE_FOX_ANON_BASE + "/date/date-add.json",
            async: true,
            dataType: "text",
            data: {
                startDate: _startDate,
                operator: $(operator).val(),
                differ: $(differ).val()
            },
            beforeSend: function () {
                $(calculate).attr(DISABLED, DISABLED).attr("计算中...")
            },
            success: function (result) {
                if (backDetectResult(result) == true) {
                    result = JSON.parse(result);
                    var startDate = result.data.startDate;
                    var endDate = result.data.endDate;
                    addSuccessMsg(msgContainer, '<p>' + startDate + ' ' + result.data.operator + ' ' + result.data.differ + '</p>' +
                        '<span class="fw-bold fs-3">' + endDate + '</span>')
                }
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
                $(calculate).removeAttr(DISABLED).attr("计算")
            }
        });
    }
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
        case 'startDate':
            item_error($(startday), backErrorTxt("日期", item.status));
            break;
        case 'operator':
            item_error($(operator), backErrorTxt("运算符", item.status));
            break;
        case 'differ':
            item_error($(differ), backErrorTxt("天数", item.status));
            break;


    }
}
$(function () {
    msgContainer = $("#js-flash-container");
    startYear = $("#start-year");
    startMonth = $("#start-month");
    startday = $("#start-day");

    endYear = $("#end-year");
    endMonth = $("#end-month");
    endday = $("#end-day");

    calculate = $("#calculate");
    $(startYear).keyup(function (event) {
        detectYear(this);
    });
    $(endYear).keyup(function (event) {
        detectYear(this);
    });
    $(startMonth).keyup(function (event) {
        detectMonth(this);
    });
    $(endMonth).keyup(function (event) {
        detectMonth(this);
    });
    $(startday).keyup(function (event) {
        detectDay(this);
    });
    $(endday).keyup(function (event) {
        detectDay(this);
    });
    $(calculate).click(function (event) {
        dateBetween()
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

function dateBetween() {
    if (detectYear(startYear) && detectMonth(startMonth) && detectDay(startday)
        && detectYear(endYear) && detectMonth(endMonth) && detectDay(endday)
    ) {
        var _startDate = makePreZero(startMonth, 2) + "/" + makePreZero(startday, 2) + "/" + $(startYear).val();
        var _endDate = makePreZero(endMonth, 2) + "/" + makePreZero(endday, 2) + "/" + $(endYear).val();
        $.ajax({
            type: "post",
            url: PRE_FOX_ANON_BASE + "/date/date-between.json",
            async: true,
            dataType: "json",
            data: {
                "startDate": _startDate,
                "endDate": _endDate
            },
            beforeSend: function () {
                $(calculate).attr(DISABLED, DISABLED).html("计算中...")
            },
            success: function (result) {
                if (backDetectResult(result) == true) {
                    var startDate = result.data.startDate;
                    var endDate = result.data.endDate;
                    addSuccessMsg(msgContainer, '<p>' + startDate + ' - ' + endDate + '</p><span class="fw-bold fs-3">' + result.data.differ + '</span>')
                }
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
                $(calculate).removeAttr(DISABLED).html("计算")
            }
        });
    }
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
        case 'startDate':
            item_error($(startday), backErrorTxt("日期", item.status));
            break;
        case 'endDate':
            item_error($(endday), backErrorTxt("日期", item.status));
            break;
        case 'differ':
            alertError("日期转换出错，请稍后再试")
            break;

    }
}

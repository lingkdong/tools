$(function () {
    input = $("#text");
    $(input).setTextareaCount({
        numWidth: "30px",
        numColor: "#959da5",
        bgColor: "#FFF",
        color: "#000",
        display: "inline-block",
        fontSize: "14px"
    });

})
var FORMAT_BASE_URL = PRE_FOX_ANON_BASE + "/format/";
var OPEN_BASE_URL = PRE_FOX_ANON_BASE + "/open/";
function updateLine() {
    $(input).updateLine();
}
function isInputBlank() {
    if ($(input).val().trim() == "") {
        return true;
    }
    return false;
}
function format_raw(type) {
    if (!isInputBlank()) {
        $.ajax({
            type: "post",
            url: OPEN_BASE_URL + "store.json",
            async: true,
            dataType: "text",
            data: {
                v: $(input).val(),
                type: type,
            },
            success: function (result) {
                window.open(OPEN_BASE_URL + "show.html?version=" + result);
            },
            error: function (result) {
            },
            complete: function () {
            }
        });
        // var obj=window.open("/tools/raw.html","about:blank");
    }
}

function format_pretty(type) {
    if (!isInputBlank()) {
        $.ajax({
            type: "post",
            url: getPrettyUrl(type),
            async: true,
            dataType: "text",
            data: {
                input: $(input).val()
            },
            success: function (result) {
                result=JSON.parse(result)
                if (HttpStatus.PARAM_INCORRECT == result.status) {
                    alertError(type + "输入错误，请检查您的数据");
                } else {
                    $(input).val(result.data);
                    updateLine();
                }
            },
            error: function (result) {
            },
            complete: function () {
            }
        });
    }
}

function format_compress(type) {
    if (!isInputBlank()) {
        $.ajax({
            type: "post",
            url: getCompressUrl(type),
            async: true,
            dataType: "text",
            data: {
                input: $(input).val()
            },
            success: function (result) {
                result=JSON.parse(result)
                if (HttpStatus.PARAM_INCORRECT == result.status) {
                    alertError(type + "输入错误，请检查您的数据");
                } else {
                    $(input).val(result.data);
                    updateLine();
                }
            },
            error: function (result) {
            },
            complete: function () {
            }
        });
    }
}

function format_copy() {
    if (!isInputBlank()) {
        var input = document.getElementById("text");
        _copy(input)
    }
}
function format_clear0() {
    if (!isInputBlank()) {
        _clear0(input)
        updateLine();
    }
}

function getPrettyUrl(type) {
    return FORMAT_BASE_URL + type + "-pretty.json";
}

function getCompressUrl(type) {
    return FORMAT_BASE_URL + type + "-compress.json";
}



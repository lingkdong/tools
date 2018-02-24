var TYPE = "sql";
function pretty() {
    if (!isInputBlank()) {
        $.ajax({
            type: "post",
            url: getPrettyUrl(TYPE),
            async: true,
            dataType: "json",
            data: {
                input: $(input).val(),
                dbType: $("#dbType").val()
            },
            success: function (result) {
                if (HttpStatus.PARAM_INCORRECT == result.status) {
                    alertError(type + "格式解析出错，请检查您的输入");
                }else {
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
function compress() {
    if (!isInputBlank()) {
        $(input).val($(input).val().replace(/\s{1,}/g, " ").replace(/\s{1,}\(/, "(").replace(/\s{1,}\)/, ")"));
        updateLine();
    }
}
function copy() {
    format_copy();
}
function clear0() {
    format_clear0();
}
function raw() {
    format_raw(TYPE);
}

function sqlIn() {
    if (!isInputBlank()) {
        $(input).val("in (" + $(input).val().replace(/\r/ig, ",").replace(/\n/ig, ",") + ")");
        updateLine();
    }
}

function sqlCharIn() {
    if (!isInputBlank()) {
        $(input).val("in ('" + $(input).val().replace(/\r/ig, "','").replace(/\n/ig, "','") + "')");
        updateLine();
    }
}
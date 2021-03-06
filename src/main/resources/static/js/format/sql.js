var TYPE = "sql";
function pretty() {
    if (!isInputBlank()) {
        $.ajax({
            type: "post",
            url: getPrettyUrl(TYPE),
            async: true,
            dataType: "json",
            data: {
                input: $(input).val().trim(),
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
        $(input).val("in (" + $(input).val().trim().replace(/\r/ig, ",").replace(/\n/ig, ",") + ")");
        updateLine();
    }
}

function sqlCharIn() {
    if (!isInputBlank()) {
        $(input).val("in ('" + $(input).val().trim().replace(/\r/ig, "','").replace(/\n/ig, "','") + "')");
        updateLine();
    }
}

function sqlLike() {
    if (!isInputBlank()) {
        var index=$(input).val().indexOf("\n");
        var column=$(input).val().substring(0,index);
        var value=$(input).val().substring(index+1);
        var _like=column+" like'%";
        $(input).val("and ("+_like + value.replace(/\r/ig, "%' or "+_like).replace(/\n/ig, "%' or "+_like) + "%')");
        updateLine();
    }
}
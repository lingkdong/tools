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
    if (isInputBlank()) {
        window.open("/tools/raw.html");
    } else {
        $.ajax({
            type: "post",
            url: "/tools/store-raw.json",
            async: true,
            dataType: "text",
            data: {
                v: $(input).val(),
                type: type,
            },
            success: function (result) {
                window.open("/tools/raw.html?version=" + result);
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
            url: "/tools/format/" + type + "-pretty.json",
            async: true,
            dataType: "text",
            data: {
                input: $(input).val()
            },
            success: function (result) {
                $(input).val(result);
                updateLine();
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
            url: "/tools/format/" + type + "-compress.json",
            async: true,
            dataType: "text",
            data: {
                input: $(input).val()
            },
            success: function (result) {
                $(input).val(result);
                updateLine();
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
        var input=document.getElementById("text");
        _copy(input)
    }
}
function format_clear0() {
    if (!isInputBlank()) {
        _clear0(input)
        updateLine();
    }
}




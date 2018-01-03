var TYPE = "js";
function pretty() {
    require(['beautify'], function (beautify) {
        if (!isInputBlank()) {
            var result = beautify.js_beautify($(input).val());
            $(input).val(result);
            updateLine();
        }
    });
}
function compress() {
    format_compress(TYPE)
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
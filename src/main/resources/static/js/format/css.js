var TYPE = "css";
function pretty() {
    require(['beautify-css'], function (beautify) {
        if (!isInputBlank()) {
            var result = beautify.css_beautify($(input).val().trim());
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
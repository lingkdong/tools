var TYPE = "html";
function pretty() {
    require(['beautify-html'], function (html_beautify) {
        if (!isInputBlank()) {
            var result = html_beautify.html_beautify($(input).val().trim());
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
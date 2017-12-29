function _copy(obj) {
    obj.select(); // 选择对象
    document.execCommand("Copy");
}
function _clear0(obj) {
    $(obj).val("");
}
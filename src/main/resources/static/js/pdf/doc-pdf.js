$(function () {
    uploadDiv = $("#upload-div");
    upload = $("#upload");
    uploadImg = $("#upload-img");
    uploadInfo = $("#upload-info");
    $(upload).change(function () {
        fileTypeDetect(this)
    })
})

var word_select_html = '<img src="/img/word-80.png"/><img src="/img/right-arrow.png"/><img' +
    ' src="/img/pdf-80.png"/>';
var word_html = '<img src="/img/word-96.png"/>';
function fileTypeDetect(obj) {
    if (isBlank(obj.value)) {
        wordSelect();
        return true;
    } else {
        word(obj)
    }
    var fileSize = 0;
    if (isIE && !obj.files) {
        var filePath = obj.value;
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        var file = fileSystem.GetFile(filePath);
        fileSize = file.Size;
    } else {
        fileSize = obj.files[0].size;
    }
    var size = fileSize / 1024;
    if (size > 2000 * 10 * 10) {
        alertError("附件不能大于200M");
        obj.value = "";
        wordSelectError()
        return false
    }
    var name = obj.value;
    var fileName = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
    if (!(fileName == "doc" || fileName == "docx" || fileName == "txt")) {
        alertError("请选择Word格式文件上传！");
        obj.value = "";
        wordSelectError()
        return false
    }
    wordSelectSuccess();
    return true;
}
function wordSelect() {
    $(uploadDiv).removeClass("flash-success")
    $(uploadImg).html(word_select_html);
    $(uploadInfo).html("请选择Word文件")
}

function word(obj) {

    $(uploadImg).html(word_html);
    $(uploadInfo).html(obj.value);
}

function wordSelectError() {
    $(uploadDiv).addClass("flash-error");
    $(upload).attr(DISABLED, DISABLED);
    setTimeout(function () {
        $(uploadDiv).removeClass("flash-error");
        $(upload).removeAttr(DISABLED);
        wordSelect()
    }, 2000);
}
function wordSelectSuccess() {
    $(uploadDiv).addClass("flash-success")
}

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
        $(uploadInfo).html(obj.value);
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
        wordSelectError(obj,"附件不能大于200M");
        return false
    }
    var name = obj.value;
    var fileType = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
    if (!(fileType == "doc" || fileType == "docx" || fileType == "txt")) {
        wordSelectError(obj,"文件格式错误，请选择Word格式文件上传");
        return false
    }
    wordSelectSuccess();
    return true;
}
function wordSelect() {
    $(uploadImg).html(word_select_html);
    $(uploadInfo).html("请选择Word文件");
    $(uploadDiv).removeClass("flash-success").removeClass("flash-error");
}

function wordSelectError(obj,errorInfo) {
    obj.value = "";
    $(uploadImg).html(errorInfo);
    $(uploadDiv).removeClass("flash-success").addClass("flash-error");
}
function wordSelectSuccess() {
    $(uploadImg).html(word_html);
    $(uploadDiv).removeClass("flash-error").addClass("flash-success")
}

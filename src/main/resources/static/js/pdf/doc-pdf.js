$(function () {
    uploadDiv = $("#upload-div");
    uploadIcon = $("#upload-icon");
    uploadInfo = $("#upload-info");
    file = $("#file");
    convert=$("#convert")
    $(file).change(function (event) {
        fileDetect(this)
        stopEvent(event);
    });
    $(convert).click(function (event) {

    })
})

var uploadIcon_Select = '<img src="/img/word-80.png"/><img src="/img/right-arrow.png"/><img' +
    ' src="/img/pdf-80.png"/>';
var uploadIcon_Success = '<img src="/img/word-96.png"/>';
function fileDetect(obj) {
    if (isBlank(obj.value)) {
        uploadSelect();
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
    if (size > 2000) {
        uploadError(obj,"附件不能大于2M");
        return false
    }
    var name = obj.value;
    var fileType = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
    if (!(fileType == "doc" || fileType == "docx" || fileType == "txt")) {
        uploadError(obj,"文件格式错误，请选择Word格式文件上传");
        return false
    }
    uploadSuccess();
    return true;
}
function uploadSelect() {
    $(uploadIcon).html(uploadIcon_Select);
    $(uploadInfo).html("请选择Word文件");
    $(uploadDiv).removeClass("flash-success").removeClass("flash-error");
}

function uploadError(obj,errorInfo) {
    $(uploadIcon).html(errorInfo);
    $(uploadDiv).removeClass("flash-success").addClass("flash-error");
}
function uploadSuccess() {
    $(uploadIcon).html(uploadIcon_Success);
    $(uploadDiv).removeClass("flash-error").addClass("flash-success")
}

function doConvert() {
    //detect
    if(fileDetect(file)){

    }

}
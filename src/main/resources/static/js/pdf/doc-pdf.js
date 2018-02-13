$(function () {
    upload=$("#upload");
    uploadImg=$("#upload-img");
    uploadInfo=$("#upload-info");
    $(upload).change(function () {
        fileTypeDetect(this)
    })
})

var word_select_html='<img th:src="/img/word-80.png}"/><img th:src="/img/right-arrow.png}"/><img' +
    ' th:src="/img/pdf-80.png}"/>';
var word_html='<img src="/img/word-96.png"/>';
function fileTypeDetect(obj) {
    if(isBlank(obj.value)){
      word_select(obj);
      return true;
    }else {
        word(obj)
    }
    var fileSize = 0;
    if (isIE && !obj.files) {
        var filePath = obj.value;
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        var file = fileSystem.GetFile (filePath);
        fileSize = file.Size;
    } else {
        fileSize = obj.files[0].size;
    }
    var size = fileSize / 1024;
    if(size>2000*10*10){
        alertError("附件不能大于200M");
        obj.value="";
        return false
    }
    var name=obj.value;
    var fileName = name.substring(name.lastIndexOf(".")+1).toLowerCase();
    if(!(fileName =="doc" || fileName =="docx" ||fileName =="txt")){
        alertError("请选择Word格式文件上传！");
        obj.value="";
        return false
    }
    return true;
}
function word_select(obj) {
    $(uploadImg).html(word_select_html);
    $(uploadInfo).html("请选择Word文件")
}

function word(obj) {
    $(uploadImg).html(word_html);
    $(uploadInfo).html(obj.value);
}

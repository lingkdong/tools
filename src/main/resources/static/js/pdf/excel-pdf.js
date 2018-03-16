$(function () {
    msgContainer = $("#js-flash-container");
    uploadDiv = $("#upload-div");
    uploadIcon = $("#upload-icon");
    uploadInfo = $("#upload-info");
    file = $("#file");
    convert = $("#convert");
    convertForm = $("#convert-form");
    $(file).change(function (event) {
        var flag=fileDetect(this)
        $(file).attr("valid",flag)
        stopEvent(event);
    });
    $(convert).click(function (event) {
        doConvert()
        stopEvent(event);
        return false;
    })
})
var type_array=new Array("csv","xls","xlsx","tsv")
var uploadIcon_Select = '<img src="/tools/img/excel-128.png" class="wh-80"/><img src="/tools/img/right-arrow.png"/><img' +
    ' src="/tools/img/pdf-80.png"/>';
var uploadIcon_Success = '<img src="/tools/img/excel-128.png" class="wh-96"/>';
function fileDetect(obj) {
    if (isBlank(obj.value)) {
        uploadSelect();
        alertError("请选择Word格式文件")
        return false;
    } else {
        var fileName=obj.value;
        fileName=fileName.substring(fileName.lastIndexOf("\\")+1);
        if(fileName.length>40){
            var index=fileName.lastIndexOf(".");
            fileName=fileName.substring(0,40)+"..."+fileName.substring(index)
        }
        $(uploadInfo).html(fileName);
    }
    var name = obj.value;
    var fileType = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
    if (!(isInArray(type_array,fileType))) {
        uploadError(obj, "文件格式错误，请选择Excel格式文件上传");
        return false
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
    if (fileSize == 0) {
        uploadError(obj, "文件内容不允许为空，请重新选择文件上传");
        return false
    }
    var size = fileSize / 1024;
    if (size > 2000) {
        uploadError(obj, "附件不能大于2M");
        return false
    }

    uploadSuccess();
    return true;
}
function uploadSelect() {
    $(uploadIcon).html(uploadIcon_Select);
    $(uploadInfo).html("选择Excel文件");
    $(uploadDiv).removeClass("flash-success").removeClass("flash-error");
}

function uploadError(obj, errorInfo) {
    $(uploadIcon).html(errorInfo);
    $(uploadDiv).removeClass("flash-success").addClass("flash-error");
}
function uploadSuccess() {
    $(uploadIcon).html(uploadIcon_Success);
    $(uploadDiv).removeClass("flash-error").addClass("flash-success")
}
var PDF_BASE_URL=PRE_FOX_ANON_BASE+'/pdf'
function doConvert() {
    //detect
    var flag=$(file).attr("valid");
    if (flag=="true") {
        $(convertForm).attr("action",PDF_BASE_URL + "/excel-pdf.json");
        // $(convertForm).submit();
        $(convertForm).ajaxSubmit({
            dataType: "json",
            beforeSend: function () {
                $(convert).html("转化中...").attr(DISABLED, true);
            },
            success: function (result) {
                if(backDetectResult(result)){
                    var name = result.data.name;
                    var downloadName = result.data.downloadName;
                    var dateDir=result.data.dateDir
                    addSuccessMsg(msgContainer, '<p>转换成功,请点击下载</p><p><a class="cursor-p fs-3 f-black" onclick="down(this)"' +
                        ' data-dateDir="'+dateDir+'" data-name="'+name+'" data-downloadName="'+downloadName+'">' + name +'</a></p>')
                    $(file).val("").attr("valid","false");
                    uploadSelect();
                }
            },
            error: function (result) {
            alertServerError();
        },
        complete: function () {
                $(convert).removeAttr(DISABLED).html("转化");
            }
        });
    }

}


// back program detect result
function backDetectResult(result) {
    if (HttpStatus.OK == result.status) {
        return true;
    } else if (HttpStatus.PARAM_INCORRECT == result.status) {
        var data = result.data;
        if (data instanceof Array) {
            for (var i = 0; i < data.length; i++) {
                backError(data[i]);
            }
        } else {
            backError(data);
        }

    } else if (HttpStatus.INTERNAL_SERVER_ERROR == result.status) {
        alertServerError();
    }
    return false;
}

function backError(item) {
    switch (item.property) {
        case 'file':
            alertError(backErrorTxt("文件",item.status))
            break;
    }
}

function backErrorTxt(property, status) {
    switch (status) {
        case HttpStatus.IS_BLANK:
            return property + "不能为空";
        case HttpStatus.INVALID_FORMAT:
            return property + "格式错误";
        case HttpStatus.FILE_EMPTY:
            return property + "内容为空";
        case HttpStatus.FILE_UPLOAD_ERROR:
            return property + "上传失败";
        case HttpStatus.FILE_CONVERT_ERROR:
            return property + "转换失败,请稍后再试";
    }
}

function down(obj) {
    var name=$(obj).attr("data-name");
    var downLoadName=$(obj).attr("data-downloadName");
    var dateDir=$(obj).attr("data-dateDir");
    open_blank(PDF_BASE_URL+"/download?name="+name+"&downloadName="+downLoadName+"&dateDir="+dateDir);
}


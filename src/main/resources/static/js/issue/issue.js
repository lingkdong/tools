$(function(){
    Simditor.locale = 'zh-CN'
    var editor = new Simditor({
        textarea: $('#editor'),
        //optional options
        placeholder: '',
        pasteImage: true,//support paste
        upload : {
            url : '/smiditor/uploadSimditorImg', //action url
            params: null, //
            fileKey:'file', //fileName
            connectionCount: 3,
            leaveConfirm: '正在上传文件'
        }
    });
})


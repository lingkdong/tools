$(function () {
    Simditor.locale = 'zh-CN'
    commentBody = new Simditor({
        textarea: $('#editor'),
        //optional options
        placeholder: '',
        pasteImage: true,//support paste
        upload: {
            url: PRE_FOX_AUTHC_BASE + '/issue/upload-file', //action url
            params: null, //
            fileKey: 'file', //fileName
            connectionCount: 3,
            leaveConfirm: '正在上传文件'
        }
    });
})


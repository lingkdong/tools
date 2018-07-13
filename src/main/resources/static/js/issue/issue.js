$(function(){
    $('.summernote').summernote({
        height: 300,
        tabsize: 2,
        lang:"zh-CN" ,
        callbacks:{
            onImageUpload:function(files,editor,$editable) {

            }
        }
    });
})


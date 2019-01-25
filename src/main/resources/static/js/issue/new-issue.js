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
    defaultLabel=$("#defaultLabel");
    $("a[name='issue-filter']").click(function (event) {
        chooseFilter(this);
        stopEvent(event);
    })

})


function chooseFilter(obj) {
    var checked = $(obj).attr("aria-checked");
    var value=$(defaultLabel).attr("data-value");
    var name=$(defaultLabel).attr("data-labelName");
    var bgColor=$(defaultLabel).attr("data-bgColor");
    //clear
    $("a[name='issue-filter'][data-name='label']").attr("aria-checked", false);

    if(!(checked==true||checked=="true")){
        code=$(obj).attr("data-value");
        bgColor=$(obj).attr("data-bgColor");
        name=$(obj).attr("data-labelName");
        $(obj).attr("aria-checked", true);
    }else {
        //select default
        $("a[name='issue-filter'][data-name='label'][data-value='"+value+"']").attr("aria-checked", true)
    }
    var html='<span class="color"style="background-color:'+bgColor+'">&nbsp;</span>' +
        '<span class="name">'+name+'</span>';
    $("summary[name='label-selected']").html(html);

}
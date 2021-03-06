$(function () {

})
var INDEX_BASE_URL="/tools/anon/"
//load category
function dashboard_more(obj) {
    var number=parseInt($(obj).attr("data-number"))+1;
    $.ajax({
        type: "post",
        url: INDEX_BASE_URL+"search.json",
        dataType: "json",
        data:{
            q:$(obj).attr("data-q"),
            page:number,
            size:$(obj).attr("data-size")
        },
        success: function (result) {
            if(result&&result.status==HttpStatus.OK&&result.data){
                var html = '';
                data=eval(result.data)
                if (data && data.content && data.content.length > 0) {
                    $.each(data.content, function (index,item) {
                        var innerHtml = '';
                        if (item.resourceDtos && item.resourceDtos.length > 0) {
                            $.each(item.resourceDtos, function (subIndex,sub) {
                                innerHtml += '<a class="btn btn-outline mt-2" target="'+sub.target+'" href="' + sub.url + '">'+sub.name+'</a> '
                            })
                        }
                        var description=(item.description)?item.description:'';
                        html += '<div class="newsfeed-placeholder p-4 mb-4">'
                            + '<h2 class="lh-condensed mb-2" >'+item.name+'</h2>'
                            + '<span class="f6">'+description+'</span>'
                            + '<div class="f4">'
                            + innerHtml
                            + '</div>'
                            + '</div>'
                        $(obj).attr("data-number",number);
                    });
                    var more_div=$("#more-div");
                    $(html).insertBefore($(more_div))
                    if(data.last==true){
                        $(more_div).empty();
                    }
                }
            }


        }
    });
}
$(function () {

})
var INDEX_BASE_URL="/tools/anon/"
//load category
function dashboard_more(obj) {
    $.ajax({
        type: "post",
        url: INDEX_BASE_URL+"search.json",
        dataType: "json",
        data:{
            q:$(obj).attr("data-q"),
            number:$(obj).attr("data-number"),
            size:$(obj).attr("data-size"),
            last:$(obj).attr("data-last"),
            totalPages:$(obj).attr("data-totalPages"),
            totalElements:$(obj).attr("data-totalElements")
        },
        success: function (result) {
            if(result&&result.status==200&&result.data){
                var html = '';
                data=eval(result.data)
                if (data && data.content && data.content.length > 0) {
                    $.each(data.content, function (index,item) {
                        var innerHtml = '';
                        if (item.resourceDtos && item.resourceDtos.length > 0) {
                            $.each(item.resourceDtos, function (subIndex,sub) {
                                innerHtml += '<a class="ml-2" href="' + sub.url + '">'+sub.name+'</a>'
                            })
                        }
                        var description=(item.description)?item.description:'';
                        html += '<div class="newsfeed-placeholder p-5 mb-4">'
                            + '<h3 class="h2 lh-condensed mb-2" >'+item.name+'</h3>'
                            + '<p class="f4">'
                            + description
                            + innerHtml
                            + '</p>'
                            + '</div>'
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
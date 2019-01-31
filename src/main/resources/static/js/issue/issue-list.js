$(function () {
    findIssue = $("#find-issue");
    pop = $(".Popover");
    popMsg = $(".Popover-message");
    To = document.querySelector(".js-hovercard-content");
    t = document.querySelector(".Popover-message");
    Ho = 0,
        Io = 12,
        Ro = 24,
        _o = Ro - 7,
        Co = 16;
    var value = $(findIssue).val();
    $(findIssue).focus().val("").val(value);
    $(findIssue).keyup(function (event) {
        if (event.keyCode == 13) {
            searchIssue();
        }
        stopEvent(event);
    })

    $("a[name='issue-filter']").click(function (event) {
        chooseFilter(this);
        searchIssue();
        stopEvent(event);
    })

    $(".pager a").click(function (event) {
        changePage(event);
        stopEvent(event);
    })
    $(".show-issue-user-card").mouseover(function (e) {
        var x = e.originalEvent.x || e.originalEvent.layerX || 0;
        var y = e.originalEvent.y || e.originalEvent.layerY || 0;
        showIssueUserCard(this, x, y);
        stopEvent(e);
    })

    $(document).mouseup(function (e) {
        var _con = $('.Popover');   // 设置目标区域
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            $(pop).addClass("v-hid");
            $(popMsg).html("");
        }
    });
    $(".js-issue-detail").click(function (event) {
        jumpDetail(this);
        stopEvent(event);
    })
})

function chooseFilter(obj) {
    var checked = $(obj).attr("aria-checked");
    var flag = false;
    if ("true" != checked) flag = true;

    var name = $(obj).attr("data-name");
    //clear
    $("a[name='issue-filter'][data-name='" + name + "']").attr("aria-checked", false);
    //flag
    $(obj).attr("aria-checked", flag);

}

function getParam() {
    var param = "";
    //get all filter conditions
    var title = $(findIssue).val().trim();
    if (isNotBlank(title)) {
        param = "title=" + title
    }
    $("a[name='issue-filter'][aria-checked='true']").each(function () {
        var name = $(this).attr("data-name");
        var value = $(this).attr("data-value");
        if (param.length == 0) {
            param = name + "=" + value;
        } else {
            param = param + "&" + name + "=" + value;
        }
    })
    return param;
}

function searchIssue() {
    var url = PRE_FOX_ANON_BASE + "/issues/list?";
    var param = getParam();
    jump_page(url + param);
}

function changePage(event) {
    var url = PRE_FOX_ANON_BASE + "/issues/list?";
    var param = getParam();
    var number = $(event.delegateTarget).attr("data-number");
    if (isBlank(number)) number = "0";
    if (isNotBlank(param)) {
        param = param + "&page=" + number
    } else {
        param = "page=" + number
    }
    jump_page(url + param);
}

function showIssueUserCard(obj) {
    $(pop).addClass("v-hid");
    var userCard = buildUserCard($(obj).attr("data-username")
        , $(obj).attr("data-picture")
        , $(obj).attr("data-location")
        , $(obj).attr("data-skillTag")
    );
    $(popMsg).html(userCard);
    deal(obj)
    $(pop).removeClass("v-hid");
}

function deal(e) {
    if (To) {
        To.style.visibility = "hidden", To.style.display = "block", t.classList.remove(No("bottom-left"), No("bottom-right"), No("right-top"), No("right-bottom"), No("top-left"), No("top-right"));
        var r = Oo(e),
            n = r.containerTop,
            a = r.containerLeft,
            s = r.contentClassSuffix;
        t.classList.add(No(s)), To.style.top = n + window.pageYOffset + "px", To.style.left = a + window.pageXOffset + "px", To.style.visibility = ""
    }
}

function No(e) {
    return "Popover-message--" + e
}

function Oo(e) {
    var t = To.getBoundingClientRect(),
        r = t.width,
        n = t.height,
        a = function (e) {
            var t = e.getClientRects(),
                r = t[0],
                n = !0,
                a = !1,
                s = void 0;
            try {
                for (var o, i = t[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                    var u = o.value;
                    if (u.left < Ho && u.right > Ho) {
                        r = u;
                        break
                    }
                }
            } catch (e) {
                a = !0, s = e
            } finally {
                try {
                    !n && i.return && i.return()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }(e),
        s = a.left,
        i = a.top,
        u = a.height,
        c = a.width,
        l = i > n;
    var m = window.innerWidth - s > r,
        f = s + c / 2;
    return {
        containerTop: l ? i - n - Io : i + u + Io,
        containerLeft: m ? f - Ro : f - r + Ro,
        contentClassSuffix: l ? m ? "bottom-left" : "bottom-right" : m ? "top-left" : "top-right"
    }
}

function buildUserCard(username, picture, location, skillTag) {
    var img = "";
    if (isNotBlank(picture)) {
        img = '<img class="d-block" height="60" width="60" src="' + nginxUrl + picture + '">';

    }
    var info = '  <div class="pb-3 px-3 issue-user-card">' +
        '                                 <div class="d-flex mt-3">' +
        '                                              <div class="flex-self-start">' +
        '                                        <div class="rounded-1 overflow-hidden">' +
        '                                            <div class="issue-user-name show-issue-user-card cursor-p"' +
        '                                                 style="box-shadow: 0px 0px 1px  rgba(12,13,14,0.5);height: 60px;width: 60px"' +
        '                                                 data-username=' + username + '>' +
        img +
        '                                            </div>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="overflow-hidden ml-3">' +
        '                                        <a class="issue-user-name show-issue-user-card cursor-p"' +
        '    data-username=' + username + '>' + username + '</a>' +
        '                                        <div class="my-1">' +
        '                                            <div class="mt-2 text-gray text-small">' +
        '                                                <svg class="octicon octicon-location" viewBox="0 0 12 16" version="1.1"' +
        '                                                     width="12" height="16"' +
        '                                                     aria-hidden="true">' +
        '                                                    <path fill-rule="evenodd"' +
        '                                                          d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>' +
        '                                                </svg>' + location +

        '                                            </div>' +
        '                                            <div class="text-gray text-small">' + skillTag + '</div>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                 </div>' +
        '                            </div>';
    return info;
}


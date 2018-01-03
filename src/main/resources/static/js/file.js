;(function ($) {
    var AutoRowsNumbers = function (element, config) {
        this.$element = $(element);
        this.$group = $('<div/>');
        this.$ol = $('<div/>');
        this.$wrap = $('<div/>');
        this.$group.css({
            "display": config.display,
            "width": "100%",
            "border-bottom": "none"
        });
        this.$ol.css({
            "color": config.numColor,
            "min-width": config.numWidth,
            "height": this.$element.height(),
            "font-size": this.$element.css("font-size"),
            "line-height": this.$element.css("line-height"),
            "position": "absolute",
            "overflow": "hidden",
            "margin": 0,
            "padding": 0,
            "margin-right": "8px",
            "padding-left": "8px",
            "text-align": "center"
        });
        this.$wrap.css({});
        this.$element.css({
            "white-space": "pre",
            "outline": "none",
            "font-size": config.fontSize,
            "resize": config.resize,
            "margin-left": (parseInt(config.width) - parseInt(this.$element.css("border-left-width"))) + 'px',
            "width": "100%"
        });

    }

    AutoRowsNumbers.prototype = {
        constructor: AutoRowsNumbers,

        init: function () {
            var that = this;
            that.$element.wrap(that.$group);
            that.$ol.insertBefore(that.$element);
            this.$ol.wrap(that.$wrap)
            that.$element.bind('input propertychange', {that: that}, that.inputText);
            that.$element.on('scroll', {that: that}, that.syncScroll);
            that.inputText({data: {that: that}});
        },

        inputText: function (event) {
            var that = event.data.that;
            that.$element.css({
                "padding-left": that.$ol.outerWidth(true) + 10 + "px"
            });
            setTimeout(function () {
                that.updateLine();
                that.syncScroll({data: {that: that}});
            }, 0);
        },

        updateLine: function () {
            var that = this;
            var value = that.$element.val();
            var count = value.match(/\n/g) ? value.match(/\n/g).length + 1 : 1;
            that.$element;
            var line = $("#line");
            var old_line = parseInt($(line).attr("data-line"));
            $(line).html(count).attr("data-line", count);
            //old_line compare with now line
            if (count == 1) {
                that.$ol.html('');
                for (var i = 1; i <= count; i++) {
                    that.$ol.append("<div class='data-num' data-num='" + i + "'>" + i + "</div>");
                }
            } else if (count == old_line) {
                return true;
            } else if (count - old_line > 0) {
                //more append
                for (var i = old_line + 1; i <= count; i++) {
                    that.$ol.append("<div class='data-num' data-num='" + i + "'>" + i + "</div>");
                }
            } else if (old_line - count >= count) {
                that.$ol.html('');
                for (var i = 1; i <= count; i++) {
                    that.$ol.append("<div class='data-num' data-num='" + i + "'>" + i + "</div>");
                }
            } else {
                //delete from end
                for (var i = count + 1; i <= old_line; i++) {
                    $(that.$ol.children(":last")).remove();
                }
            }
        },

        syncScroll: function (event) {
            var that = event.data.that;
            that.$ol.children().eq(0).css("margin-top", -(that.$element.scrollTop()) + "px");
        }
    }

    $.fn.setTextareaCount = function (option) {
        var config = {};
        var option = arguments[0] ? arguments[0] : {};
        config.numWidth = option.numWidth ? option.numWidth : "30px";
        config.numColor = option.numColor ? option.numColor : "#959da5";
        config.color = option.color ? option.color : "#000";
        config.bgColor = option.bgColor ? option.bgColor : "#FFF";
        config.display = option.display ? option.display : "block";
        config.fontSize = option.display ? option.display : "14px";

        return this.each(function () {
            var $this = $(this),
                data = $this.data('autoRowsNumbers');

            if (!data) {
                $this.data('autoRowsNumbers', (data = new AutoRowsNumbers($this, config)));
            }

            if (typeof option === 'string') {
                return false;
            } else {
                data.init();
            }
        });
    }
    $.fn.updateLine = function () {
        var $this = $(this),
            data = $this.data('autoRowsNumbers');

        if (!data) {
            $this.data('autoRowsNumbers', (data = new AutoRowsNumbers($this, config)));
        }
        data.updateLine();
    }
})(jQuery)



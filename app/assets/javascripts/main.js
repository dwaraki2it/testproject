var page={};
$(document).ready(function() {

     $('#lofslidecontent45').lofJSidernews({
        interval: 5000,
        easing: 'easeInOutQuad',
        duration: 1200,
        auto: true
    });
     $('#lofslidecontent46').lofJSidernews({
        interval: 5000,
        easing: 'easeInOutQuad',
        duration: 1200,
        auto: true
    });
         $('#carouselhAuto').jsCarousel({
        onthumbnailclick: function(src) {  },
        autoscroll: true,
        masked: true,
        itemstodisplay: 3,
        orientation: 'h'
    });
    $('#slider-10').jsCarousel({
        onthumbnailclick: function(src) {  },
        autoscroll: true,
        wrap:'circular',
        masked: true,
        itemstodisplay: 6,
        orientation: 'h'
    });

    $('#slider-2').jsCarousel({
        onthumbnailclick: function(src) {  },
        autoscroll: true,
        wrap:'circular',
        masked: true,
        itemstodisplay: 6,
        orientation: 'h'
    });

    $('#slider-1').jsCarousel({
        onthumbnailclick: function(src) {  },
        //autoscroll: false,
         circular: true,
        masked: true,
        itemstodisplay:6,
        orientation: 'h'
    });
//    $('#slider-1').append('<div class="jcarousel-toggle-vertical" style="display:block;">Test</div>');
//    $('.jcarousel-toggle-vertical').click(function(){


//    });
    $('.slide').slidePanel({
        status: 'closed',
        role: 'accordion'
    });

//    $('#CarShowcase')
//    .before('<div id="CarShowcaseNav">')
//    .cycle({
//        fx: 'turnDown',
//        speed: 800,
//        timeout: 8000,
//        pager: '#CarShowcaseNav',
//        pause: 1
//    });
//
//    $('#AdsNationwideScroll').cycle({
//        fx: 'scrollUp',
//        timeout: 6000,
//        delay: -2000
//    });

    // $('#newusedCarsPanel1').show();
    // $('#newusedCarsPanel2').hide();

    $('#tabsNewUsedCars span#tab2').click(function() {
        $("#tradeSearch1_uSearchPostcode").val($("#tradeSearch1_uSearchPostcode2").val());
        $('#newusedCarsPanel1').slideUp('normal');
        $('#newusedCarsPanel2').slideDown('normal');
        $("#tabsNewUsedCars span#tab1").removeClass();
        $("#tabsNewUsedCars span#tab2").addClass("selected");
        return false;
    });

    $('#tabsNewUsedCars span#tab1').click(function() {
        $("#tradeSearch1_uSearchPostcode2").val($("#tradeSearch1_uSearchPostcode").val());
        $('#newusedCarsPanel2').slideUp('normal');
        $('#newusedCarsPanel1').slideDown('normal');
        $("#tabsNewUsedCars span#tab2").removeClass();
        $("#tabsNewUsedCars span#tab1").addClass("selected");
        return false;
    });

    $('span.postcodeHelp1').click(function() {
        $('.postcodeHelpText1').slideToggle("fast");
        return false;
    });

    $('span.postcodeHelp2').click(function() {
        $('.postcodeHelpText2').slideToggle("fast");
        return false;
    });

});


window.twttr = window.twttr || {};

var processSummizeInternal = function (B) {
    var J = page.trendDescriptions[page.query];
    if (J) {
        $("#trend_info").hide();
        $("#trend_description span").text(_("%{trend} is a popular topic on Twitter right now.", {
            trend: J[0]
        }));
        $("#trend").text(_("%{trend}", {
            trend: J[0]
        }));
        $("#trend_description p").html(J[1]);
        $("#trend_description").show()
    } else {
        $("#trend_description").hide();
        $("#trend_info").show()
    }(J && J[1].length > 0) ? $(".trenddesc").show() : $(".trenddesc").hide();

};

$.fn.isSearchLink = function (A) {
    return this.each(function () {
        var B = $(this);
        B.click(function (C) {

            $("#trends_list li.active a").removeClass("active")
        })
    })
};


function loadTrendDescriptions() {
    $("#trends a").each(function () {
        var A = $(this);
        var C = A.parent().find("em");
        if (C.length) {
            var B = A.text();
            var D = C.text().replace(new RegExp(B.replace(/([^\w])/gi, "\\$1"), "gi"), "<strong>" + B + "</strong>");
            var E = A.attr("title").length ? A.attr("title") : A.attr("name");page.trendDescriptions[E] = [B, D]
        }
    })
}
$(document).ready(function () {

    page.trendDescriptions = {};
    loadTrendDescriptions();

});

window.twttr.bounds = window.twttr.bounds || {};
$.extend(twttr.bounds, {
    Bounds: function (b, d, c, a) {
        this.x = b;
        this.y = d;
        this.width = c;
        this.height = a
    }
});
$.extend(twttr.bounds.Bounds.prototype, {
    encloses: function (a, b) {
        return a > this.x && a < this.x + this.width && b > this.y && b < this.y + this.height
    },
    toString: function () {
        return "(" + this.x + "," + this.y + ") " + this.width + "x" + this.height
    }
});
(function (a) {
    a.fn.extend({
        bounds: function () {
            var c = this.eq(0);
            var b = c.offset();
            return new twttr.bounds.Bounds(b.left, b.top, c.outerWidth(), c.outerHeight())
        }
    })
})(jQuery);

(function (A) {
    A.extend(window, {
        TrendTip: {
            parseIntDefault: function (B, D) {
                D = D || 0;
                var C = parseInt(B);
                return isNaN(C) ? D : C
            },
            clearBounds: function () {
                this.data("bounds", [])
            },
            addToBounds: function (B) {
                if (!this.data("bounds")) {
                    this.data("bounds", [])
                }
                this.data("bounds").push(B)
            },
            enclosing: function (B, D) {
                if (!this.data("bounds")) {
                    this.data("bounds", [])
                }
                var C = false;
                A.each(this.data("bounds"), function (F, E) {
                    if (E.encloses(B, D)) {
                        C = true
                    }
                });
                return C
            },
            clearScrollInterval: function () {
                clearInterval(this.data("interval"))
            },
            setScrollInterval: function (B) {
                if (this.data("interval")) {
                    this.clearScrollInterval()
                }
                this.data("interval", setInterval(B, 30))
            },
            duplicateContent: function (B) {
                var C = 0;
                B.children().each(function () {
                    C += A(this).outerWidth(true);
                    B.append(A(this).clone())
                });
                B.css({
                    zoom: 1,
                    width: (2 * C) + "px"
                });
                return C
            },
            initScroller: function () {
                var C = this;
                var E = this.duplicateContent(C);
                var B = TrendTip.parseIntDefault(C.css("left"), 0);
                var D = function () {
                    B = (B % E) + 1;
                    C.css({
                        left: B
                    })
                };
                C.bind("trendEnter", function () {
                    C.clearScrollInterval()
                }).bind("trendLeave", function () {
                    C.setScrollInterval(D)
                }).trigger("trendLeave")
            }
        }
    });
    A.extend(A.fn, {
        trendTip: function () {
            var B = false;
            var C = A(this);
            A.extend(C, TrendTip);
            C.initScroller();
            C.find("li a").each(function () {
                var D = A(this).closest("li");
                var E = {
                    mouseenter: function (G) {
                        var F = A(this);
                        A("#trends .inner").trigger("trendLeave");
                        if (C.oldCapturedTrend) {
                            C.oldCapturedTrend.trigger("trendLeave")
                        }
                        C.oldCapturedTrend = F;
                        C.addToBounds(F.bounds());
                        if (C.enclosing(G.pageX, G.pageY)) {
                            A("#trends .inner").trigger("trendEnter");
                            F.trigger("trendEnter");
                            var H = function (I) {
                                if (!C.enclosing(I.pageX, I.pageY)) {
                                    A("#trends .inner").trigger("trendLeave");
                                    F.trigger("trendLeave")
                                }
                            };
                            A(document).bind("mousemove", H);
                            F.bind("trendLeave", function (I) {
                                C.clearBounds();
                                A(document).unbind("mousemove", H)
                            })
                        }
                    },
                    trendenter: function () {
                        if (!C.hoveringTrend) {
                            var F = A(".trendtip");
                            var K = A(this).offset();
                            var J = Math.round(A(this).outerWidth() / 2);
                            var I = Math.round(F.outerWidth() / 2);
                            var H = D.find("a").text();
                            var G = D.find("em.description").html();
                            F.find(".trendtip-trend").html(H);
                            F.find(".trendtip-trend").attr("href", A(this).attr("href")).attr("name", H);
                            if (A.trim(G) != "") {
                                F.find(".trendtip-why").show();
                                F.find(".trendtip-desc").html(G)
                            } else {
                                F.find(".trendtip-why").hide()
                            }
                            B = setTimeout(function () {
                                clearTimeout(B);
                                D.find("a.search_link").addClass("active");
                                F.css({
                                    top: 25,
                                    left: K.left + J - I-100,
                                    position: "absolute",
                                    zIndex: 10000
                                });
                                F.fadeIn("fast", function () {
                                    C.hoveringTrend = true
                                });
                                C.addToBounds(F.bounds())
                            }, 400)
                        }
                    },
                    trendleave: function (G) {
                        clearTimeout(B);
                        A("#trends a.search_link").removeClass("active");
                        if (C.hoveringTrend) {
                            var F = A(".trendtip");
                            F.fadeOut("fast");
                            C.hoveringTrend = false
                        }
                    }
                };
                A(this).mouseenter(E.mouseenter).bind("trendEnter", E.trendenter).bind("trendLeave", E.trendleave)
            });
            return this
        }
    })
})(jQuery);


function FrontPage() {
    return $.extend(this, {
        $trends: $("#trends"),
        $trendTip: $(".trendtip:eq(0)")

    })
}


$.extend(FrontPage.prototype, {
    init: function () {
        this.initTrendHover();
    },
    initTrendHover: function () {
        this.hoveringTrend = false;
        var A = this;
        $("#trends ul").trendTip()
    }
});
(jQuery);

$(function() {
new FrontPage().init();
});

<!--
// Ticker startup
function startTicker()
{
	// Define run time values
	theCurrentStory     = -1;
	theCurrentLength    = 0;
	// Locate base objects
	if (document.getElementById) {
		    theAnchorObject     = document.getElementById("tickerAnchor");
			runTheTicker();
		 }
	else {
            document.write("<style>.ticki{display:none;}.ticko{border:0px; padding:0px;}</style>");
            return true;
	}
}
// Ticker main run loop
function runTheTicker()
{
	var myTimeout;
	// Go for the next story data block
	if(theCurrentLength == 0)
	{
		theCurrentStory++;
		theCurrentStory      = theCurrentStory % theItemCount;
		theStorySummary      = theSummaries[theCurrentStory].replace(/&quot;/g,'"');
		theTargetLink        = theSiteLinks[theCurrentStory];
		theAnchorObject.href = theTargetLink;
		thePrefix 	     = "<span class=\"tickls\">" + theLeadString + "</span>";
	}
	// Stuff the current ticker text into the anchor
	theAnchorObject.innerHTML = thePrefix +
	theStorySummary.substring(0,theCurrentLength) + whatWidget();
	// Modify the length for the substring and define the timer
	if(theCurrentLength != theStorySummary.length)
	{
		theCurrentLength++;
		myTimeout = theCharacterTimeout;
	}
	else
	{
		theCurrentLength = 0;
		myTimeout = theStoryTimeout;
	}
	// Call up the next cycle of the ticker
	setTimeout("runTheTicker()", myTimeout);
}
// Widget generator
function whatWidget()
{
	if(theCurrentLength == theStorySummary.length)
	{
		return theWidgetNone;
	}

	if((theCurrentLength % 2) == 1)
	{
		return theWidgetOne;
	}
	else
	{
		return theWidgetTwo;
	}
}
// -->
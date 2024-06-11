!function(a){"use strict";var t,o,n=0,i=0,s=0,r=[],l=[],c="",d=!1;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(d=!0),/iPhone|iPad|iPod/i.test(navigator.userAgent),a(".image-back-offset-shadow, .vertical-counter, .counter, .progress-bar, .pie-chart-style-01, .pie-chart-style-02").each(function(){a(this).appear().trigger("resize")}),a("nav.navbar li.dropdown.megamenu").on("touchstart mouseenter click",function(t){var o=A();if(o>991){var n=a(this).children(".dropdown-menu");n.css({left:""}),parseInt(n.css("padding-left"));var i=a(this).position().left,s=a(this).outerWidth(),r=a(".navbar-collapse").offset().left,l=n.outerWidth(),c=i+s/2-l/2,d=o-r;c+r<0?c=30-r:c+l>d&&(c=d-l-30),n.css({})}else a(this).children(".dropdown-menu").css({right:"",left:""})}),a(".counter").each(function(t){var o=a(this);t=a.extend({},t||{},o.data("countToOptions")||{}),o.countTo(t)}),Y(),M(),H(),L(2e3),I(),Z(),T(),z(),a(".fit-videos").fitVids(),a("[data-scroll-options]").each(function(){var t=a(this),o=t.attr("data-scroll-options")||'{ "theme": "dark" }';null!=o&&(o=a.parseJSON(o),t.mCustomScrollbar(o))}),a(document).on("click",".html-video-play",function(){var t=a(this).parents("section").find(".video-bg");!1===a(this).is("[playing]")?(t.trigger("play"),a(this).attr("playing","true")):(t.trigger("pause"),a(this).removeAttr("playing"))}),a(".price-filter").length>0&&(a(".price-filter").slider({range:!0,animate:!0,min:0,max:4e3,step:1,values:[1,3999],slide:function(t,o){a(".price-amount").val("$"+o.values[0]+" - $"+o.values[1]),a(document.body).trigger("price_slider_change",[o.values[0],o.values[1]])}}),a(".price-amount").val("$"+a(".price-filter").slider("values",0)+" - $"+a(".price-filter").slider("values",1))),a(".image-back-offset-shadow").length>0&&a(document).on("appear",".image-back-offset-shadow",function(t){a(".image-back-offset-shadow").addClass("active")}),a(".vertical-counter").each(function(){for(var t=a(this),o=t.attr("data-to"),n=o.toString().split(""),i=o.length,s=0;s<i;s++)t.append('<span class="vertical-counter-number"><ul><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul></span>');t.find(".vertical-counter-number").each(function(t){a(this).attr("data-to",n[t])})}),a(".vertical-counter").length>0&&a(document).on("appear",".vertical-counter",function(t){a(window).scrollTop()+D()>=a(".vertical-counter").offset().top&&a(this).find(".vertical-counter-number").each(function(){var t=a(this),o=t.attr("data-to"),n=t.find("li").height();t.height(n),o<=9&&t.find("ul").css({transform:"translateY(-"+10*o+"%)"})})}),a(".counter").length>0&&a(document).on("appear",".counter",function(t){var o=a(this);if(!o.hasClass("appear")){var n=o.data("countToOptions")||{};o.countTo(n),o.addClass("appear")}}),a(".progress-bar").length>0&&a(document).on("appear",".progress-bar",function(t){if(!a(this).hasClass("appear")){a(this).addClass("appear");var o=a(this).attr("aria-valuenow");a(this).animate({width:o+"%"},{duration:300,easing:"swing",progress:function(t,n,i){var s=parseInt(o*n);a(this).find("span").html(s+"%")}})}}),a(".pie-chart-style-01").length>0&&a(document.body).on("appear",".pie-chart-style-01",function(n){a(".pie-chart-style-01").easyPieChart({trackColor:"#232323",scaleColor:"",lineCap:"round",lineWidth:10,size:180,barColor:function(){t=a(this.el).attr("data-start-color")||a(this.el).attr("data-bar-color")||"#000",o=a(this.el).attr("data-end-color")||a(this.el).attr("data-bar-color")||"#000";var n=this.renderer.getCtx(),i=this.renderer.getCanvas(),s=n.createLinearGradient(0,0,i.width,270);return s.addColorStop(.2,t),s.addColorStop(0,o),s},animate:{duration:2e3,enabled:!0},onStep:function(t,o,n){a(this.el).find(".percent").text(Math.round(n)+"%")}})}),a(".pie-chart-style-02").length>0&&a(document.body).on("appear",".pie-chart-style-02",function(n){a(".pie-chart-style-02").easyPieChart({trackColor:"#232323",scaleColor:"",lineCap:"round",lineWidth:10,size:140,barColor:function(){t=a(this.el).attr("data-start-color")||a(this.el).attr("data-bar-color")||"#000",o=a(this.el).attr("data-end-color")||a(this.el).attr("data-bar-color")||"#000";var n=this.renderer.getCtx(),i=this.renderer.getCanvas(),s=n.createLinearGradient(0,0,i.width,270);return s.addColorStop(.2,t),s.addColorStop(0,o),s},animate:{duration:2e3,enabled:!0},onStep:function(t,o,n){a(this.el).find(".percent").text(Math.round(n)+"%")}})}),a(document).on("click",".qty-plus",function(t){t.preventDefault();var o=a(this).attr("data-field"),n=parseInt(a(this).closest(".quantity").find("input[name="+o+"]").val());isNaN(n)?a(this).closest(".quantity").find("input[name="+o+"]").val(0):a(this).closest(".quantity").find("input[name= "+o+"]").val(n+1),a(this).closest(".quantity").find(".input-text").trigger("change")}),a(document).on("click",".qty-minus",function(t){t.preventDefault();var o=a(this).attr("data-field"),n=parseInt(a(this).closest(".quantity").find("input[name= "+o+"]").val());!isNaN(n)&&n>0?a(this).closest(".quantity").find("input[name="+o+"]").val(n-1):a(this).closest(".quantity").find("input[name="+o+"]").val(0),a(this).closest(".quantity").find(".input-text").trigger("change")}),a('[data-bs-toggle="tooltip"]').length>0&&[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(a){return new bootstrap.Tooltip(a)}),a(".tilt-box").length>0&&!d&&a(".tilt-box").each(function(){var t=a(this),o=t.attr("data-tilt-options")||'{ "maxTilt": 20, "perspective": 1000, "easing": "cubic-bezier(.03,.98,.52,.99)", "scale": 1, "speed": 500, "transition": true, "reset": true, "glare": false, "maxGlare": 1 }';null!=o&&(o=a.parseJSON(o),t.tilt(o))}),a(".justified-gallery").length>0&&a(".justified-gallery").each(function(){var t=a(this),o=t.attr("data-justified-options")||'{ "rowHeight": 500, "maxRowHeight": false, "captions": true, "margins": 15, "waitThumbnailsLoad": true }';null!=o&&t.imagesLoaded(function(){o=a.parseJSON(o),t.justifiedGallery(o)})}),d||(a(document).on("mousemove",".jg-entry",function(t){var o=a(this).width(),n=a(this).find(".jg-caption").width(),i=a(this).find(".caption").html(),s=a(this).offset(),r=t.pageX-s.left+20,l=t.pageY-s.top;r+n+30>o&&(r=r-n-65),a(this).css("overflow","visible"),a(this).find(".jg-caption").html(i).show().css({left:r+"px",right:"auto",top:l+"px",bottom:"auto"})}),a(document).on("mouseleave",".jg-entry",function(t){a(this).css("overflow"," "),a(this).find(".jg-caption").hide().css({left:" ",right:" ",top:" ",bottom:" "})})),a(".accordion-event").each(function(){var t=a(this),o=t.attr("data-active-icon")||"",n=t.attr("data-inactive-icon")||"";a(".collapse",this).on("show.bs.collapse",function(){var t=a(this).attr("id");a('a[href="#'+t+'"]').closest(".panel-heading").addClass("active-accordion"),a('a[href="#'+t+'"] .panel-title i').addClass(o).removeClass(n)}).on("hide.bs.collapse",function(){var t=a(this).attr("id");a('a[href="#'+t+'"]').closest(".panel-heading").removeClass("active-accordion"),a('a[href="#'+t+'"] .panel-title i').addClass(n).removeClass(o)})}),a(".checkout-accordion label input").on("click",function(t){var o=a(this).parent().find("a").attr("href");a(this).prop("checked")?a(o).collapse("show"):a(o).collapse("hide")}),a('a[data-bs-toggle="tab"]').on("shown.bs.tab",function(t){a(".tab-content .accordion-event").each(function(){a(".collapse",this).collapse("hide")}),W(r,!0)}),a(".countdown").each(function(){var t=a(this);t.countdown(t.attr("data-enddate")).on("update.countdown",function(a){t.html(a.strftime('<div class="countdown-container"><div class="countdown-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="countdown-box"><div class="number">%H</div><span>Hours</span></div><div class="countdown-box"><div class="number">%M</div><span>Minutes</span></div><div class="countdown-box last"><div class="number">%S</div><span>Seconds</span></div></div>'))})}),a(".wow").length>0&&(c=new WOW({boxClass:"wow",animateClass:"animate__animated",offset:30,mobile:!1,live:!0}),a(document).imagesLoaded(function(){c.init()})),a(".portfolio-wrapper").each(function(){var t=a(this);!t.find(".wow").length>0&&t.find(".grid-item").css("visibility","hidden"),t.imagesLoaded(function(){!t.find(".wow").length>0?t.find(".grid-item").css("visibility",""):d||t.find(".grid-item").css("visibility","hidden"),t.removeClass("grid-loading"),t.isotope({layoutMode:"masonry",itemSelector:".grid-item",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}}),r.push(t)})}),a(document).on("click",".portfolio-filter > li > a",function(){var t=a(this),o=t.parents("section");o.find(".portfolio-filter > li").removeClass("active"),t.parent().addClass("active");var n=t.attr("data-filter"),i=o.find(".portfolio-wrapper");return q(i),i.isotope({filter:n}),!1}),a(".blog-wrapper").each(function(){var t=a(this);!t.find(".wow").length>0&&t.find(".grid-item").css("visibility","hidden"),t.imagesLoaded(function(){!t.find(".wow").length>0?t.find(".grid-item").css("visibility",""):d||t.find(".grid-item").css("visibility","hidden"),t.removeClass("grid-loading"),t.isotope({layoutMode:"masonry",itemSelector:".grid-item",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}}),r.push(t)})}),a(document).on("click",".blog-filter > li > a",function(){var t=a(this),o=t.parents("section");o.find(".blog-filter > li").removeClass("active"),t.parent().addClass("active");var n=t.attr("data-filter"),i=o.find(".blog-wrapper");return q(i),i.isotope({filter:n}),!1}),a(".shop-wrapper").each(function(){var t=a(this);!t.find(".wow").length>0&&t.find(".grid-item").css("visibility","hidden"),t.imagesLoaded(function(){!t.find(".wow").length>0?t.find(".grid-item").css("visibility",""):d||t.find(".grid-item").css("visibility","hidden"),t.removeClass("grid-loading"),t.isotope({layoutMode:"masonry",itemSelector:".grid-item",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}}),r.push(t)})}),a(document).on("click",".shop-filter > li > a",function(){var t=a(this),o=t.parents("section");o.find(".shop-filter > li").removeClass("active"),t.parent().addClass("active");var n=t.attr("data-filter"),i=o.find(".shop-wrapper");return q(i),i.isotope({filter:n}),!1}),document.querySelectorAll(".instafeed-wrapper").forEach(function(t,o){var n="IGQWRONUZA1alpfTlRaZAVVUWnc5S3VwbklrZADVsYVgwTHBGZAXYzTEs2ZAXE4V25FQTRxY2oyYzdXYlcxbDV4YmVCblhsRHZAXT01IRDFjNlBTQW1hMU5IZAUJCX25IQ3luV1VXbmszTTZAXZAFFaNnhuZAndfZAWJ0Y25iVU0ZD",i=a(t),s=(n=i.attr("data-token")||n,i.attr("data-total")||"6"),l=i.attr("data-slider-options"),c=i.html(),p="";null!=l&&i.html(""),a.ajax({url:"https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp,permalink,thumbnail_url&access_token="+n,type:"GET",success:function(o){for(var n in p+=i.find(".grid-item").length>0?'<li class="grid-sizer"></li>':"",o.data)if(n<parseInt(s)&&"IMAGE"==o.data[n].media_type){var h=o.data[n].permalink||"",u=o.data[n].media_url||"",f=o.data[n].like_count||"",m=o.data[n].comments_count||"",g=c;p+=g=(g=(g=(g=(g=(g=(g=(g=g.replace(' href="#"',"")).replace(' src="#"',"")).replace("data-href","href")).replace("data-src","src")).replace("{{link}}",h)).replace("{{image}}",u)).replace("{{likes}}",f)).replace("{{comments}}",m)}if(i.html(p),null!=l){var v=a.parseJSON(l),b=t.parentElement;new Swiper(b,v)}else!i.find(".wow").length>0&&i.find(".grid-item").css("visibility","hidden"),i.imagesLoaded(function(){!i.find(".wow").length>0?i.find(".grid-item").css("visibility",""):d||i.find(".grid-item").css("visibility","hidden"),i.removeClass("grid-loading"),i.isotope({layoutMode:"masonry",itemSelector:".grid-item",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}}),r.push(i)})},error:function(a){i.append('<div class="col-12"><span class=text-center>No Images Found</span></div>')}})}),a(".fullscreen-hover-list .hover-list-item").length>0){var p=d?"click":"mouseover";a(document).on(p,".fullscreen-hover-list .hover-list-item a",function(t){if(!a(this).parent().hasClass("active"))return a(".fullscreen-hover-list .hover-list-item").removeClass("active"),a(this).parent().addClass("active"),!1})}if(a(".portfolio-colorful").length>0)for(var h=a(".portfolio-colorful").find(".grid-item").length,u=a(".portfolio-colorful").attr("data-backgroundcolor")||"#2e94eb",f=a(".portfolio-colorful").attr("data-opacity")||1,m=(w=u.split(",")).length,g=0;g<h;g++){var v=w[g],b="rgba("+parseInt(v.slice(-6,-4),16)+","+parseInt(v.slice(-4,-2),16)+","+parseInt(v.slice(-2),16)+","+f+")";a(".portfolio-colorful").find(".portfolio-hover:eq("+g+")").css("background-color",b),m<h&&w.push(w[g])}if(a(".page-title-colorful").length>0){var $,w=(u=a(".page-title-colorful").attr("data-backgroundcolor")||"#2e94eb").split(","),C=(m=(w=u.split(",")).length,1);a(".page-title-colorful").css({"background-color":w[0]}),setInterval(function(){$=w[C],a(".page-title-colorful").css({"background-color":$}),++C===m&&(C=0)},5e3)}a(document).on("click",".search-form-icon",function(t){t.preventDefault(),a(this).parents(".top-bar").length>0&&a("body").addClass("show-search-popup-mini-header"),a(".search-form-wrapper").addClass("active-form"),a("body").addClass("show-search-popup")}),a(document).on("click",".search-close",function(t){t.preventDefault(),a(".search-form-wrapper").removeClass("active-form"),a(this).parents(".top-bar").length>0&&a("body").removeClass("show-search-popup-mini-header"),a("body").removeClass("show-search-popup")}),a(document).on("click",".search-button",function(){var t=!0,o=a(this).parents("form");return o.find("input[type=text]").each(function(n){var i=a(this).val();null===i||""===i?(o.find("input:eq("+n+")").addClass("search-error"),t=!1):o.find("input:eq("+n+")").removeClass("search-error")}),t}),a(document).on("click",".header-push-button .push-button",function(){a("body").toggleClass("show-menu"),a("body").toggleClass("hamburger-show-menu")}),a(document).on("click",".close-menu",function(){S||(S=!0,setTimeout(function(){S=!1},500),a("body").removeClass("show-menu").removeClass("left-classic-mobile-menu"),a(".sub-menu-item").collapse("hide"),a(".menu-list-item.open").removeClass("show"))}),a(document).on("touchstart click",".show-menu",function(t){a(t.target).hasClass("push-button")||a(t.target).closest(".push-button").length||a(t.target).closest(".push-menu").length||a(t.target).closest(".hamburger-menu").length||a(".close-menu").trigger("click")}),a(document).on("click",".side-menu-button",function(){a("body").toggleClass("show-menu"),a(".left-sidebar-wrapper").length>0&&991>=A()&&a("body").toggleClass("left-classic-mobile-menu"),a(".sub-menu-item").collapse("hide"),a(".menu-list-item.open").removeClass("show")}),a(document).on("keydown",function(t){27===t.keyCode&&(a(".close-menu").trigger("click"),a(window).trigger("closemenu"))}),a(document).on("click",".scroll-top-arrow",function(){return a("html, body").animate({scrollTop:0},800),!1}),a("a.scrollto").bind("click.smoothscroll",function(t){t.preventDefault();var o=this.hash;0!==a(o).length&&a("html, body").stop().animate({scrollTop:a(o).offset().top},1200,"easeInOutExpo",function(){window.location.hash=o})}),a(".navbar-reverse-scroll").length>0?a(".inner-link").smoothScroll({speed:900,offset:0,beforeScroll:function(){a(".navbar-collapse.collapse").collapse("hide")}}):a(".inner-link").smoothScroll({speed:900,offset:-59,beforeScroll:function(){a(".navbar-collapse.collapse").collapse("hide")}}),a(".section-link").smoothScroll({speed:900,offset:1,beforeScroll:function(){a(".navbar-collapse.collapse").collapse("hide")}}),a("#subscribe-popup").length>0&&"shown"!=function(a){for(var t="litho-promo-popup=",o=decodeURIComponent(document.cookie).split(";"),n=0;n<o.length;n++){for(var i=o[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}()&&setTimeout(function(){a.magnificPopup.open({showCloseBtn:!1,items:{src:"#subscribe-popup"},type:"inline",mainClass:"my-mfp-zoom-in",callbacks:{close:function(){a("#newsletter-off").is(":checked")&&J("litho-promo-popup","shown",30)}}})},1e3),a(".notify-form-button").magnificPopup({mainClass:"mfp-notify",closeOnBgClick:!0,preloader:!1,fixedContentPos:!1,removalDelay:100,closeBtnInside:!1,callbacks:{open:function(){setTimeout(function(){a(".notify-input").focus()},100),a("#notify_form").parent().addClass("notify-popup"),a("#notify_form").parents("body").addClass("show-notify-popup")},close:function(){a("body").removeClass("show-notify-popup")}}}),a(".lightbox-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-fade",fixedContentPos:!0,closeBtnInside:!1,gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}});var y={};a(".lightbox-group-gallery-item").each(function(){var t=a(this).attr("data-group");y[t]||(y[t]=[]),y[t].push(this)}),a.each(y,function(){a(this).magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,gallery:{enabled:!0}})}),a(".lightbox-portfolio").magnificPopup({delegate:".gallery-link",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-fade",fixedContentPos:!0,closeBtnInside:!1,closeOnContentClick:!0,gallery:{enabled:!0,navigateByImgClick:!1,preload:[0,1]}}),a(".single-image-lightbox").magnificPopup({type:"image",closeOnContentClick:!0,fixedContentPos:!0,closeBtnInside:!1,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),a(".zoom-gallery").magnificPopup({delegate:"a",type:"image",mainClass:"mfp-with-zoom mfp-img-mobile",fixedContentPos:!0,closeBtnInside:!1,image:{verticalFit:!0,titleSrc:function(a){return a.el.attr("title")}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}}}),a(".modal-popup").magnificPopup({type:"inline",preloader:!1,blackbg:!0}),a(document).on("click",".popup-modal-dismiss",function(t){t.preventDefault(),a.magnificPopup.close()}),a(".popup-with-zoom-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,blackbg:!0,mainClass:"my-mfp-zoom-in"}),a(".popup-with-move-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,blackbg:!0,mainClass:"my-mfp-slide-bottom"}),a(".popup-with-form").magnificPopup({type:"inline",preloader:!1,closeBtnInside:!1,fixedContentPos:!0,focus:"#name",callbacks:{beforeOpen:function(){700>A()?this.st.focus=!1:this.st.focus="#name"}}}),a(".popup-youtube, .popup-vimeo").magnificPopup({disableOn:0,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0,closeBtnInside:!1}),a(".popup-googlemap").magnificPopup({disableOn:0,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0,closeBtnInside:!1}),a(".ajax-popup").magnificPopup({type:"ajax",alignTop:!0,fixedContentPos:!0,closeBtnInside:!1,overflowY:"scroll",callbacks:{open:function(){a(".navbar .collapse").removeClass("show"),a(".navbar a.dropdown-toggle").addClass("collapsed")}}}),a(document).on("click",".submit",function(){var t=!1,o=!1,n=a(this),i=n.parents("form"),s=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,r=/[0-9 -()+]+$/,l=(i.attr("action"),i.find(".form-results"),n.attr("data-sitekey")||"");i.find('[name="redirect"]').val(),i.find(".required").removeClass("error"),i.find(".required").each(function(){var o=a(this),n=o.val();""==n||null==n?(t=!0,o.addClass("error")):("email"!=o.attr("type")||s.test(n))&&("tel"!=o.attr("type")||r.test(n))||(t=!0,o.addClass("error"))});var c=i.find(".terms-condition");return c.length>0&&(c.is(":checked")||(t=!0,c.addClass("error"))),"undefined"!=typeof grecaptcha&&null!==grecaptcha&&(i.find(".g-recaptcha").length>0?grecaptcha.getResponse().length||(t=!0,i.find(".g-recaptcha").addClass("error")):""!=l&&null!=l&&(o=!0,i.find("input[name=action],input[name=g-recaptcha-response]").remove(),grecaptcha.ready(function(){grecaptcha.execute(l,{action:"subscribe_newsletter"}).then(function(a){i.prepend('<input type="hidden" name="g-recaptcha-response" value="'+a+'">'),i.prepend('<input type="hidden" name="action" value="subscribe_newsletter">'),t||E(n)})}))),t||o||E(n),!1}),a(document).on("blur",".required",function(){var t=a(this).val();""==t||null==t?a(this).addClass("error"):("email"!=a(this).attr("type")||/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(t))&&("tel"!=a(this).attr("type")||/[0-9 -()+]+$/.test(t))?a(this).removeClass("error"):a(this).addClass("error")}),a(document).on("click",".terms-condition",function(){var t=a(this);t.is(":checked")?t.removeClass("error"):t.addClass("error")});var k=window.location.href.substr(window.location.href.lastIndexOf("/")+1),_=window.location.hash.substring(1);_?(_="#"+_,k=k.replace(_,"")):k=k.replace("#",""),a(".navbar-nav li a, .menu-list a").each(function(){var t=a(this),o=t.attr("href");o!==k&&o!==k+".html"||(t.addClass("active"),t.parent().addClass("active"),t.parents("li.dropdown").addClass("active"),t.parents("li.menu-list-item").addClass("active"))});var x=a("body").attr("data-mobile-nav-style");if(("modern"==x||"full-screen-menu"==x)&&!a(".navbar-"+x+"-inner").length){if(!a(".box-layout").length>0&&"modern"==x?a("section, footer").wrapAll('<div class="page-layout"></div>'):a("section").wrapAll('<div class="page-layout"></div>'),a(".navbar .navbar-toggler").clone(!0).addClass("navbar-toggler-clone").insertAfter(".page-layout"),a(".navbar .navbar-collapse").clone(!0).addClass("navbar-collapse-clone").attr("id","navbarNav-clone").insertAfter(".page-layout"),a(".navbar-toggler-clone, .navbar-collapse-clone").wrapAll('<div class="navbar-'+x+'-inner"></div>'),a(".navbar-toggler").attr("data-bs-target","#navbarNav-clone").attr("aria-controls","#navbarNav-clone"),a(".navbar-"+x+"-inner").find(".dropdown-toggle").addClass("dropdown-toggle-clone"),a(".navbar-collapse-clone").length>0){var P=a(".navbar-collapse-clone").attr("data-scroll-options")||'{ "theme": "light" }';null!=P&&(P=a.parseJSON(P),a(".navbar-collapse-clone").mCustomScrollbar(P))}"modern"==x&&a('<div class="navbar-show-modern-bg"></div>').insertAfter(".page-layout")}a(document).on("touchstart click","body",function(t){a(t.target).closest(".navbar-nav").length?a(t.target).parents(".show-menu").length?a(".close-menu").trigger("click"):a(t.target).parents("body").find(".header-language.open").length?(a(".header-language").trigger("mouseleave"),a(".header-language").removeClass("show"),a(".header-language").children(".dropdown-menu").removeClass("show")):a(t.target).parents("body").find(".header-cart-icon.open").length&&(a(".header-cart-icon").trigger("mouseleave"),a(".header-cart-icon").removeClass("show"),a(".header-cart-icon").children(".dropdown-menu").removeClass("show")):(a(t.target).closest(".header-language").length||(a(".header-language").trigger("mouseleave"),a(".header-language").removeClass("show"),a(".header-language").children(".dropdown-menu").removeClass("show")),a(t.target).closest(".header-cart-icon").length||(a(".header-cart-icon").trigger("mouseleave"),a(".header-cart-icon").removeClass("show"),a(".header-cart-icon").children(".dropdown-menu").removeClass("show")),a(".navbar-nav .dropdown").each(function(){var t=a(this);t.trigger("mouseleave"),t.removeClass("show"),t.children(".dropdown-menu").removeClass("show")}),a('[data-mobile-nav-style="classic"] .navbar-collapse').collapse("hide"),!a(t.target).closest(".theme-demos").length&&a(".theme-demos").hasClass("active")&&(a(".theme-demos").removeClass("active"),a("body").removeClass("overflow-hidden"))),!a(t.target).parents("header")&&d&&a(".header-language, .header-cart-icon").each(function(){var t=a(this);t.trigger("mouseleave"),t.removeClass("show"),t.children(".dropdown-menu").removeClass("show")}),(0===a(t.target).closest(".search-form-wrapper").length||a(t.target).is(".form-wrapper"))&&(a(".search-form-wrapper").removeClass("active-form"),a("body").removeClass("show-search-popup"))}),a('[data-mobile-nav-style="classic"] .navbar-collapse.collapse').on("show.bs.collapse",function(){a("body").hasClass("navbar-collapse-show")||a("body").addClass("navbar-collapse-show")}).on("hide.bs.collapse",function(){a("body").hasClass("navbar-collapse-show")&&a("body").removeClass("navbar-collapse-show")}),a(".navbar-collapse-clone").on("show.bs.collapse",function(){if(a("body").hasClass("navbar-collapse-show"))a(".navbar-modern-inner").length>0&&setTimeout(function(){a(".navbar-show-modern-bg").css("background","")},600),a(".navbar-full-screen-menu-inner").length>0&&setTimeout(function(){a(".navbar-full-screen-menu-inner").css("background","")},600);else{if(a("body").addClass("navbar-collapse-show"),a("html").addClass("overflow-hidden"),a("body").attr("data-mobile-nav-bg-color")&&a(".navbar-modern-inner").length>0){var t=a("body").attr("data-mobile-nav-bg-color");a(".navbar-show-modern-bg").css("background",t)}a("body").attr("data-mobile-nav-bg-color")&&a(".navbar-full-screen-menu-inner").length>0&&(t=a("body").attr("data-mobile-nav-bg-color"),a(".navbar-full-screen-menu-inner").css("background",t))}var o=j(),n=D();a(".navbar-modern-inner").length>0||a(".navbar-full-screen-menu-inner").length>0?a(this).css("max-height",n):a(this).css("max-height",n-o)}).on("hide.bs.collapse",function(){a("body").hasClass("navbar-collapse-show")&&(a("body").removeClass("navbar-collapse-show"),a("html").removeClass("overflow-hidden"))}),a(".menu-toggle").each(function(t){var o=a(this);o.addClass("collapsed").attr({"data-bs-toggle":"collapse","data-bs-target":"#sub-menu-"+t}),o.parent().find(".sub-menu-item").attr("id","sub-menu-"+t).addClass("collapse")}),a(".left-sidebar-wrapper").length>0&&a(".left-sidebar-wrapper .left-sidebar-nav").stick_in_parent({recalc:1,bottoming:!1}),a(document).on("click",".menu-list > .menu-list-item > .menu-toggle",function(){a(".sub-menu-item").each(function(){a(this).collapse("hide")}),a(".left-sidebar-wrapper .left-sidebar-nav").parents("body").addClass("left-classic-mobile-menu"),setTimeout(function(){a(".left-sidebar-wrapper").trigger("sticky_kit:recalc")},500)}),a(document).on("click",".sub-menu-item > .menu-list-item > .menu-toggle",function(t){t.preventDefault(),a(this).parent().find(".sub-menu-item");var o=a(this).attr("data-bs-target");a(this).parent().parent(".sub-menu-item").find(".sub-menu-item").each(function(){var t=a(this);t.parent().find(".menu-toggle").attr("data-bs-target")!=o&&t.collapse("hide")}),a(".left-sidebar-wrapper .left-sidebar-nav").parents("body").addClass("left-classic-mobile-menu"),setTimeout(function(){a(".left-sidebar-wrapper").trigger("sticky_kit:recalc")},500)}),a(document).on("click","#mobileToggleSidenav",function(t){t.preventDefault(),a(this).closest("nav").toggleClass("sidemenu-open")});var S=!1;function I(){var t=a(window).scrollTop(),o=a(".navbar-nav li a");o.each(function(){var n=a(this),i=n.attr("href").indexOf("#");if(i>-1){var s=n.attr("href").substring(i);if(""!=s&&"#"!=s&&a(s).length>0){var r=a(n.attr("href"));r.position().top<=t+60&&r.position().top+r.height()>t+60&&(o.removeClass("active"),n.addClass("active")),t<1&&n.removeClass("active")}}});var i=0,s=0;a("nav").length>0&&(i=a("nav").outerHeight()),a(".top-bar").length>0&&(s=a(".top-bar").outerHeight());var r=i+s;if(a("header").hasClass("no-sticky")||(t>=r?(a("header").addClass("sticky"),a(".header-with-topbar .top-bar").is(":hidden")||(a(".header-with-topbar .top-bar").css({top:"-"+s+"px"}),a(".header-with-topbar .fixed-top").css({top:"0px"}))):t<=r&&(a(".header-with-topbar .top-bar").css({top:"0px"}),a(".header-with-topbar .fixed-top").css({top:s+"px"}),a("header").removeClass("sticky"),a("header").hasClass("sticky")||setTimeout(function(){V()},200))),a("nav.header-always-fixed-scroll").length<=0){var l=t;l>n?(l-=1,a(".sticky").removeClass("header-appear"),a(".dropdown.on").removeClass("on").removeClass("show").find(".dropdown-menu").fadeOut(100)):a(".sticky").addClass("header-appear"),(n=l)<=i&&a("header").removeClass("header-appear")}t>=200&&A()>991&&(a(".navbar-collapse").hasClass("show")&&a(".navbar-collapse").removeClass("show"),a("body").hasClass("navbar-collapse-show")&&(a("body").removeClass("navbar-collapse-show"),a("html").removeClass("overflow-hidden"))),t>150?(a(".scroll-top-arrow").fadeIn("300"),!a(".show-theme-demos").length&&A()>1199&&a(".theme-demos").fadeIn("300")):a(".scroll-top-arrow").fadeOut("300")}function O(a){return a<10?"0"+a.toString():a.toString()}function A(){return a(window).width()}function D(){return a(window).height()}function T(){document.querySelectorAll(".swiper-container:not( .instafeed-wrapper )").forEach(function(t,o){var n=a(t),i=n.attr("data-slider-options");if(null!=i){i=a.parseJSON(i);var s=n.attr("data-slider-md-direction");if(""!=s&&null!=s){var r=""!=i.direction&&null!=i.direction?i.direction:s;i.on={init:function(){991>=A()?this.changeDirection(s):this.changeDirection(r),this.update()},resize:function(){991>=A()?this.changeDirection(s):this.changeDirection(r),this.update()}}}if(""!=i.thumbs&&null!=i.thumbs){var c=n.attr("data-thumb-slider-md-direction");if(""!=c&&null!=c){var d=""!=i.thumbs.swiper.direction&&null!=i.thumbs.swiper.direction?i.thumbs.swiper.direction:c;i.thumbs.swiper.on={init:function(){991>=A()?this.changeDirection(c):this.changeDirection(d),this.update()},resize:function(){991>=A()?this.changeDirection(c):this.changeDirection(d),this.update()},click:function(){this.activeIndex==this.clickedIndex?this.slidePrev():this.slideNext()}}}}var p=n.attr("data-slider-number-pagination");""!=p&&null!=p&&(i.on.slideChange=function(){a(".swiper-pagination-current").length>0&&a(".swiper-pagination-current").html(O(this.realIndex+1)),a(".swiper-pagination-total").length>0&&a(".swiper-pagination-total").html(O(this.slides.length-2))});var h=n.attr("data-slide-change-on-click");""!=h&&null!=h&&(i.on={click:function(){this.activeIndex>this.clickedIndex?this.slidePrev():this.activeIndex<this.clickedIndex&&this.slideNext()}});var u=n.attr("data-thumbs");""!=u&&null!=u&&null!=(u=a.parseJSON(u))&&(i.pagination.renderBullet=function(a,t){return'<span class="'+t+'" style="background-image: url( '+u[a]+' )"></span>'});var f=new Swiper(t,i);l.push(f)}})}function z(){for(var a=0;a<l.length;a++){var t=l[a],o=t.$el.attr("data-slider-destroy");""!=o&&null!=o&&(A()<=o?t.destroy(!1,!0):t.destroyed&&(l.splice(a,1),T()))}}function B(){setTimeout(function(){for(var a=0;a<l.length;a++)l[a].update()},500)}function q(t){t.find(".grid-item").removeClass("animate__animated").css("visibility",""),a(".wow").length>0&&t.find(".grid-item").each(function(){var t=a(this);c.removeBox(this),t.css("-webkit-animation","none"),t.css("-moz-animation","none"),t.css("-ms-animation","none"),t.css("animation","none")})}function W(a,t){for(var o=0;o<a.length;o++)t&&q(a[o]),a[o].data("isotope")&&a[o].isotope("layout")}function H(){(a(".overlap-section").length>0||a(".overlap-section-one-fourth").length>0||a(".overlap-section-three-fourth").length>0)&&A()>=768?a(".overlap-section, .overlap-section-one-fourth, .overlap-section-three-fourth").each(function(){var t=a(this);setTimeout(function(){t.imagesLoaded(function(){var a=t.closest("section"),o=parseInt(a.css("padding-top")),n=t.find("*").outerHeight(),i=n+o;i=t.hasClass("overlap-section-one-fourth")?n/4-i:t.hasClass("overlap-section-three-fourth")?3*n/4-i:n/2-i,t.css("margin-top",i);var s=a.prev("section.overlap-height"),r=s.find(".overlap-gap-section");s.imagesLoaded(function(){if(r.length>0){var a=r.outerHeight()+(Math.abs(i)-o);r.parents("section.overlap-height").height(a)}})})},10)}):(a(".overlap-height").height(""),a(".overlap-section, .overlap-section-one-fourth, .overlap-section-three-fourth").css("margin-top",""))}function L(t){a(".overlap-section-bottom").length>0&&A()>=768?a(".overlap-section-bottom").each(function(){var o=a(this);setTimeout(function(){o.imagesLoaded(function(){var a=o.outerHeight();o.parents("section").next(".overlap-gap-section-bottom").css("margin-top",a/2-a),o.parents("section").next(".overlap-gap-section-bottom").css("padding-top",a)})},o.find(".instafeed-wrapper").length>0?t:10)}):(a(".overlap-gap-section-bottom").css("margin-top",""),a(".overlap-gap-section-bottom").css("padding-top",""))}function N(){window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./)||(a("[data-parallax-background-ratio]").each(function(){var t=a(this).attr("data-parallax-background-ratio")||.5;a(this).parallax("50%",t)}),a("[data-parallax-layout-ratio]").each(function(){var t=a(this).attr("data-parallax-layout-ratio")||1;a(this).parallaxImg(t)}))}function j(){var t=0;return a("header nav.navbar").length>0&&(t+=a("header nav.navbar").outerHeight()),a(".top-bar").length>0&&(t+=a(".top-bar").outerHeight()),a(".sidebar-nav-action").length>0&&991>=A()&&(t+=a(".sidebar-nav-action").outerHeight()),a(".side-menu-header").length>0&&991>=A()&&(t+=a(".side-menu-header").outerHeight()),t}function V(){var t=j();!a(".navbar").hasClass("no-sticky")&&(a(".navbar").hasClass("top-space")||a(".navbar").hasClass("mobile-top-space"))?a("body").css("padding-top",t+"px"):a("body").css("padding-top",""),a(".mobileoff-fullscreen-top-space").length>=0&&A()>1023&&a(".mobileoff-fullscreen-top-space").css("height",D()-t+"px"),a(".fullscreen-top-space").length>=0&&a(".fullscreen-top-space").css("height",D()-t+"px"),(a(".sidebar-nav-action").length>0||a(".side-menu-header").length>0)&&(991>=A()?a("body").css("padding-top",t+"px"):a("body").css("padding-top",""))}function Y(){var t=a(".full-screen"),o=D(),n=j();991>=A()?(a("header nav.navbar").addClass("mobile-top-space"),a(".sidebar-nav-action").addClass("mobile-top-space"),a(".side-menu-header").addClass("mobile-top-space")):(a("header nav.navbar").removeClass("mobile-top-space"),a(".sidebar-nav-action").removeClass("mobile-top-space"),a(".side-menu-header").removeClass("mobile-top-space")),t.parents("section").imagesLoaded(function(){a("section:first.full-screen, section:first .full-screen").length>0&&(a(".top-space").length>0||a(".mobile-top-space").length>0)?a("section:first.full-screen, section:first .full-screen").css("height",o-n):((a("header nav.navbar").hasClass("top-space")||a("header nav.navbar").hasClass("mobile-top-space"))&&(o-=a("header nav.navbar").outerHeight()),t.css("height",o))})}function Z(){if(a(".footer-sticky").length>0&&a(".footer-sticky").imagesLoaded(function(){var t=a(".footer-sticky").outerHeight();a(".main-content").css({"margin-bottom":t})}),a(".box-layout").length>0&&a(".footer-sticky").length>0){var t=a(".box-layout"),o=t.width();t.find(".footer-sticky").css({margin:"0 auto",width:o,"max-width":o})}}function J(a,t,o){var n=new Date;n.setTime(n.getTime()+24*o*36e5);var i=0!=o&&""!=o?n.toUTCString():0;document.cookie=a+"="+t+";expires="+i+";path=/"}function M(){N(),V(),a(".vertical-counter").each(function(){var t=a(this),o=t.css("font-size");t.css("height",o),t.find(".vertical-counter-number").each(function(){var t=a(this),o=t.find("li").height();t.height(o)})})}function E(t){var o=t.parents("form"),n=o.attr("action"),i=o.find(".form-results"),s=o.find('[name="redirect"]').val();""!=n&&null!=n&&(t.addClass("loading"),a.ajax({type:"POST",url:n,data:o.serialize(),success:function(n){console.log(n),t.removeClass("loading"),""!=s&&null!=s?window.location.href=s:(null!=n&&(n=a.parseJSON(n)),o.find("input[type=text],input[type=email],input[type=tel],input[type=password],textarea").each(function(){a(this).val(""),a(this).removeClass("error")}),o.find(".g-recaptcha").removeClass("error"),o.find("input[type=checkbox],input[type=radio]").prop("checked",!1),o.find(".g-recaptcha").length>0&&grecaptcha.reset(),o.find("input[name=action],input[name=g-recaptcha-response]").remove(),i.removeClass("alert-success").removeClass("alert-danger").hide(),i.addClass(n.alert).html(n.message),i.removeClass("d-none").fadeIn("slow").delay(4e3).fadeOut("slow"))}}))}a(document).on("click",".navbar-toggle",function(){A()>991&&(S?!a(".navbar-collapse").has(e.target).is(".navbar-collapse")&&a(".navbar-collapse ul").hasClass("show")&&(a(".navbar-collapse").find("a.dropdown-toggle").addClass("collapsed"),a(".navbar-collapse").find("ul.dropdown-menu").removeClass("show"),a(".navbar-collapse a.dropdown-toggle").removeClass("active")):(S=!0,setTimeout(function(){S=!1},500),a("body").addClass("show-menu")))}),a(".dropdown").on("mouseenter touchstart",function(t){var o=a(this);o.siblings(".dropdown").removeClass("open"),o.parents(".navbar-nav").siblings(".navbar-nav").find(".dropdown").removeClass("open"),o.addClass("open"),A()>991&&(function(a){var t=A();if(a.hasClass("simple-dropdown")){i=a,s=a.find("a.nav-link");var o=t-30-(a.offset().left+a.children(".dropdown-menu").outerWidth());o<0&&a.children(".dropdown-menu").css("left",o)}if(a.parent().hasClass("dropdown-menu")&&a.parents(".simple-dropdown")){var n=0,r=0,l=0,c=0;if(n=a.outerWidth()-s.outerWidth(),a.find(".dropdown-menu").each(function(){var t=[];a.find("li").hasClass("dropdown")?(n+=a.outerWidth(),a.find("li.dropdown").each(function(){var o=a.closest(".dropdown-menu");t.push(o.outerWidth())}),l=r=l+Math.max.apply(Math,t),n+=r,c+=1):c<1&&(n+=a.outerWidth())}),n>t-(i.offset().left+i.outerWidth())){if(a.find(".dropdown-menu").length>0){var d=a.position().top,p=a.find(".dropdown-menu"),h=d+p.outerHeight()+j(),u=D();h>u&&p.css("top","-"+(h-u)+"px")}a.addClass("menu-left")}}}(o),a(t.target).siblings(".dropdown-menu").length&&t.preventDefault())}).on("mouseleave",function(t){var o=a(this);o.removeClass("menu-left"),o.removeClass("open")}),a(document).on("click",".gdpr-policy-button",function(){a(".gdpr-wrapper").fadeOut().remove(),J("litho-gdpr-policy","shown",30)}),a("body:not( .landing )").append("</div></div> </section></div>"),a(document).on("click",".all-demo",function(){var t=a(this).parents(".theme-demos");if(t.hasClass("active"))t.removeClass("active"),a("body").removeClass("overflow-hidden");else{t.addClass("active"),a("body").addClass("overflow-hidden");var o=t.find(".demos-wrapper"),n=o.attr("data-scroll-options")||'{ "theme": "dark" }';null!=n&&(n=a.parseJSON(n),o.mCustomScrollbar(n))}}),a("img:not([data-at2x])").each(function(){a(this).attr("data-no-retina","")}),a(window).on("load",function(){N(),a(".page-loader").length>0&&a(".page-loader").fadeOut(),W(r,!1),B(),Z(),a(".rev-nav-ares-effect").length>0&&setTimeout(function(){a(".rev-nav-ares-effect .ares").css({opacity:"1"})},2e3),H(),L()}),a(window).resize(function(){Y(),z(),B(),Z(),setTimeout(function(){W(r,!0)},300),setTimeout(function(){M(),H(),L(100),I()},500)}),a(window).on("orientationchange",function(t){a(".close-menu").trigger("click"),a(window).trigger("closemenu")}),a(window).on("closemenu",function(t){a(".dropdown").each(function(){var t=a(this);t.trigger("mouseleave"),t.removeClass("show"),t.children(".dropdown-menu").removeClass("show")}),a(".navbar-collapse").hasClass("show")&&a(".navbar-collapse").removeClass("show"),a("body").hasClass("navbar-collapse-show")&&(a("body").removeClass("navbar-collapse-show"),a("html").removeClass("overflow-hidden")),a(".search-close").trigger("click"),a(".theme-demos").hasClass("active")&&a(".all-demo").trigger("click")}),a(window).on("scroll",I)}(jQuery);
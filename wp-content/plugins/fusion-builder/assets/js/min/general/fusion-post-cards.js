!function(i){"use strict";i.fn.awbAnimatePostCards=function(){"IntersectionObserver"in window?i.each(fusion.getObserverSegmentation(i(this)),function(n){var e=fusion.getAnimationIntersectionData(n),t=new IntersectionObserver(function(n,e){i.each(n,function(n,s){var o=i(s.target),a=0,r=o.attr("data-animationtype"),d=o.attr("data-animationduration"),u=parseInt(1e3*o.attr("data-animation-delay"),10);fusion.shouldObserverEntryAnimate(s,e)&&(o.find(".fusion-grid-column:not([data-awb-animation-finished])").each(function(){var n=i(this);setTimeout(function(){n.css("visibility","visible"),n.addClass(r),d&&(n.css("-moz-animation-duration",d+"s"),n.css("-webkit-animation-duration",d+"s"),n.css("-o-animation-duration",d+"s"),n.css("animation-duration",d+"s")),setTimeout(function(){n.removeClass(r),n.attr("data-awb-animation-finished","true")},1e3*d)},a),a+=u}),t.unobserve(s.target))})},e);i(this).each(function(){t.observe(this)})}):i(this).find(".fusion-grid-column").each(function(){i(this).css("visibility","visible")})}}(jQuery),jQuery(window).on("load fusion-element-render-fusion_post_cards",function(){jQuery("body").hasClass("fusion-builder-live-preview")||jQuery(".fusion-post-cards.fusion-delayed-animation").awbAnimatePostCards(),jQuery(".fusion-grid-container-infinite").each(function(i){var n,e,t,s=jQuery(this),o=jQuery(this).find(".post-card"),a="";n="",s.closest(".fusion-post-cards").length&&(n="."+s.parents(".fusion-post-cards").attr("class").replace(/\ /g,".")+" "),jQuery(s).infinitescroll({navSelector:n+".fusion-infinite-scroll-trigger",nextSelector:n+"a.pagination-next",itemSelector:n+".post-card",loading:{finishedMsg:fusionPostCardsVars.infinite_finished_msg,msg:jQuery('<div class="fusion-loading-container fusion-clearfix"><div class="fusion-loading-spinner"><div class="fusion-spinner-1"></div><div class="fusion-spinner-2"></div><div class="fusion-spinner-3"></div></div><div class="fusion-loading-msg">'+fusionPostCardsVars.infinite_text+"</div>")},maxPage:s.data("pages")?s.data("pages"):void 0,infid:"pc"+i,errorCallback:function(){s.find(".fusion-post-grid").css("height","")}},function(i,r,d){var u=d.split("/");u=u[u.length-2],fusionInitPostFlexSlider(),jQuery(i).each(function(){var i=!1;void 0!==jQuery(this)[0].outerHTML&&(i=(i=jQuery(this)[0].outerHTML).replace(/fusion-builder-column-/g,"fusion-builder-column-"+r.infid+"-"+u+"-").replace(/fusion-builder-nested-column-/g,"fusion-builder-nested-column-"+r.infid+"-"+u+"-"),jQuery(this)[0].outerHTML=i),jQuery(this).find(".full-video, .video-shortcode, .wooslider .slide-content").fitVids()}),t=(e=s).find(".current").html(),e.find(".current").remove(),e.data("pages")==t&&(e.parent().find(".fusion-loading-container").hide(),e.parent().find(".fusion-load-more-button").hide()),jQuery(i).find(".fusion-rollover-gallery").length&&("individual"!==fusionBlogVars.lightbox_behavior&&o.find(".fusion-rollover-gallery").length?(a=o.find(".fusion-rollover-gallery").first().data("rel"),o=s.find(".post"),void 0!==window.$ilInstances[a]&&(window.$ilInstances[a].destroy(),delete window.$ilInstances[a],window.avadaLightBox.activate_lightbox(o))):(window.avadaLightBox.activate_lightbox(jQuery(i)),o=s.find(".post")),window.avadaLightBox.refresh_lightbox()),setTimeout(function(){jQuery(window).trigger("resize",[!1])},500),!jQuery("body").hasClass("fusion-builder-live-preview")&&jQuery(n).hasClass("fusion-delayed-animation")?jQuery(n).awbAnimatePostCards():jQuery.isFunction(jQuery.fn.initElementAnimations)&&jQuery(window).initElementAnimations()}),(jQuery(s).hasClass("fusion-grid-archive")&&"load_more_button"===fusionPostCardsVars.pagination_type||jQuery(s).hasClass("fusion-grid-container-load-more"))&&(jQuery(s).infinitescroll("unbind"),(jQuery(s).hasClass("fusion-grid-archive")?jQuery(s).parent().find(".fusion-load-more-button"):jQuery(s).parents(".fusion-grid-archive").find(".fusion-load-more-button")).on("click",function(i){i.preventDefault(),jQuery(s).infinitescroll("retrieve")})),e=s,1===parseInt(e.data("pages"),10)&&(e.parent().find(".fusion-loading-container").hide(),e.parent().find(".fusion-load-more-button").hide())})});
$(document).ready(function() {
    
	$(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tabsMenuUl = $(this).closest("ul.tabs-menu");
        var tabContentId = tabsMenuUl.data('tab-content-id');
        var tab = $(this).attr("href");
        $("#" + tabContentId + " > .tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
	
	/*$(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
    $(".tabs-menu1 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content1").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
    $(".tabs-menu2 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content2").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
    $(".tabs-menu3 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content3").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
    $(".tabs-menu4 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content4").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    $(".tabs-menu5 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content5").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
    $(".tabs-menu6 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content6").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
    $(".tabs-menu7 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content7").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    $(".tabs-menu8 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content8").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
    $(".tabs-menu9 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content9").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
    $(".tabs-menu10 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content10").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
    $(".tabs-menu11 a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content11").not(tab).css("display", "none");
        $(tab).fadeIn();
    });*/
});
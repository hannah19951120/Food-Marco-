$(document).ready(function() {
    
    // 按鈕滑動
   $(".scrollBtn").bind("click",function(){
    event.preventDefault();
    var id=$(this).attr("data-scrollName");

    var target_top = $("#scroll"+id).offset().top; // 取得目標區塊的y座標
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          $body.animate({
                scrollTop: target_top
          }, 800);
    })
    
    // QA展開
    $('.question__list>li>a').click(function(){
        event.preventDefault();
        $(this).siblings().slideToggle();
        $(this).toggleClass('question__list--active');
        $(this).parent().siblings().find('.question__list_answer').slideUp();
        $(this).parent().siblings().find('a').removeClass('question__list--active');
    })


});
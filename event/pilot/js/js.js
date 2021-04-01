$(document).ready(function() {
    $('.hero__title').addClass('hero__title-clear')

    // 按鈕滑動
   $(".scrollBtn").bind("click",function(){
    event.preventDefault();
    let id=$(this).attr("data-scrollName");

    let target_top = $("#scroll"+id).offset().top; // 取得目標區塊的y座標
    let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          $body.animate({
                scrollTop: target_top
          }, 800);
    })
    

    

});
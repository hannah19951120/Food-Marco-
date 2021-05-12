$(document).ready(function() {
    // 按鈕滑動
   $(".scrollBtn,#calculatorScroll").bind("click",function(){
    event.preventDefault();

    let id=$(this).attr("data-scrollName");
    console.log(this);
    let target_top = $('#'+id).offset().top; // 取得目標區塊的y座標
    let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          $body.animate({
                scrollTop: target_top
          }, 800);
    })
    


});
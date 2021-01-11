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

    // Burger 手機選單
    $('.header__burger').click(function(){
        event.preventDefault();
        $(this).toggleClass('header__burger--active');
        $('.header__nav').toggleClass('header__nav--active');
    })

    // 首頁-精彩服務
    $('.service__listPc_card').click(function(){
        let serviceId = $(this).attr("data-service");
        console.log(serviceId);
        let serviceUrl = 'img/p_home/service_'+ serviceId +'.png';
        console.log(serviceUrl);
        $('#home-service-phone').attr('src',serviceUrl);
        
        if($(this).hasClass('service__listPc_card--active')){
            // console.log('none');
        }else{
            $(this).addClass('service__listPc_card--active');
            $(this).siblings().removeClass('service__listPc_card--active');
        }
    })

});
$(document).ready(function() {
    
    var swiperMB = new Swiper( '.swiper-container.two', {
        observer: true,
        observeParents: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionEnd: function(){
                onSwiperChange();
            },
            touchEnd: function(){
                onSwiperChange();        
            },
        },
        } ); 

    var serviceId;
    // PC 版點擊切換
    function servicePcClick (){
        $('.service__listPc_card').click(function(){
            var serviceId = $(this).attr("data-service");
            
            if($(this).hasClass('service__listPc_card--active')){
            }else{
                $(this).addClass('service__listPc_card--active');
                $(this).siblings().removeClass('service__listPc_card--active');
            }
            bgiChange(serviceId); //回傳數字來更換背景圖片
            console.log(5);
        });
    };


    function onSwiperChange(){
        var activeSlide = document.querySelector('.swiper-slide-active');
        // var serviceId = activeSlide.getAttribute("data-swiper-slide-index");
        serviceId = $('.swiper-slide-active .slider-image').attr('data-service');
        console.log(serviceId);
        parseInt(serviceId);
        // serviceId ++;
        bgiChange(serviceId);
    };

    // 重新塞回BGI
    function bgiChange(serviceId){
        let serviceUrl = 'img/p_home/service_'+ serviceId +'.png';
        $('#home-service-phone').attr('src',serviceUrl);
        servicePcChange(serviceId);
    };

    // 回塞給PC
    function servicePcChange(serviceId){
        $('.service__listPc_card[data-service="'+serviceId+'"]').addClass('service__listPc_card--active');
        $('.service__listPc_card[data-service="'+serviceId+'"]').siblings().removeClass('service__listPc_card--active');
    };

    servicePcClick ();
    

});
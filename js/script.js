$(function () {
    'use strict';

    $('.logo-click').on('click',function(){
        $('.product-desktop-main-container').hide();
        $('.homepage-desktop').fadeIn();
    });

    $('.category-menu-desktop-hermes-theme a').on('click',function(){
        $('.homepage-desktop').hide();
        $('.product-desktop-main-container').hide();
        $('.all-product' +' '+ $(this).data('content')).fadeIn();
        console.log($(this).data('content'));
    });

    $('.desktop-homepage-categories .list .item-wrapper').on('click',function(){
        $('.homepage-desktop').hide();
        $('.product-desktop-main-container').hide();
        $('.all-product' +' '+ $(this).data('content')).fadeIn();
    });

    $('.btn-group .switch span').on('click',function(){
        $('.btn-group .switch span').removeClass('active');
        $(this).addClass('active');
    });


    $('.mobile-homepage-categories .list .item-wrapper').on('click',function(){
        $('.homepage-mobile').hide();
        $('.main-content-mobile').fadeIn();
    });

    $('.main-content-mobile .mobile-header .logo').on('click',function(){
        $('.main-content-mobile').hide();
        $('.homepage-mobile').fadeIn();
    });

    $('.swiper-wrapper .swiper-slide > a').on('click',function(e){
        e.preventDefault();
        var dtop = $('#'+$(this).data('content')).css('top');
        $('.swiper-wrapper .swiper-slide > a').removeClass('active');
        $(this).addClass('active');
        $('html,body,.products-list-container').animate({
            scrollTop: dtop
        },600);
    });

    $('.products-list-container').scroll(function(){
        $('.product-index').each(function(){
            var ddtop = $(this).css('top')
            if($('.main-products-wrapper').scrollTop() > ddtop){
                console.log('true')
            }else{console.log($(this).css('top'))}
        });
    });
});
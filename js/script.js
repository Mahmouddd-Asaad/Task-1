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
});
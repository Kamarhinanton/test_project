@@include('slick.min.js')
@@include('jquery.validate.min.js')

$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease', /* Анімація зміни зобр. див. урок transition */
        infinite: true, /* Чи буде слайдер безкінечним */
        initialSlide: 0, /* Стартовий слайд, старт з нуля */
        autoplay: true, /* Автоматичне програвання */
        autoplaySpeed: 4000, /* Швидкість автоматичного програвання (вкл. безкінечність)*/
    });
});

$("#form-1").validate({
    rules: {
        username: {
            required: true,
        },
        phone: {
            required: true,
        },
        mail: {
            required: true,
        },
    },
    messages: {
        username: {
            required: "Это поле обязательно для заполнения",
        },
        phone: {
            required: "Это поле обязательно для заполнения",
        },
        mail: {
            required: "Это поле обязательно для заполнения",
        },
    }
});
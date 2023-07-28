$(document).ready(function(){
    $('.client__carousel').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="46"><path fill="#ec644b" d="M13.8 45.7c-.2.4-.6.4-.8 0L.2 24c-.2-.2-.2-.6-.2-.9 0-.3 0-.7.2-1L13 .3c.2-.4.6-.4.8 0 .3.4.3 1 0 1.4L1.3 23l12.5 21.3c.2.4.2 1 0 1.4z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="46"><path fill="#ec644b" d="M13.8 45.7c-.2.4-.6.4-.8 0L.2 24c-.2-.2-.2-.6-.2-.9 0-.3 0-.7.2-1L13 .3c.2-.4.6-.4.8 0 .3.4.3 1 0 1.4L1.3 23l12.5 21.3c.2.4.2 1 0 1.4z"/></svg></button>'
    });
});
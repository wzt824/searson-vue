var myNav = new Swiper('#nav', {
    spaceBetween: 10,
    slidesPerView : 1,
    watchSlidesProgress : false,
    watchSlidesVisibility : true,
    on:{
        tap: function(){
            myPage.slideTo( myNav.clickedIndex)
        }
    }
})
var myPage = new Swiper('#page',{
    on:{
    slideChangeTransitionStart: function(){
        updateNavPosition()
    }}
})
function updateNavPosition(){
    $('#nav .active-nav').removeClass('active-nav');
    var activeNav = $('#nav .swiper-slide').eq(myPage.activeIndex).addClass('active-nav');
    if (!activeNav.hasClass('swiper-slide-visible')) {
        console.log(1);
        if (activeNav.index()>myNav.activeIndex) {
            console.log(2);
            var thumbsPerNav = Math.floor(myNav.width/activeNav.width())-1
            myNav.slideTo(activeNav.index()-thumbsPerNav)
        }
        else {
            console.log(3);
            myNav.slideTo(activeNav.index())
        }   
    }
}
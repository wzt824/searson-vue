//整体思路：先复制一份ul，设置定时器，修改ul的margin-top值
var ul = document.getElementsByClassName("tipRight")[0].firstElementChild;
console.log(ul)
ul.innerHTML += ul.innerHTML; //先复制一份ul
var step = 0; //定义步长
var index = 0;

function FontScroll() {
    step = 0; //每次都是从0-30
    setTimeout(function move() { //文字是从下往上的，所以margin-top是负的，每次都递减
        //每次都递减0.5
        step -= 0.5;
        //修改margin-top的值
        ul.style.marginTop = -60 * index + step + "px";
        if (step > -60) { //若步长step比-30大的话，说明在ul里面，给他加延迟动画慢慢出现
            setTimeout(move, 15);
        } else {
            index++; //第一个完成后第二个开始，依次累加
            if (index > ul.children.length - 1) { //若下标大于最后一个元素时让其下标为0
                index = 0;
            }
            FontScroll();
        }
    }, 2000);
}

//轮播图
// function banner() {
//     var upsSwiper = new Swiper('.swiper-container', {
//         speed: 1000,
//         longSwipes: false,
//         loop: true,
//         autoplay: {
//             disableOnInteraction: false,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         on: {
//             autoplayStop: function () {
//                 this.$el.find(".ups-icon-videoplay").addClass('stop-status');
//             },
//             autoplayStart: function () {
//                 this.$el.find(".ups-icon-videoplay").removeClass('stop-status');
//             },

//         }
//     });

//     upsSwiper.$el.find(".ups-icon-videoplay").on('click', function () {
//         if (upsSwiper.autoplay.running) {
//             upsSwiper.autoplay.stop();
//         } else {
//             upsSwiper.autoplay.start();
//         }
//     });

//     swiperHeight = upsSwiper.height

//     window.onscroll = function scroll() {
//         if (window.pageYOffset / upsSwiper.height < 1) {
//             scrollScale = window.pageYOffset / swiperHeight;
//         } else {
//             scrollScale = 1;
//         }

//         upsSwiper.slides.find(".img").transform('translateY(-' + 18 * scrollScale + '%)') //滚动一屏swiper高度则图片向上18%（范围0-40）

//     }
// }


window.onload = function () {
    FontScroll();
    //banner();//轮播图
}
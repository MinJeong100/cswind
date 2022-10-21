$("document").ready(function () {

    AOS.init(); 

    $(".header").mouseover(function(){
        $(".header").addClass("on")
        $(".header-wrap h1 a img").attr("src", "images/logo-black.png")
    }).mouseout(function(){
        $(".header").removeClass("on")
        $(".header-wrap h1 a img").attr("src", "images/logo.png")
    })
    $(".gnb .depth1 > li").mouseover(function(){
        let i = $(this).index()
        $(".gnb .depth1 > li").removeClass("on").eq(i).addClass("on")
    }).mouseleave(function(){
        $(".gnb .depth1 > li ").removeClass("on");
        $("header").removeClass("on")
    })

    // 햄버거 메뉴
    $(".header .gnb-util .hamberger").click(function(){
        $(".hamberger").toggleClass("on")
        $(".window").show()
        $(".go-top").hide()
        $("html, body").css("overflow", "hidden")
        if($(window).width() < 1024){
            $(".m-menu").show()
        }else {
            $(".hamberger-menu").slideDown()
        }
    })
    $(".close, .window").click(function(){
        $(".hamberger").removeClass("on")
        $(".window").hide()
        $(".hamberger-menu, .m-menu").hide()
        $(".go-top").show()
        $("html, body").css("overflow", "visible")
    })

    // m-nav 
    $(".m1").click(function(){
        let i = $(this).index();

        $(".m2").slideUp();
        if ($(this).children(".m2").is(":visible")) {
            $(this).children(".m2").slideUp();
            $(".m1").eq(i).removeClass("on");
        }else {
            $(this).children(".m2").slideDown();
            $(".m1").removeClass("on").eq(i).addClass("on");
        }
    })
    // 모바일 햄버거 메뉴 해상도 640이상이면 없어지기
    function Resize(){
        if($(window).width() > 1024){
            $(".m-nav, .m-btn").removeClass("on")
            $(".m-etc").hide()
        }
        else{
            $(".hamberger-menu").hide()
            $(".window").hide()
        }
    }
    Resize();
    $(window).resize(function(){
        Resize()
    })

    
    // 스크롤 이벤트 설정

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos, $(".business ").offset().top)
        if(pos >= $(".business ").offset().top){
            $(".header").addClass("on")
            $(".header-wrap h1 a img").attr("src", "images/logo-black.png")
        }else{
            $("header").removeClass("on")
            $(".header-wrap h1 a img").attr("src", "images/logo.png")
        }
        if(pos > $(".main").offset().top){
            $(".go-top").fadeIn();
        }else{
            $(".go-top").fadeOut();
        }
    })
    // 메인 배너

    let swiper_list = [
        {
            id:1,
            img: "images/banner-bg01.png",
            title: "인간과 자연을 위한", 
            title2: "새로운 가치를 창조합니다",
            txt: "인간과 자연의 사이에서 새로운 가치를 만듭니다. 씨에스윈드",
            current: "1"
        },
        {
            id:2,
            img: "images/banner-bg02.png",
            title: "에너지 솔루션 분야의", 
            title2: "글로벌리더로서 가치 제공",
            txt: "에너질 솔루션 분야의 글로벌 리더로서 고객에게 가치를 제공합니다.",
            current: "2"
        }
    ]
    console.log(swiper_list[0].img, swiper_list.length)
    swiper_list.map((e)=>{
        let html = "";
        html += '<div class="swiper-slide">'
            html += '<img src='+e.img+' alt='+e.title+'>'
            html += '<div class="tit">'
                html += '<h2>'+e.title+'</h2>'
                html += '<h2>'+e.title2+'</h2>'
                html += '<p>'+e.txt+'</p>'
            html += '</div>'
            html += '<div class="count">'
                html += '<p>'+'0'+''
                    html += '<span class="current">'+e.current+'</span>'
                html += '</p>'
                html += '<div class="progress">'
                    html += '<span class="time"></span>'
                    html += '<span class="bg"></span>'
                html += '</div>'
                html += '<p>'+'0'+''
                    html += '<span class="length">'+swiper_list.length+'</span>'
                html += '</p>'
            html += '</div>'
        html += '</div>'
        setTimeout(()=>{
            $(".main .banner-swiper .progress .time").addClass("on")
        }, 100)
        $(".main .banner-swiper .swiper-wrapper").append(html)
    })

    let banner = new Swiper(".banner-swiper", {
        effect: "fade",
        autoplay: {
            delay: 6000
        },
        loop: true,
    });

    banner.on("transitionEnd", function(index){
        console.log(index)
        $(".main .banner-swiper .progress .time").removeClass("on")
        setTimeout(()=>{
            $(".main .banner-swiper .progress .time").addClass("on")
        }, 100)
    })

    
    // 제품사업 스와이퍼
    let prod_slide = new Swiper(".prod-swiper", {
        slidesPerView: 2,
        spaceBetween: 120,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024:{spaceBetween: 50},
            360:{spaceBetween: 50}
        }
    });

    $(".notice .notice-wrap .notice-list li").mouseover(function(){
        let i = $(this).index()
        $(".notice .notice-wrap .notice-list li").removeClass("on").eq(i).addClass("on");
    })
    $(".notice .notice-wrap .notice-list li").mouseout(function(){
        let i = $(this).index()
        $(".notice .notice-wrap .notice-list li").removeClass("on");
    })

    $(".business .prod-swiper .swiper-slide img").mouseover(function(){
        $(".swiper-slide.swiper-slide-active").addClass("on")
    })
    $(".footer .right a").click(function(){
        $(".footer .right ul").toggleClass("on")
        $(".footer .right p").toggleClass("on")
    })
    // gotop
    $(".go-top").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        },1000)
    })
});

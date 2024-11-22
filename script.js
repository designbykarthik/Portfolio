$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 120,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

 const $achievementsSection = $('.achievements');
    const $achievements = $achievementsSection.find('.achievement');
    const $prevBtn = $achievementsSection.find('.prev-btn');
    const $nextBtn = $achievementsSection.find('.next-btn');
    let currentIndex = 0;

    // Initially hide all achievements except the first
    $achievements.hide().first().show();

    // Function to show the current achievement
    function showAchievement(index) {
        $achievements.hide().eq(index).fadeIn(500); // Fade effect for smooth transition
    }

    // Show next achievement
    function showNextAchievement() {
        currentIndex = (currentIndex + 1) % $achievements.length;
        showAchievement(currentIndex);
    }

    // Show previous achievement
    function showPrevAchievement() {
        currentIndex = (currentIndex - 1 + $achievements.length) % $achievements.length;
        showAchievement(currentIndex);
    }

    $nextBtn.on('click', showNextAchievement);
    $prevBtn.on('click', showPrevAchievement);

    // Automatic scrolling every 30 seconds
    setInterval(showNextAchievement, 3000); // 30000 milliseconds = 30 seconds

    // Ensure the buttons are visible
    $prevBtn.show();
    $nextBtn.show();
});
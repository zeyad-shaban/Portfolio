const scrollToTop = (duration = 400) => {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance, oldTimestamp = null;

    function step(newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollY will be -Infinity
            scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
            if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
};

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const scrollBtn = document.querySelector('.scroll-up-btn');
    const html = document.querySelector('html');
    const navLinks = document.querySelectorAll('.navbar .menu li');
    const menuBtns = document.querySelectorAll('.menu-btn');

    const typingText = {
        strings: ["Youtuber", "Node Backend developer", "MERN Stack developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };

    window.onscroll = () => {
        this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
        this.scrollY > 500 ? scrollBtn.classList.add('show') : scrollBtn.classList.remove('show');
    };

    scrollBtn.onclick = () => {
        scrollToTop();
        html.style.scrollBehavior = 'auto';
    };

    for (link of navLinks)
        link.onclick = () => html.style.scrollBehavior = "smooth";

    for (btn of menuBtns)
        btn.onclick = () => {
            document.querySelector('.navbar .menu').classList.toggle("active");
            document.querySelector('.menu-btn i').classList.toggle("active");
        };

    new Typed(".typing", typingText);
    new Typed(".typing-2", typingText);
});
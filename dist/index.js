var darkMode = false
window.onload = changeContactWithScreenWidth()
window.addEventListener("resize", changeContactWithScreenWidth)
function changeContactWithScreenWidth() {
<<<<<<< HEAD
    if (window.matchMedia("(min-width: 601px)").matches) {
        document.getElementById('desktop-contact').style.display = 'block'
        document.getElementById('mobile-contact').style.display = 'none'
        document.getElementById('desktop-gallery').style.display = 'block'
        document.getElementById('mobile-gallery').style.display = 'none'
    } else {
        document.getElementById('desktop-contact').style.display = 'none'
        document.getElementById('mobile-contact').style.display = 'block'
        document.getElementById('desktop-gallery').style.display = 'none'
        document.getElementById('mobile-gallery').style.display = 'block'
=======
    if (window.matchMedia("(min-width: 767px)").matches) {
        document.getElementById('desktop-contact').style.display = 'block'
        document.getElementById('mobile-contact').style.display = 'none'
    } else {
        document.getElementById('desktop-contact').style.display = 'none'
        document.getElementById('mobile-contact').style.display = 'block'
>>>>>>> 48476fb771219084a08c11c8f2b71bae85ea8d77
    }
}
function socialBtnOpen(user) {
    window.open(`https://github.com/$[user]`, `_blank`);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function generate() {
    var arr = []
    for (let i = 0; i < 6; i++) {
        arr[i] = randomIntFromInterval(1, 256);
    }
    var gradient = "linear-gradient(to left , rgba(" + arr[0] + "," + arr[1] + " , " + arr[2] + ", 0.52), rgba(" + arr[3] + ", " + arr[4] + ", " + arr[5] + ", 0.73)),";
    var some_fancy_image = '../src/images/1856310.jpg'
    document.getElementById("cp").style.backgroundImage = gradient + 'url(' + some_fancy_image + ')';
}

function changeDisplayMode() {
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'light');
        darkMode = false
    }
    else if (!darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode = true
    }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
var darkMode = false
window.onload = changeContactWithScreenWidth()
window.addEventListener("resize", changeContactWithScreenWidth)
function changeContactWithScreenWidth() {
    if (window.matchMedia("(min-width: 601px)").matches) {
        document.getElementById('desktop-contact').style.display = 'block'
        document.getElementById('mobile-contact').style.display = 'none'
        document.getElementById('desktop-gallery').style.display = 'block'
        document.getElementById('mobile-gallery').style.display = 'none'
        document.getElementById('desktop-stack').style.display = 'block'
        document.getElementById('mobile-stack').style.display = 'none'
    } else {
        document.getElementById('desktop-contact').style.display = 'none'
        document.getElementById('mobile-contact').style.display = 'block'
        document.getElementById('desktop-gallery').style.display = 'none'
        document.getElementById('mobile-gallery').style.display = 'block'
        document.getElementById('desktop-stack').style.display = 'none'
        document.getElementById('mobile-stack').style.display = 'block'
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

var sliderIndex = 1;
showSlider(sliderIndex);

function selectSlider(n, element, other) {
    showSlider(sliderIndex = n);
    element.style.color = "#f5c026";
    other.style.color = "#ecd99e";
}
function showSlider(n) {
    var j;
    var slider = document.getElementsByClassName("sliderr");
    if (n > slider.length) { sliderIndex = 1 }
    if (n < 1) { sliderIndex = slider.length }
    for (j = 0; j < slider.length; j++) {
        slider[j].style.display = "none";
    }
    slider[sliderIndex - 1].style.display = "block";
}

var sliderIndex2 = 1;
showSlider2(sliderIndex2);

function selectSlider2(n, element, other) {
    showSlider2(sliderIndex2 = n);
    element.style.color = "#f5c026";
    other.style.color = "#ecd99e";
}
function showSlider2(n) {
    var k;
    var slider2 = document.getElementsByClassName("sliderrr");
    if (n > slider2.length) { sliderIndex2 = 1 }
    if (n < 1) { sliderIndex2 = slider2.length }
    for (k = 0; k < slider2.length; k++) {
        slider2[k].style.display = "none";
    }
    slider2[sliderIndex2 - 1].style.display = "block";
}

var commentsIndex = 1
showComments(commentsIndex);
function plusSlidesComments(n) {
    showComments(commentsIndex += n);
}
setInterval(function () {
    showComments(commentsIndex += 1)
}, 5000);
function showComments(n) {
    var j;
    var commnets = document.getElementsByClassName("comments-card");
    if (n > commnets.length) { commentsIndex = 1 }
    if (n < 1) { commentsIndex = commnets.length }
    for (j = 0; j < commnets.length; j++) { commnets[j].style.display = "none"; }
    commnets[commentsIndex - 1].style.display = 'block';
}
// $("#yes-button").click(function () {
//     $(".toast").toast('show');
// });
function socialBtnOpen(user) {
    window.open(`https://github.com/$[user]`, `_blank`);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function generate() {
    console.log('hi')
    var arr = []
    for (let i = 0; i < 6; i++) {
        arr[i] = randomIntFromInterval(1, 256);
    }
    var gradient = "linear-gradient(to left , rgba(" + arr[0] + "," + arr[1] + " , " + arr[2] + ", 0.52), rgba(" + arr[3] + ", " + arr[4] + ", " + arr[5] + ", 0.73)),";
    var some_fancy_image = '../src/images/1856310.jpg'
    document.getElementById("cp").style.backgroundImage = gradient + 'url(' + some_fancy_image + ')';
}
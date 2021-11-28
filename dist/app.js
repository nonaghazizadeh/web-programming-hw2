$("#yes-button").click(function() {
    $(".toast").toast('show');
});
function socialBtnOpen(user) {
    window.open(`https://github.com/$[user]`, `_blank`);
}
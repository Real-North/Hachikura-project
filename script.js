// jQuery
$(function() {
    $('.headerTitle').hide().slideDown(500);
    $('.searchingBar').hide().slideDown(800);
    $('.list_box').hide();

});
$(function() {
    $('#search').click(function() {
        $('.list_box').slideDown();
    });
});
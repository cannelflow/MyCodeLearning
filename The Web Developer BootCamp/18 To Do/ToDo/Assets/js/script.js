/* jshint browser: true */
/*globals $:false */

/*striketrough when todo finished*/
$('ul').on('click','li', function (e) {
    $(this).toggleClass('completed');
    e.stopPropagation();
});

/*Delete finished todo*/
$('ul').on('click','span', function (e) {
    $(this).parent().fadeOut('slow', function () {
        $(this).remove();
    });
    e.stopPropagation();
});

/*add new todo*/
$('input').on('change',function (e) {
    var newToDo = $(this).val();
    $('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> '+newToDo+'</li>');
    e.stopPropagation();
});

/*fadetoggle in plus button*/
$('.fa-plus-square').on('click',function (e) {
    $('input').fadeToggle();
    e.stopPropagation();
});
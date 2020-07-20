
$(document).ready(function() {
    $('.buttons > button').click(function() {
        $(this).parent('div').find('button').addClass('disabled');
        $(this).removeClass('disabled');    
        $('html,body').animate({ scrollTop:$(this).parent('div').offset().top+250}, 'fast');
    });
});





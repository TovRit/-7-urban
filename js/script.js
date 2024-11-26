$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header-burger-menu__inner,.header-burger-menu').toggleClass('active');
    });
});

$("button").on("click", function(){
    if( $("input").val() != "" ) {
    alert("Thank you!");
    }
    });
    
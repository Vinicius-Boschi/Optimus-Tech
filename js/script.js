$(".navbar__button").click(function() {
    $(this).toggleClass("active") 
    $(".body").toggleClass("active")
    $(".navbar__list").toggleClass("active")
    $(".navbar__buttons").toggleClass("active")
})
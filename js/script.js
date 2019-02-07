$(window).on("scroll", function () {
    let positionY = $(this).scrollTop();
    console.log(positionY);

    // hauteur d'une page web $(window).height
    if (positionY > 450) {
        $("#scrolltotop").css("opacity", 1);
    }
    if (positionY < 450) {
        $("#scrolltotop").css("opacity", 0);
    }


})
$(".boxes .box").click(function (e) {
    e.preventDefault();
    let curentBox = $(this);
    function animateTremor() {
        curentBox
            .animate({ left: "-1px" }, 95)
            .animate({ left: "4px" }, 95)
            .animate({ left: "-18px" }, 95)
            .animate({ left: "18px" }, 95)
            .animate({ left: "-25px" }, 95)
            .animate({ left: "25px" }, 95)
            .animate({ left: "-8px" }, 95)
            .animate({ left: "4px" }, 95)
            .animate({ left: "-2px" }, 95)
            .animate({ left: "0px" }, 95);
    }
    $(".boxes .box").addClass("noclick");
    setTimeout(function () {
        $(".boxes .box").removeClass("noclick");
    }, 2000);
    if (curentBox.hasClass("active")) {
        console.log("has active");
    } else {
        curentBox.addClass("active");
        curentBox.addClass("noclick");
        curentBox.find(".box__front").css("display", "none");
        curentBox.find(".box__inner").css("background-image", "url('./assets/mmboxOpen.png')");
        setTimeout(function () {
            $("#fonGrey").css("display", "block");
            $(".two_modal_icon").fadeIn();
            $("#game-modal-overlay").css("display", "block");
            $(".boxes .box").addClass("second-step");
            $(".boxes .box.active").removeClass("second-step");
        }, 1000);
    }
    if (curentBox.hasClass("second-step")) {
        curentBox.addClass("active");
        curentBox.addClass("noclick");
        curentBox.find(".box__front").css("display", "none");
        curentBox.find(".box__inner").css("background-image", "url('./assets/mmboxOpenCart.png')");
        setTimeout(function () {
            $("#two_modal").css("display", "block");
            $(".two_modal_icon_Two").fadeIn();
            $(".two_modal_icon").remove();
        }, 1000);
    }
});
$(".click_me_pidor").click(function (e) {
    e.preventDefault();
    $(".two_modal_icon").fadeOut();
    $("#game-modal-overlay").css("display", "none");
});
$(".js-pickup").click(function (e) {
    e.preventDefault();
    // Hide all game
    $(".two_modal_icon_Two").fadeOut();
    $("#game-modal-overlay").css("display", "none");
    $("#fonGrey").css("display", "none");
    $("#game").css("display", "none");

    // Show prefil
    $(".order-data-wrp").css("display", "block");
});
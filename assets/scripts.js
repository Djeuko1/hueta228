$(document).ready(function () {
    $('.loader-wrp').fadeIn();
    setTimeout(function () {
        $('.loader-wrp').fadeOut();
    }, 1500);

    // Slider
    $('.product-slider-block__thumbnails div').click(function () {
        var index = $(this).index();
        var newImg = $('.slider img').eq(index);

        $('.product-slider-block__thumbnails div').removeClass('active');
        
        $(this).addClass('active');

        $('.slider img.current').fadeOut(200, function () {
            $(this).removeClass('current');
            newImg.fadeIn(200).addClass('current');
        });
    });

    // Answers
    $('.question_1 .answer a').click(function (event) {
        event.preventDefault();
        $('.question_1').css('display', 'none');
        $('.question_2').css('display', 'block');
    });
    $('.question_2 .answer a').click(function (event) {
        event.preventDefault();
        $('.question_2').css('display', 'none');
        $('.question_3').css('display', 'block');
    });
    $('.question_3 .answer a').click(function (event) {
        event.preventDefault();

        $('.loader-wrp').fadeIn();

        // Function to load game, prefil scripts, styles
        function loadResources(resources, callback) {
            let total = resources.length;
            let count = 0;

            function resourceLoaded() {
                count++;
                if (count === total && typeof callback === 'function') {
                    callback();
                }
            }

            resources.forEach(resource => {
                let element;
                if (resource.type === 'css') {
                    element = $('<link>', {
                        rel: 'stylesheet',
                        href: resource.src,
                        class: 'dynamic-resource'
                    });
                } else if (resource.type === 'js') {
                    element = $('<script>', {
                        src: resource.src,
                        class: 'dynamic-resource',
                        defer: true
                    });
                }
                element.on('load', resourceLoaded);
                $('head').append(element);
            });
        }

        setTimeout(() => {
            loadResources([
                // Game / prefil styles and scripts
                { type: 'css', src: 'assets/box1.css' },
                // { type: 'css', src: 'assets/box.css' },
                { type: 'css', src: 'assets/metro-all.min.css' },
                { type: 'css', src: 'assets/adapt.css' },
                { type: 'css', src: 'assets/slick.css' },
                { type: 'css', src: 'assets/client.css' },
                { type: 'css', src: 'assets/mobile-order.css' },
                { type: 'css', src: 'assets/ajax-mobile-master.css' },
                { type: 'css', src: 'assets/main-product-content.css' },
                { type: 'css', src: 'assets/comments.css' },
                { type: 'css', src: 'assets/iconmoon.css' },
                { type: 'css', src: 'assets/product-styles.css' },
                { type: 'css', src: 'assets/style1.css' },
                { type: 'css', src: 'assets/game-styles.css' },

                { type: 'js', src: 'https://cdn.tailwindcss.com' },
                // { type: 'js', src: 'assets/scripts/main.js' },
                // { type: 'js', src: 'assets/scripts/game.js' },
                { type: 'js', src: 'assets/scripts/prefil-scripts.js' }
            ], function () {});
        }, 1500);
        
        const checkSection = $("#Check");
        const firstCheck = $(".time_one");
        const secondCheck = $(".time_two");
        const threeCheck = $(".time_three");
        const game = $("#game");
        const modalWrapp = $("#modal_box"); // Alert modal before the game
        const oneModal = $(".click_me_pidor");
        const gameModalOverlay = $("#game-modal-overlay"); // Overlay on the background of game's modal

        setTimeout(function () {
            $('#main-content').css('display', 'none');
            $('footer').css('display', 'none');
            $('.loader-wrp').fadeOut();
            checkSection.css('display', 'block');
        }, 2000);

        setTimeout(() => {
            firstCheck.addClass("b-show-two").css('display', 'block');
        }, 2000);

        setTimeout(() => {
            secondCheck.addClass("b-show-two").css('display', 'block');
        }, 3200);

        setTimeout(() => {
            threeCheck.addClass("b-show-two").css('display', 'block');
        }, 5200);

        setTimeout(() => {
            checkSection.css('display', 'none');
            game.css('display', 'block');
            modalWrapp.css('display', 'block');
            $('.wrapp_modal_box').css('display', 'block');
            gameModalOverlay.css('display', 'block');
        }, 6000);

        oneModal.click(function () {
            modalWrapp.remove();

            gameModalOverlay.css('display', 'none');
        });

        // Game
        
    });

    // To top
    $('footer button').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });
    
});

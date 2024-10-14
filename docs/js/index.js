document.addEventListener("DOMContentLoaded", function () {

    function addClass(el, class_name) {
        el.classList.add(class_name);
    }
    function removeClass(el, class_name) {
        el.classList.remove(class_name);
    }
    function toggleClass(el, class_name) {
        el.classList.toggle(class_name);
    }

    const overlay = document.querySelectorAll('.overlay');
    overlay.forEach(over => {
        over.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(element => {
                removeClass(element, 'open');
            });
        })
    });

    if (document.querySelector('.header')) {
        var header = document.querySelector(".header");
        var openMenuBtn = header.querySelector('#button_menu_open');
        var bottomOpenFixMenuBtn = document.getElementById('bottom-fix-menu-open');

        openMenuBtn.addEventListener('click', () => {
            toggleClass(header, 'open');
            if (bottomOpenFixMenuBtn) {
                toggleClass(bottomOpenFixMenuBtn, 'active');
            }
            if (document.getElementById('overlayMenu')) {
                toggleClass(document.getElementById('overlayMenu'), 'open');
            }
        })
        if (bottomOpenFixMenuBtn) {
            bottomOpenFixMenuBtn.addEventListener('click', () => {
                toggleClass(header, 'open');
                toggleClass(bottomOpenFixMenuBtn, 'active');
                if (document.getElementById('overlayMenu')) {
                    toggleClass(document.getElementById('overlayMenu'), 'open');
                }
            })
        }

    }

    if (document.querySelector('.bottom_fix_menu')) {
        const bottom_fix_menu = document.querySelector('.bottom_fix_menu');
        const svg_links = bottom_fix_menu.querySelector(".cont.svg_links");

        svg_links.addEventListener('click', () => {
            toggleClass(svg_links, 'open');
        })

        $(".scroll-top").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    }

    if (document.querySelector('.main_achievement')) {
        const main_achievement = document.querySelector('.main_achievement');
        const achievementCards = main_achievement.querySelectorAll('.card');
        achievementCards.forEach(element => {
            let btn = element.querySelector('#hidd-open');

            btn.addEventListener('click', () => {
                toggleClass(element, 'active');
            })
        });
    }

    if (document.querySelector('[data-invise-card]')) {
        const dataInviseCard = document.querySelectorAll('[data-invise-card]');

        dataInviseCard.forEach(container => {
            let numMaxCard = container.getAttribute('data-invise-card');
            let allCards = container.querySelectorAll('.card');
            let btnOpenMoreCards = document.querySelector(`[for="${container.id}"]`);

            if (allCards.length > numMaxCard) {
                let num = 1;
                allCards.forEach(card => {
                    if (num > numMaxCard) {
                        addClass(card, 'invise');
                    }
                    num++;
                });

                btnOpenMoreCards.addEventListener('click', () => {
                    let num = 1;
                    allCards.forEach(card => {
                        if (card.classList.contains('invise')) {
                            if (num < 4) {
                                removeClass(card, 'invise');
                            }
                            num++;
                        }
                    });
                    if (!container.querySelector('.card.invise')) {
                        addClass(btnOpenMoreCards, 'invise');
                    }
                })

            } else {
                addClass(btnOpenMoreCards, 'invise');
            }
        });
    }

    console.log('index.js finish work');
});
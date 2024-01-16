$(function () {
    var menu = $(".menu_top");
    var hamburger = $(".hamburger");

    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        menu.slideToggle(500);
    });

    $(document).click(function (event) {
        if (!menu.is(event.target) && menu.has(event.target).length === 0 &&
            !hamburger.is(event.target) && hamburger.has(event.target).length === 0) {
            if ($(window).width() <= 768) {
                menu.slideUp(500);
                hamburger.removeClass("is-active");
            }
        }
    });

    $(".menu_top li a").click(function () {
        if ($(window).width() <= 768) {
            menu.slideUp(500);
            hamburger.removeClass("is-active");
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 768) {
            menu.show();
        } else if (!hamburger.hasClass("is-active")) {
            menu.hide();
        }
    });
});
window.onload = function () {
    if (window.innerWidth <= 768) {
        var taskItem = document.querySelector('.menu_top > li:last-child');
        taskItem.innerHTML = '<a class="added" href="../taskswr.html">Письмові завдання</a><a class="added" href="../taskstests.html">Тестові завдання</a>';
    } else {
        var nav = document.querySelector('nav');
        nav.innerHTML = `
        <div class="hamburger" id="hamburger-1">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
    <ul class="menu_top">
        <li><a href="../index.html">Головна</a></li>
        <li><a href="../interesting.html">Цікавеньке</a></li>
        <li><a href="../literature.html">Література</a></li>
        <li><a href="../vocabulary.html">Словничок</a></li>
        <li>
            <a href="#">Завдання</a>
            <ul class="dropdown">
                <li><a href="../taskswr.html">Письмові</a></li>
                <li><a href="../taskstests.html">Тестові</a></li>
            </ul>
        </li>
    </ul>
        `;
    }
};


// window.onload = function () {
//     if (window.innerWidth <= 768) {
//         var taskItem = document.querySelector('.menu_top > li:last-child');
//         taskItem.innerHTML = '<a class="added" href="../libs/taskswr.html">Письмові завдання</a><a class="added" href="../libs/taskstests.html">Тестові завдання</a>';
//     }
// };

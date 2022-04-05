$(function () {

    $('.filter-stile').styler();



    $('.accordion__title').click(function () {
        $(this).next('.accordion__text').slideToggle();
    });



    $('.marquee').marquee({
        //duration in milliseconds of the marquee
        duration: 15000,
        //gap in pixels between the tickers
        gap: 50,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: false,
        pauseOnHover: true
    });






    $('.header__lang-list__item-inner').on('click', function () {
        $(this).toggleClass('one');
        $(this).next().slideToggle();

    });

    document.querySelector(".header__lang-link").addEventListener("click", function (e) {
        document.querySelector(".header__lang-arrow__img").classList.toggle("active");
    });




    function formatData(data) {
        if (!data.id) {
            return data.text;
        }
        var $result = $(
            '<span> <div class="select-img"> <img src="images/flag/' +  data.element.value.toLowerCase() + 
            '.png" class="img-flag"> </div> '  + 
            data.text +     '</span>'
        );
        return $result;
    };

    $(document).ready(function () {
        $('.js-select2').select2({
            placeholder: "Выберите валюту",
            language: "ru",
            templateResult: formatData,
            templateSelection: formatData
        });
    });




    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var $state = $(
            '<span> <div> <img src="images/icon/' +  state.element.value.toLowerCase() + 
            '.png" class="img-cripto"> </div> '  + 
            state.text +     '</span>'
        );
        return $state;
    };

    $(document).ready(function () {
        $('.js-select22').select2({
            language: "ru",
            templateResult: formatState,
            templateSelection: formatState
        });
    });



    let container;
    let apply;

    const who = () => document.querySelector(".warning");

    const findElements = () => {
        container = document.querySelector(".warning");
        apply = container.querySelector(".warning__apply");
    };

    const hideContainer = () => {
        container.classList.remove("warning--active");
    };

    const setCookie = () => {
        document.cookie = "warning=true; max-age=2592000; path=/";
    };

    const onClick = (event) => {
        event.preventDefault();
        hideContainer();
        setCookie();
    };

    const subscribe = () => {
        apply.addEventListener("click", onClick);
    };

    const init = () => {
        if (!who()) {
            return;
        }
        findElements();
        subscribe();
    };

    init();

});

$('.menu-btn').on('click', function(){
    $('.menu-mobile__list').slideToggle();
});
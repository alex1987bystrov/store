
// BURGER WITHOUT JQUERY.

// let nav = document.querySelector('.nav__panel');
// let burger = document.querySelector('.burger');
// function handleClick(e){
//     burger.classList.toggle('active');
//     nav.classList.toggle('show');
// }
// burger.addEventListener('click', handleClick);

// DATA.
const items = [
    {"img":"data/images/1.jpg","name":"Игровой коврик","description":"Удобный игровой коврик для компьютера.","price":11},
    {"img":"data/images/2.jpg","name":"Комбинезон вязаный","description":"Теплый комбинезон для ребёнка.","price":15},
    {"img":"data/images/3.jpg","name":"Держатель для телефона","description":"Удобный держатель для мобильного телефона.","price":12},
    {"img":"data/images/4.jpg","name":"Светодиодная лента","description":"Яркая RGB светодиодная лента с пультом ДУ.","price":7},
    {"img":"data/images/5.jpg","name":"Ремень кожаный","description":"Прекрасный подарок. Прочный и стильный кожаный ремень","price":20},
    {"img":"data/images/6.jpg","name":"Держатель для бумаги","description":"Стильный и удобный в монтаже и использовании держатель для туалетной бумаги.","price":10},
    {"img":"data/images/1.jpg","name":"Игровой коврик","description":"Удобный игровой коврик для компьютера.","price":11},
    {"img":"data/images/2.jpg","name":"Комбинезон вязаный","description":"Теплый комбинезон для ребёнка.","price":15},
    {"img":"data/images/3.jpg","name":"Держатель для телефона","description":"Удобный держатель для мобильного телефона.","price":12},
    {"img":"data/images/4.jpg","name":"Светодиодная лента","description":"Яркая RGB светодиодная лента с пультом ДУ.","price":7},
    {"img":"data/images/5.jpg","name":"Ремень кожаный","description":"Прекрасный подарок. Прочный и стильный кожаный ремень","price":20},
    {"img":"data/images/6.jpg","name":"Держатель для бумаги","description":"Стильный и удобный в монтаже и использовании держатель для туалетной бумаги.","price":10}
]

// WITH JQUERY.
$(function(){
    $("#burg").click(function(){
        $(this).toggleClass("active");
        $("#nav").toggleClass("show");
    });
    if ("content" in document.createElement("template")) {
    var section = document.querySelector(".section");
    var template = document.querySelector(".template__items");
        for(var i=0; i < items.length; i++){
            var clone = template.content.cloneNode(true);
            section.appendChild(clone);
            $("#0").attr({"id" : "1", "src" : items[i].img});
            $("#a").attr("id", "a1").text(items[i].name);
            $("#b").attr("id", "b1").text(items[i].description);
            $("#c").attr("id", "c1").text("$ " + items[i].price);
        }
    }else{}
});
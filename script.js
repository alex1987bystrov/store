
// BURGER WITHOUT JQUERY.

// let nav = document.querySelector('.nav__panel');
// let burger = document.querySelector('.burger');
// function handleClick(e){
//     burger.classList.toggle('active');
//     nav.classList.toggle('show');
// }
// burger.addEventListener('click', handleClick);

// DATA.    имитированная база данных.
const data = [
    {"id":"1","img":"data/images/1.jpg","name":"Игровой коврик","description":"Удобный игровой коврик для компьютера.","price":11},
    {"id":"2","img":"data/images/2.jpg","name":"Комбинезон вязаный","description":"Теплый комбинезон для ребёнка.","price":15},
    {"id":"3","img":"data/images/3.jpg","name":"Держатель для телефона","description":"Удобный держатель для мобильного телефона.","price":12},
    {"id":"4","img":"data/images/4.jpg","name":"Светодиодная лента","description":"Яркая RGB светодиодная лента с пультом ДУ.","price":7},
    {"id":"5","img":"data/images/5.jpg","name":"Ремень кожаный","description":"Прекрасный подарок. Прочный и стильный кожаный ремень","price":20},
    {"id":"6","img":"data/images/6.jpg","name":"Держатель для бумаги","description":"Стильный и удобный в монтаже и использовании держатель для туалетной бумаги.","price":10},
    {"id":"7","img":"data/images/1.jpg","name":"Игровой коврик","description":"Удобный игровой коврик для компьютера.","price":11},
    {"id":"8","img":"data/images/2.jpg","name":"Комбинезон вязаный","description":"Теплый комбинезон для ребёнка.","price":15},
    {"id":"9","img":"data/images/3.jpg","name":"Держатель для телефона","description":"Удобный держатель для мобильного телефона.","price":12},
    {"id":"10","img":"data/images/4.jpg","name":"Светодиодная лента","description":"Яркая RGB светодиодная лента с пультом ДУ.","price":7},
    {"id":"11","img":"data/images/5.jpg","name":"Ремень кожаный","description":"Прекрасный подарок. Прочный и стильный кожаный ремень","price":20},
    {"id":"12","img":"data/images/6.jpg","name":"Держатель для бумаги","description":"Стильный и удобный в монтаже и использовании держатель для туалетной бумаги.","price":10}
];

let items = data;         //сюда парсить базы данных вместо /\ имитированной.

// WITH JQUERY.

function burger(){
    $("#burg").click(function(){
        $(this).toggleClass("active");
        $("#nav").toggleClass("show");
    });
}
function createItems(){                                     //автозаполнение сетки элементами из массива
    if ("content" in document.createElement("template")) {
    var section = document.querySelector(".section");
    var template = document.querySelector(".template__items");
        for(var i=0; i < items.length; i++){
            var clone = template.content.cloneNode(true);
            section.appendChild(clone);
            $("#item").attr("id", items[i].id);
            $("#0").attr({"id" : "i"+(i+1), "src" : items[i].img});
            $("#a").attr("id", "n"+(i+1)).text(items[i].name);
            $("#b").attr("id", "d"+(i+1)).text(items[i].description);
            $("#c").attr("id", "p"+(i+1)).text("$ " + items[i].price);
        }
    }else{}
}
function search(){                                            //поиск по странице с изменением количества отображаемых элементов
    var search = $("#search");
    function changeData(){                                    //изменение массива
        var searchStr = (search.val()).toLowerCase().replaceAll(' ', '');
        var searchData = data.filter(el => el.name.toLowerCase().replaceAll(' ', '').includes(searchStr));
        items = searchData;
        $("a").remove(".detail__link");
        createItems();
    }
    search.keypress(function(e){                              //поиск по нажатию ENTER
        var key = e.which || e.keyCode;
        if (key === 13) {
            e.preventDefault();
            changeData();
        }
    });
    $(".button").click(function(){changeData();});             //поиск по нажатию кнопки поиска
}
function getImgId(){
    $(".section__item").click(function(){
        var itemById = data.filter(el => el.id === this.id);    //получаем id объекта создаем массив с объектом по id
        localStorage.setItem("imgById", itemById[0].img);       //записываем элемент объекта в контейнер для передачи через 'local storage'
    });
}
function setImgById(){
    setTimeout(() =>$("#imgD").attr("src", localStorage.getItem("imgById")), 30);  //берем из 'local storage' и записываем в атрибут 'src' html-элемента
    // localStorage.removeItem("imgById");                     //чистим контейнер в 'local storage'
    // localStorage.clear();                                   //чистим 'local storage'
}

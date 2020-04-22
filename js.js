let btn = document.querySelectorAll('button'),// выбор всех кнопок
    wrap = document.querySelector ('.wrape'),
    link = document.querySelector('a'); //сыылка
 /*
btn[0].onclick = function() { // при нажатии появится сообщение на первой кнопке 
    alert('Вы нажали первую кнопку');
};

btn[0].onclick = function() { 
    alert('Вы опять нажали первую кнопку');
};
*/
/*
btn[0].addEventListener ('click', function(event) {
    console.log(event);
    let target = event.target;
    target.style.display = "none"; // при нажатии изчезает кнопка 
    //console.log('Проиизошло событие: ' + event.type + 'на элементе '+ event.target); // event для поулченеи информации 
}); // сначала клик и потмо функция выполняетя

/*
btn[0].addEventListener ('mouseenter', function(){
    alert('Вы навели на первую кнопку');
});// наведение и текс твыходит 
*/
/*
btn[0].addEventListener ('click', function(event) {
    console.log('Произошло событие ' + event.type+ 'на элементе' + event.target);
});

wrap.addEventListener("click", function(){
    console.log('Произошло событие ' + event.type+ 'на элементе' + event.target);
});
*/
link.addEventListener('click', function(event){
    event.preventDefault(); // отмена стандартнйо рабоыт браузера , не перейдет на ссылку
    console.log('Произошло событие ' + event.type+ 'на элементе' + event.target);
});
btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('Вышли');
    });
});
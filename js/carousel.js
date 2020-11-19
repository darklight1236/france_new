// Сюда записываем все изображения которые хотим добавить в слайдер
const arrayImageCarousel = [
    'carousel_1.svg',
    'carousel_2.jpg',
    'carousel_3.jpg'
];


// Индекс текущей картинки (currentIdImg) и максимальная длинна массива (maxLength)
var currentIdImg = 0, 
    maxLength = arrayImageCarousel.length;



function prev(){
    currentIdImg == 0 ? currentIdImg = maxLength -1 : currentIdImg -= 1;
    changeImgC();
}

function next(){
    currentIdImg == maxLength -1 ? currentIdImg = 0 : currentIdImg += 1;
    changeImgC();
}

// Функция смены картинки
function changeImgC() {
    const slide1 = document.getElementById('slide-1');
    slide1.innerHTML = `<img id='carousel_img' src="img/carousel/${arrayImageCarousel[currentIdImg]}" alt=""> `+ otherHtml +`  `;
}


// НЕ УДАЛЯТЬ ! Так как innerHTML удаляет содержимое блока, в который вставляется
const otherHtml = ` <div class="img_for_carousel">

<div class="text_and_btn_for_carousel">

    <div class="carousel__txt_and_btn">

        <div class="carousel__txt_title">
            <p>Découvrez votre avenir par téléphone</p>
        </div>
        <div class="carousel__txt_subtitle">
            <p>Recherchez un voyant par 
                ses compétences et trouvez 
                son numéro d’appel (remplissez 
                un ou plusieurs champs)</p>
        </div>
        <div class="carousel__btn">
            <button>Le planning</button>
        </div>
                
    </div>
                
    <div class="controls_carousel">
        <div onclick='prev()' class="ctrl_prev"><img src="img/carousel/controls/prev.svg" alt=""></div>
        <div onclick='next()' class="ctrl_next"><img src="img/carousel/controls/next.svg" alt=""></div>
    </div>
</div>
</div>`;

// Ловит событие после загрузки страницы
window.addEventListener('load', function() {
    const slide1 = document.getElementById('slide-1');
    slide1.innerHTML = `<img id='carousel_img' src="img/carousel/` + arrayImageCarousel[currentIdImg] + `" alt=""> `+ otherHtml +`  `;
})
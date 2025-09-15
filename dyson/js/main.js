
// диплом

// ПОКАЗАТЬ ЕЩЕ

document.addEventListener('DOMContentLoaded', function () {
    const showMoreLink = document.getElementById('show-more-link');
    const tabsUl = document.querySelector('.tabs'); // Получаем ul для добавления новых li

    let isClicked = false; // Флаг, чтобы предотвратить повторные клики

    // Обработчик нажатия на "Показать ещё"
    showMoreLink.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем переход по ссылке

        if (isClicked) return; // Если уже нажато, выходим
        isClicked = true; // Устанавливаем флаг

        // Массив с текстом для новых кнопок
        const newTabTexts = ['dyson пылесос', 'dyson утюг', 'dyson смартфон', 'dyson телевизор'];

        // Добавляем новые li с кнопками
        newTabTexts.forEach((text, index) => {
            const newLi = document.createElement('li');
            const newButton = document.createElement('button');
            newButton.className = 'tab-button';
            newButton.setAttribute('data-tab', `new-${index + 1}`); // Уникальный data-tab
            newButton.textContent = text;

            newLi.appendChild(newButton);
            tabsUl.appendChild(newLi); // Добавляем в конец ul

            // Анимация появления (как в оригинале)
            newLi.style.opacity = '0';
            setTimeout(() => {
                newLi.style.transition = 'opacity 0.5s';
                newLi.style.opacity = '1';
            }, 10 + index * 100); // Небольшая задержка для последовательности
        });

        // Отключаем ссылку после одного клика
        showMoreLink.style.pointerEvents = 'none';
        showMoreLink.style.opacity = '0.5'; // Визуально показываем, что отключена
    });
});


// ================================================================

// ВЫПАДАЮЩЕЕ ОКНО

const dropdown = document.querySelector('.dropdown');
const toggleBtn = dropdown.querySelector('.dropdown-toggle');
const menu = dropdown.querySelector('.dropdown-menu');
const items = dropdown.querySelectorAll('.dropdown-item');
const label = dropdown.querySelector('.dropdown-label');

toggleBtn.addEventListener('click', () => {
    const isShown = menu.classList.toggle('show');
    toggleBtn.setAttribute('aria-expanded', String(isShown));
    toggleBtn.querySelector('.dropdown-arrow').classList.toggle('rotated', isShown);

    // Добавляем/удаляем класс open для изменения цвета
    toggleBtn.classList.toggle('open', isShown);
});

items.forEach(item => {
    item.addEventListener('click', () => {
        // Снять выделение и скрыть все галочки
        items.forEach(i => {
            i.classList.remove('selected');
            const check = i.querySelector('.checkmark');
            if (check) check.style.visibility = 'hidden';
        });

        // Выделить текущий и показать галочку
        item.classList.add('selected');
        const checkmark = item.querySelector('.checkmark');
        if (checkmark) checkmark.style.visibility = 'visible';

        // Обновить текст кнопки
        const textSpan = item.querySelector('span');
        if (textSpan) label.textContent = textSpan.textContent;

        // *** Меню НЕ закрываем ***

        // Стрелочка всегда вверх, так как меню открыто
        toggleBtn.querySelector('.dropdown-arrow').classList.add('rotated');
    });
});

// Закрываем меню при клике вне дропдауна
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        menu.classList.remove('show');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.querySelector('.dropdown-arrow').classList.remove('rotated');

        // Убираем класс open при закрытии
        toggleBtn.classList.remove('open');
    }
});

//  ПЛЮС МИНУС карточка товара

document.addEventListener('DOMContentLoaded', function () {
    // Получаем все карточки
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const decreaseBtn = card.querySelector('.decrease');
        const increaseBtn = card.querySelector('.increase');
        const quantitySpan = card.querySelector('.quantity');
        const availabilityDiv = card.querySelector('.availability');
        const statusDot = card.querySelector('.status-dot');
        const availabilityText = card.querySelector('.availability-text');

        let quantity = 1; // Начальное количество

        // Функция обновления количества и статуса
        function updateQuantity() {
            quantitySpan.textContent = quantity;

            // Изменение цвета минуса
            if (quantity > 1) {
                decreaseBtn.classList.add('active-minus');
            } else {
                decreaseBtn.classList.remove('active-minus');
            }

            // Изменение статуса при quantity > 2
            if (quantity > 2) {
                availabilityDiv.classList.add('out-of-stock');
                availabilityText.textContent = 'Нет в наличии';
            } else {
                availabilityDiv.classList.remove('out-of-stock');
                availabilityText.textContent = 'В наличии';
            }
        }

        // Обработчик для минуса
        decreaseBtn.addEventListener('click', function () {
            if (quantity > 1) {
                quantity--;
                updateQuantity();
            }
        });

        // Обработчик для плюса
        increaseBtn.addEventListener('click', function () {
            quantity++;
            updateQuantity();
        });

        // Инициализация
        updateQuantity();
    });
});


// СЛАЙДЕР (функицанал кнопок)=================================

let currentSlide = 1;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const counter = document.querySelector('.slider-counter');

function updateSlider() {
    counter.textContent = `${currentSlide} из 3`;

    prevBtn.classList.remove('inactive');
    nextBtn.classList.remove('inactive');

    if (currentSlide === 1) {
        prevBtn.classList.add('inactive');
    } else if (currentSlide === 3) {
        nextBtn.classList.add('inactive');
    }
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < 3) {
        currentSlide++;
        updateSlider();
    }
});

updateSlider();

// Слайдер переключение карточек

document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        document.querySelector('.product-flex1'),
        document.querySelector('.product-flex1-2'),
        document.querySelector('.product-flex1-3')
    ];

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const counter = document.querySelector('.slider-counter');

    let currentIndex = 0;

    function updateSlider() {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });

        counter.textContent = `${currentIndex + 1} из ${slides.length}`;

        prevBtn.classList.toggle('inactive', currentIndex === 0);
        nextBtn.classList.toggle('inactive', currentIndex === slides.length - 1);
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider();
});



// СМОТРЕТЬ ВСЕ ФОТО ===========================

document.querySelectorAll('.view-all-photos-btn').forEach(button => {
    button.addEventListener('click', () => {
        const reviewItem = button.closest('.review-item');
        const hiddenPhotos = reviewItem.querySelectorAll('.hidden-photo');

        let anyHiddenVisible = false;
        hiddenPhotos.forEach(photo => {
            if (photo.style.display === 'block') anyHiddenVisible = true;
        });

        if (anyHiddenVisible) {
            hiddenPhotos.forEach(photo => photo.style.display = 'none');
            button.textContent = 'Смотреть все фото';
        } else {
            hiddenPhotos.forEach(photo => photo.style.display = 'block');
            button.textContent = 'Скрыть фото';
        }
    });
});

// Показать ещё (отзывы) ===============================================

document.querySelector('.show-more-btn').addEventListener('click', () => {
    const hiddenReview = document.querySelector('.review-hidden');
    if (hiddenReview) {
        hiddenReview.style.display = 'flex'; // или 'block', если flex не подходит
    }
    // Скрываем кнопку после показа
    document.querySelector('.show-more-btn').style.display = 'none';
});

// аккордеон ===============================================

document.querySelectorAll('.flex-question').forEach(flexQuestion => {
    flexQuestion.addEventListener('click', () => {
        const openIcon = flexQuestion.querySelector('.open__question');
        const answer = flexQuestion.nextElementSibling;

        // Переключаем класс активного состояния для ответа
        answer.classList.toggle('active');

        // Переключаем класс активного состояния для иконки
        openIcon.classList.toggle('active');
    });
});


//  news ===============================================================

document.addEventListener('DOMContentLoaded', () => {
    // Кнопка "Показать ещё"
    const showMoreBtn = document.querySelector('.news-show-more-btn');
    const hiddenBlocks = document.querySelectorAll('.news-block.review-hidden');

    showMoreBtn.addEventListener('click', () => {
        hiddenBlocks.forEach(block => {
            block.style.display = 'block'; // Показываем скрытые блоки
        });
        showMoreBtn.style.display = 'none'; // Скрываем кнопку "Показать ещё"
    });

    // Кнопки "Читать дальше" на всех блоках
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newsBlock = button.closest('.news-block');
            const extraText = newsBlock.querySelector('.extra-text');

            if (extraText) {
                extraText.style.display = 'block'; // Показываем дополнительный текст
                button.style.display = 'none'; // Скрываем кнопку "Читать дальше"
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const answerButtons = document.querySelectorAll(".answer-btn");
    
    answerButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const answer = event.target.dataset.answer;
            handleAnswer(answer);
        });
    });
});

let currentAnswer = 0;  // Переменная для хранения текущего ответа

function handleAnswer(answer) {
    const mainSection = document.getElementById("main-section");
    const dialogSection = document.getElementById("dialog");
    const contentSection = document.getElementById("content-section");
    const contentContainer = document.getElementById("content");
    const backBtn = document.getElementById("back-btn");
    const nextBtn = document.getElementById("next-btn");

    // Прячем главную секцию
    mainSection.style.display = "none";

    // Показываем секцию с контентом
    contentSection.style.display = "block";
    
    // Обновляем контент в зависимости от выбранного ответа
    let responseText = "";
    let contentHTML = "";

    currentAnswer = answer;

    switch(answer) {
        case '1':
            responseText = "О, вам интересно, что происходит? Давайте разбираться!";
            contentHTML = "<p>Описание сайта, концепция работы.</p>";
            break;
        case '2':
            responseText = "Я веб-разработчик с опытом в HTML, CSS, JavaScript и WordPress.";
            contentHTML = "<p>Чем я занимаюсь и что мне нравится делать в программировании. за что я возьмусь, за что нет.</p>";
            break;
        case '3':
            responseText = "Вот мои работы:";
            contentHTML = "<p>Блок с сайтами, краткое описание</p>";
            break;
        case '4':
            responseText = "Похоже, вы ошиблись сайтом. Но если хотите, можем поболтать!";
            contentHTML = "<p>Интересные статьи и немного рекламы себя.</p>";
            break;
        case '5':
            responseText = "Вот мои контакты:";
            contentHTML = `
             <p>
                <a href='mailto:ahoney.froggy@gmail.com' style='color:#fff;'>Email: ahoney.froggy@gmail.com</a>
                или 
                <a href='https://t.me/nxoxtxhxixnxgxexlxsxe' target='_blank' style='color:#fff;'>Telegram</a>
            </p>
                        `;
            break;
        default:
            responseText = "Что бы вы хотели узнать обо мне?";
            contentHTML = "<p>Это секция по умолчанию.</p>";
            break;
    }

    // Обновляем текст с эффектом печатающей машинки
    const questionText = document.getElementById("response-text");
    typeWriterEffect(responseText, questionText);
    setTimeout(() => {
    contentContainer.innerHTML = contentHTML;
    }, responseText.length * 50 + 500); // 50 мс на символ + небольшая пауза


    // Кнопка "Назад"
    backBtn.style.display = "inline-block";
    backBtn.addEventListener("click", goBack);

    // Кнопка "Вперед"
    nextBtn.style.display = "inline-block";
    nextBtn.addEventListener("click", goNext);
}

function typeWriterEffect(text, element, speed = 50) {
    element.innerHTML = ""; // Очистим перед анимацией
    let i = 0;
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    element.appendChild(cursor);

    function typeChar() {
        if (i < text.length) {
            const span = document.createElement("span");
            span.textContent = text.charAt(i);
            element.insertBefore(span, cursor);
            i++;
            setTimeout(typeChar, speed);
        }
    }

    typeChar();
}


function goBack() {
    const mainSection = document.getElementById("main-section");
    const contentSection = document.getElementById("content-section");
    const contentContainer = document.getElementById("content");

    // Скрываем секцию с контентом
    contentSection.style.display = "none";
    
    // Показываем главную секцию
    mainSection.style.display = "block";

    // Очищаем старый контент
    contentContainer.innerHTML = "";
}

function goNext() {
    const nextAnswer = currentAnswer + 1;
    // Если есть следующий ответ
    if (nextAnswer <= 5) {
        handleAnswer(nextAnswer.toString());
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector('.profile-image');
    setTimeout(() => {
        img.classList.add('show');
    }, 1500); // через 1.5 секунды, после появления текста
});


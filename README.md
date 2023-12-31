# Гра в Хрестики-Нулики

Це проста гра в Хрестики-Нулики, реалізована з використанням JavaScript та HTML. Гра відбувається на полі 3x3, де гравці по черзі розміщують свої символи ("X" або "O") на вільних клітинках. Переможцем стає той, хто зможе розташувати свої символи в рядку, стовпчику або діагоналі.

## Як грати

1. Відкрийте файл `index.html` у вашому веб-браузері.
2. Клікайте на вільних клітинках, щоб розмістити свій символ ("X" або "O").
3. Гра триває до досягнення переможця або нічії.
4. Натисніть кнопку "Рестарт", щоб почати нову гру.

## Технічні деталі

Гра реалізована за допомогою HTML, CSS та JavaScript. Основні елементи коду:

- `index.html` - головний HTML-файл, який відображає поле гри та кнопку "Рестарт".
- `style.css` - файл стилів, який визначає вигляд гри та ефекти.
- `script.js` - JavaScript-файл, який містить логіку гри та обробники подій.

## Додаткова інформація

Цей проект є навчальним прикладом і демонструє основні принципи роботи з DOM-елементами, подіями та взаємодією з користувачем на стороні клієнта.

## Опис коду

- `tabl`: Отримання елементу таблиці гри з DOM.

- `p`: Отримання елементу `<p>` для відображення повідомлень про результат гри.

- `button`: Отримання кнопки "Рестарт" з DOM. Використовується для перезапуску гри.

- `number`: Лічильник ходів гравців. Зберігає кількість зроблених ходів.

- `arr`: Масив для зберігання ходів гравців. Використовується для відстеження розташування ходів на полі гри.

- `button.onclick`: Обробник події кліку на кнопці "Рестарт". Викликає функцію `resetGame()`, щоб почати нову гру.

- `tabl.onclick`: Обробник події кліку на елементах таблиці гри. Викликає функцію `audit()`, яка перевіряє стан гри після кожного ходу.

- `audit()`: Перевіряє, чи є виграшна комбінація або нічия. Відображає відповідне повідомлення та застосовує стилі до виграшних комбінацій.

- `resetGame()`: Рестарт гри. Очищує масив ходів, скидає лічильник ходів, очищує кнопки та текстове повідомлення.

Цей код реалізує гру "Хрестики-Нулики" (Tic-Tac-Toe) та додає можливість рестарту гри після завершення. Після виграшу або нічії гра автоматично рестартується через 5 секунд.

Бажаємо вам веселого використання цієї ігрової програми! Якщо у вас виникнуть будь-які питання, не соромтеся звертатися.

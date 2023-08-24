const tabl = document.querySelector('#tabl'); // Отримання елементу таблиці
const button = document.querySelector('.button'); // Отримання кнопки "Рестарт"
const p = document.querySelector('p'); // Отримання елементу <p>
let number = 0; // Лічильник ходів
let arr = []; // Масив для зберігання ходів гравців

button.onclick = () => {
  resetGame();
};

// Обробник події кліку на елементах таблиці
tabl.onclick = (event) => {
  // event.target.style.color = 'black'; // Зміна кольору тексту на чорний

  if (!event.target.classList.contains('btn')) return; // Якщо клік не на кнопці, вийти

  let key = event.target.id; // Отримання значення id елемента, на який було спрямовано подію
  if (arr[key] !== undefined) return; // Якщо кнопка вже обрана, вийти

  const player = number % 2 === 1 ? 'O' : 'X'; // Визначення поточного гравця
  const color = player === 'O' ? 'red' : 'blue'; // Визначення кольору для відображення

  number += 1; // Збільшення лічильника ходів
  arr[key] = player; // Збереження ходу гравця
  event.target.textContent = player; // Встановлення значення кнопки
  event.target.style.color = color; // Зміна кольору тексту кнопки
  console.log(arr);
  audit(); // Перевірка на виграш
};

// Перевірка на виграш або нічию
function audit() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Рядки
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Стовпці
    [0, 4, 8],
    [2, 4, 6], // Діагоналі
  ];

  const table = document.querySelector('table'); // Отримання елементу таблиці

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (arr[a] === 'O' && arr[b] === 'O' && arr[c] === 'O') {
      p.textContent = 'Перемогли O';

      table.classList.add('table_red'); // Додавання класу для виділення таблиці
      p.classList.add('p_red'); // Додавання класу для виділення тексту

      return;
    } else if (arr[a] === 'X' && arr[b] === 'X' && arr[c] === 'X') {
      p.textContent = 'Перемогли Х';

      table.classList.add('table_blue'); // Додавання класу для виділення таблиці
      p.classList.add('p_blue'); // Додавання класу для виділення тексту

      return;
    }
  }

  // Якщо гра завершилася нічийним результатом або нічия
  if (number === 9) {
    p.textContent = 'Гра завершилася нічиєю';
  }
}

// Рестарт гри
function resetGame() {
  console.log('reset');
  arr.length = 0; // Очищення масиву ходів
  number = 0; // Скидання лічильника ходів

  const cells = document.querySelectorAll('.btn'); // Отримання всіх кнопок
  for (const cell of cells) {
    cell.textContent = ''; // Очищення значень кнопок
    cell.classList.remove('x', 'o'); // Видалення класів x і o
    cell.style.color = 'white'; // Зміна кольору тексту на білий
  }
  p.textContent = ''; // Очищення тексту <p>
  tabl.classList.remove('table_red', 'table_blue'); // Видалення класів для виділення таблиці

  p.classList.remove('p_red', 'p_blue'); // Видалення класів для виділення тексту
}

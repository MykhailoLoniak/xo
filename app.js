const tabl = document.querySelector('#tabl');
const p = document.querySelector('p');
const button = document.querySelector('.button');
let number = 0;
let arr = [];

button.onclick = () => {
  resetGame();
};

tabl.onclick = (event) => {
  event.target.style.color = 'black';

  if (!event.target.classList.contains('btn')) return;

  let key = event.target.textContent;
  if (arr.includes(key)) return;
  console.log(key);
  const player = number % 2 === 1 ? 'O' : 'X';
  const color = player === 'O' ? 'red' : 'blue';

  number += 1;
  arr[key - 1] = player;
  event.target.textContent = player;
  event.target.style.color = color;

  audit();
};

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

  const table = document.querySelector('table');
  const p = document.querySelector('p');

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (arr[a] === 'O' && arr[b] === 'O' && arr[c] === 'O') {
      p.textContent = 'Перемогли O';

      table.classList.add('table_red');
      p.classList.add('p_red');
      setTimeout(resetGame, 5000);
      return;
    } else if (arr[a] === 'X' && arr[b] === 'X' && arr[c] === 'X') {
      p.textContent = 'Перемогли Х';

      table.classList.add('table_blue');
      p.classList.add('p_blue');
      setTimeout(resetGame, 5000);
      return;
    }
  }

  // Якщо гра завершилася нічийним результатом або нічия
  if (number === 9) {
    p.textContent = 'Гра завершилася нічиєю';
    setTimeout(resetGame, 5000);
  }
}

function resetGame() {
  arr.length = 0;
  number = 0;

  const cells = document.querySelectorAll('.btn');
  for (const cell of cells) {
    cell.textContent = '';
    cell.classList.remove('x', 'o');
    cell.style.color = 'white';
  }

  p.textContent = '';
  tabl.classList.remove('table_red', 'table_blue');

  p.classList.remove('p_red', 'p_blue');
}

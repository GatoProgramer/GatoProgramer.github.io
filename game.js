// Variables globales
const gridSize = 3;
const gridContainer = document.getElementById("gridContainer");
const wordForm = document.getElementById("wordForm");

// Matriz para almacenar las palabras y pistas
const words = [];

// Crear la cuadrícula del crucigrama
function createGrid() {
  gridContainer.innerHTML = ""; // Limpiar el contenido anterior (si existe)
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-item");
      gridContainer.appendChild(cell);
    }
  }
}

// Agregar palabra y pista a la matriz de palabras
function addWordAndClue(word, clue) {
  words.push({ word, clue });
}

// Rellenar la cuadrícula con las palabras
function fillGrid() {
  const cells = gridContainer.querySelectorAll(".grid-item");
  let wordIndex = 0;

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (!cell.dataset.word) {
      cell.textContent = words[wordIndex].word[0].toUpperCase();
      cell.dataset.word = words[wordIndex].word;
      cell.dataset.clue = words[wordIndex].clue;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
}

// Evento de envío del formulario para agregar palabras y pistas
wordForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const wordInput = document.getElementById("word");
  const clueInput = document.getElementById("clue");
  const word = wordInput.value.trim().toLowerCase();
  const clue = clueInput.value.trim();

  if (word && clue) {
    addWordAndClue(word, clue);
    wordInput.value = "";
    clueInput.value = "";
    createGrid();
    fillGrid();
  }
});

// Inicializar el crucigrama
createGrid();
fillGrid();
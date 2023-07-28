const words = ["juego", "casa", "vida"];
let foundWords = [];
let tableSize = 0;
let tableData = [];
let selectedWord = [];

function generateTable() {
  // Calculate the size of the table based on the longest word
  tableSize = Math.max(...words.map(word => word.length)) + 2;

  // Initialize the table data with random letters
  for (let i = 0; i < tableSize; i++) {
    tableData.push([]);
    for (let j = 0; j < tableSize; j++) {
      tableData[i].push(getRandomLetter());
    }
  }

  // Place the words in the table
  placeWords();

  // Render the table with the generated data
  const table = document.getElementById("word-search-table");
  for (let i = 0; i < tableSize; i++) {
    const row = table.insertRow();
    for (let j = 0; j < tableSize; j++) {
      const cell = row.insertCell();
      cell.textContent = tableData[i][j];
      cell.addEventListener("click", () => selectCell(i, j));
    }
  }

  // Generate the mini table with the words to find
  const wordListTable = document.getElementById("word-list-table");
  words.forEach(word => {
    const row = wordListTable.insertRow();
    const cell = row.insertCell();
    cell.textContent = word;
  });
}

function getRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function placeWords() {
  // Place words horizontally or vertically at random positions in the table
  words.forEach(word => {
    const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
    let x, y;

    if (orientation === "horizontal") {
      x = Math.floor(Math.random() * (tableSize - word.length));
      y = Math.floor(Math.random() * tableSize);
      for (let i = 0; i < word.length; i++) {
        tableData[y][x + i] = word[i].toUpperCase();
      }
    } else {
      x = Math.floor(Math.random() * tableSize);
      y = Math.floor(Math.random() * (tableSize - word.length));
      for (let i = 0; i < word.length; i++) {
        tableData[y + i][x] = word[i].toUpperCase();
      }
    }
  });
}

function selectCell(row, col) {
  if (foundWords.includes(`${row}-${col}`)) return; // Already found, skip

  const table = document.getElementById("word-search-table");
  const cell = table.rows[row].cells[col];
  const letter = cell.textContent;
  const cellId = `${row}-${col}`;

  // Highlight the selected letter with yellow background color
  cell.classList.add("selected");

  // Add the selected cell to the current word being formed
  const currentWord = getCurrentWord();
  if (!currentWord || currentWord[currentWord.length - 1] !== cellId) {
    selectedWord.push(cellId);
  }

  checkWord();
}

function getCurrentWord() {
  return selectedWord.map(cellId => {
    const [row, col] = cellId.split("-").map(Number);
    return tableData[row][col];
  }).join("");
}

function checkWord() {
  const currentWord = getCurrentWord();
  if (!currentWord) return;

  const foundWord = words.find((word) => word === currentWord);
  if (foundWord) {
    markCompletedWord(foundWord);
  }
}

function markCompletedWord(word) {
  foundWords.push(...selectedWord);
  selectedWord = [];

  // Highlight the selected cells with cyan background color
  const table = document.getElementById("word-search-table");
  for (const cellId of foundWords) {
    const [row, col] = cellId.split("-").map(Number);
    const cell = table.rows[row].cells[col];
    cell.classList.remove("selected");
    cell.classList.add("found");
  }

  // Mark the completed word in the word list
  const wordListTable = document.getElementById("word-list-table");
  for (let i = 0; i < wordListTable.rows.length; i++) {
    const cell = wordListTable.rows[i].cells[0];
    if (cell.textContent === word) {
      cell.classList.add("found");
      break;
    }
  }

  showMessage(`¡Encontraste la palabra "${word}"!`);
}

function showMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;

  // Clear the message after 2 seconds
  setTimeout(() => {
    messageDiv.textContent = "";
  }, 2000);
}

generateTable();


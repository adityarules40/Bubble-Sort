// Generate random array of heights for bars
function generateArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 250) + 50);
  }
  return array;
}

// Render bars based on array values
function renderBars(array) {
  const barsContainer = document.getElementById('barsContainer');
  barsContainer.innerHTML = '';
  array.forEach(height => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${height}px`;
    barsContainer.appendChild(bar);
  });
}

// Bubble Sort algorithm
async function bubbleSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap array[j] and array[j + 1]
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        // Render bars after swap
        renderBars(array);

        // Pause for visualization (optional)
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
  }
}

// Start sorting
function startSorting() {
  const array = generateArray(25); // Generate array of 25 random heights
  renderBars(array);
  bubbleSort(array);
}

// Reset bars
function reset() {
  const barsContainer = document.getElementById('barsContainer');
  barsContainer.innerHTML = '';
}

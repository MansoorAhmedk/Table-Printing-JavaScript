function printMultiplicationTable(number, maxTable) {
    let tablesOutput = "";
    for (let table = number; table <= maxTable; table++) {
      tablesOutput += `<div class="table-container">`;
      tablesOutput += `<h2>Table of ${table}</h2>`;
      for (let multiplier = 1; multiplier <= 10; multiplier++) {
        const result = table * multiplier;
        tablesOutput += `<p>${table} &nbsp; x &nbsp; ${multiplier}&nbsp; = &nbsp;${result}</p>`;
      }
      tablesOutput += "</div>"; // Close the table-container div
    }

    document.getElementById("output").innerHTML = tablesOutput;
  }

  function getUserInput() {
    const number = parseInt(document.getElementById("inputNumber").value);

    if (isNaN(number) || number < 1 || number > 20) {
      document.getElementById("output").innerHTML = "Invalid input. Please enter a valid number between 1 and 20.";
    } else {
      printMultiplicationTable(number, 20);
    }
  }

  function generateTables() {
    getUserInput();
  }
function addRow() {
  const table = document.getElementById("recordTable").getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  for (let i = 0; i < 5; i++) {
    const newCell = newRow.insertCell();
    const input = document.createElement("input");
    input.type = "text";
    newCell.appendChild(input);
  }
}
/* 
  Homework 6 Question 5
*/

const displayTable = () => {
  let table1 = document.createElement('table');
  table1.style.border = '1px solid black';
  table1.style.textAlign = 'center';

  for(var i = 1; i<13; i++) {
    let thisRow = document.createElement('tr');
    thisRow.style.border = '1px solid black';
    
    let thisCell = document.createElement('td');
    thisCell.style.border = '1px solid black';
    thisCell.innerHTML = i;
    if (i%4 === 0) {
      thisRow.style.backgroundColor = 'lightblue';
    }
    thisRow.appendChild(thisCell);
    table1.appendChild(thisRow);
  }
  let output = document.getElementById('output');
  output.appendChild(table1);
}

displayTable();


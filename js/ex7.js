/* 
  Homework 6 Question 7
*/
const style = document.createElement("style");
style.textContent = `
  span {
    color: red;
    font-weight: bold;
  }
`;
document.head.appendChild(style);

window.addEventListener('load', function () {
  let firstInteger = prompt('Enter a number');
  let secondInteger = prompt('And another one');

  const regex = /^\d+$/;

  const content = document.getElementById('content');

  if (regex.test(firstInteger) && regex.test(secondInteger)) {
    content.innerHTML = `"${firstInteger}" + "${secondInteger}" = <span>${parseInt(firstInteger) + parseInt(secondInteger)}</span>`;
  } else {
    content.innerHTML = `<span>Error!</span> You must enter integers. You entered "${firstInteger}" and "${secondInteger}". Try again`;
  }
})
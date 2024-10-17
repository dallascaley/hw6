/* 
  Homework 6 Question 4
*/

const addCOBLink = () => {
  let csulbLink = document.getElementById('csulb');
  let newLink = document.createElement('li');
  let aTag = document.createElement('a');
  
  aTag.innerHTML = 'College of Business';
  aTag.href = 'https://www.csulb.edu/college-of-business';

  newLink.appendChild(aTag);
  csulbLink.insertAdjacentElement("afterend", newLink);
}

addCOBLink();




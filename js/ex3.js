/* 
  Homework 6 Question 3
*/

const styleParagraphs = () => {
   document.querySelectorAll('p').forEach(
      element => {
         element.style.backgroundColor = "yellow";
         element.style.fontWeight = "bold";
      }
    );
 }
 
styleParagraphs();

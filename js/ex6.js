/* 
  Homework 6 Question 6
*/

const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const addMiniDictionary = () => {
  let dictionaryList = document.createElement('dl');

  words.forEach(item => {
    let dictionaryTitle = document.createElement('dt');
    dictionaryTitle.innerHTML = item.term;
    dictionaryTitle.style.fontWeight = 'bold';
    dictionaryList.appendChild(dictionaryTitle);

    let dictionaryDefinition = document.createElement('dd');
    dictionaryDefinition.innerHTML = item.definition;
    dictionaryList.appendChild(dictionaryDefinition);
  })

  let content = document.getElementById('content');
  content.appendChild(dictionaryList);
}

addMiniDictionary();



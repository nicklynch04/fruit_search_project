const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let inputLength = 0

function search(str) {  
   str = str.toLowerCase() 
   const lowerCaseFruit = fruit.map(val => val.toLowerCase())
   let results = lowerCaseFruit.filter(val => val.includes(str))
   results = results.sort((a,b) => a.indexOf(str) - b.indexOf(str))
   results = results.slice(0, 8)
   return results
}
 



function searchHandler(e) {
    let matches = []
    suggestions.innerHTML = ''
    if (e.target.value.length > 0) {
        matches = search(e.target.value)
        matches.forEach(match => {      
            let newLi = (document.createElement('li'))
            newLi.innerText = match;
            console.log(newLi)
            suggestions.append(newLi)});
        showSuggestions(matches) } 
    else return

}


function showSuggestions(results) {
    if (results.length !==0) {
        suggestions.classList.add('has-suggestions')
        console.log(results);
    } else {return}
}

function useSuggestion(e) {
	input.value = e.target.innerText;   
    suggestions.classList.remove('has-suggestions')
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
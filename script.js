//window.alert("test")
//window.document.write("test")
/*
function display() {
   console.log("hello")
}

window.display()
*/

//console.log(document.body.style.background = "red")

//console.log(location.href)
//location.href = "https://app.diagrams.net/";

/*
document.title = "Lesson";
console.log(document.body.childNodes)

for (let i = 0; i < document.body.childNodes.length; i++) {
   console.log(document.body.childNodes[i])
}

//firstChild lastChild

console.log(document.body.firstChild, document.body.lastChild)


for (item of document.body.childNodes) {
   console.log(item)
}
*/

//console.log(document.body.parentNode === document.documentElement)

//console.log(document.head.nextSibling)


// for (let elem of document.body.children) {
//    for (let l of elem.children) {
//       l.style.background = 'red';
//    }
// }

//DZ\\

// for (elem of document.body.children) {
//    console.log(elem)
//    for (l of elem.children) {
//       console.log(l)
//    }
// }


//console.log(document.body.firstElementChild);
//console.log(document.body.children[1].lastElementChild)


//getElement, querySelector


/*
let elem = document.body.firstElementChild
elem.style.color = "red";
console.log(elem);
*/
/*
unickBlock = document.getElementById('unik_block');
unickBlock.style.fontSize = "25px";
//let cla = prompt();
//let sty = prompt();



let setText = (a, b) => {
   const elem = document.getElementsByClassName(a);
   for (item of elem) {
      item.style.color = b;
   }
}
setText(cla, sty)

*/

//document.querySelector('.container').style.color = 'red';
//document.querySelector('.container ul').style.color = 'green';

/*
let container = document.getElementsByClassName('container')[0];
elem = container.children;
for (item of elem) {
   console.log(item.textContent)
}
*/

/*
let elem = document.querySelectorAll('.container ul li');
for (item of elem) {
   console.log(item.innerHTML)
}
*/
//DZ\\

const elemNameSerach = document.getElementsByName('search');
elemNameSerach[0].style.fontSize = "30px";
elemNameSerach[0].style.background = "red";
elemNameSerach[0].lastElementChild.style.color = 'yellow';
elemNameSerach[0].lastElementChild.style.background = 'green';

const tagName = elemNameSerach[0].getElementsByTagName('input');
tagName[0].style.background = 'yellow'

const elemNamePerson = document.getElementsByName('search-person');
elemNamePerson[0].style.background = 'black';

for (let i = 0; i < elemNamePerson.length; i++) {
   elemNamePerson[i].style.color = 'red'
   elemNamePerson[i].lastElementChild.style.color = 'blue';
}

const elemAgeTable = document.querySelector('#age-table');
const tagTd = elemAgeTable.querySelectorAll('td');
tagTd[0].style.color = 'yellow';
tagTd[2].style.color = 'white';

const elemAllLabel = document.querySelectorAll('#age-list label');
for (item of elemAllLabel) {
   item.style.color = 'blue';
}
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

/*
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
*/

/*
const elem = document.querySelectorAll('#age-table input');
let check = 0;
for (item of elem) {
   check++;
   if (check % 2 == 0) {
      item.style.background = 'black';
   }
}
console.log(elem);
*/

/*
elem.nodeType == 1 для узлов-элементов,
elem.nodeType == 3 для текстовых узлов,
elem.nodeType == 9 для объектов документа,
*/

//console.log(document.nodeType)


/*
document.body.innerHTML = "<div class='hello' style='font-size:30px'>hello</div>"
document.body.innerHTML += "<p>text</p>"
console.log(document.body.innerHTML);
*/

//console.log(document.body.innerHTML);
//document.body.outerHTML += "<h1>blablabla</h1>"
//console.log(document.body.outerHTML);

/*
let foo = (nameClass, size, color) => {
   let b = document.body.outerHTML += `<div class="${nameClass}" style="width:${size}px; height:${size}px; background:${color}">text</div>`
}

foo("hello", "400", "red")
foo("ttt", "250", "blue")
*/

//console.log(document.body.firstChild.nextSibling.nextSibling.data)

//console.log(document.querySelector('.test').textContent)

/*

let q = prompt();
let foo = (a) => {
   let s = document.body.textContent += `${a}`
}
foo(q);
*/

//setTimeout
//setInterval

/*
function hello(name) {
   alert("hello");
}
*/

//setTimeout((name)=>alert("hello",name),4000,"name")

//myFunc = setTimeout(hello, 4000, "Dima");

//let goId = setInterval(() => alert("hello"), 4000);
//clearInterval(goId);

//document.getElementsByClassName('test')[0].hidden = false;


/*
   1)Создать эпилепсию. Когда включается сайт. Весь его задний фон должен меняться 10 разными цветами каждую 1 секунду.
   2)Создать класс для генерации сложных объектов. див,p,img. Если div + 1 + 1 ввести текст     p изменить шрифт цвет   img ссылки поменять картинку размер картинки

   ООП

*/
//DZ\\
/*
const colors = ['red', 'black', 'white', 'green', 'pink', 'blue', 'yellow', 'brown', 'gray', 'orange', 'lime', 'blueviolet', 'cyan', 'coral'];

function rand() {
   let random = Math.floor(Math.random() * colors.length);
   let randColors = document.body.style.background = colors[random];
}

let i = 0;

let int = setInterval(() => {
   rand()
   i++;
   if (i > 25) {
      clearInterval(int)
   }
}, 500);
*/

/*
document.body.myData = {
   name: "MyData",
   color: "red"
}

document.body.showNamePage = () => {
   alert("This main page");
}

document.body.showNamePage();

console.log(document.body.myData.color)
*/


// document.querySelector('input').type = "button";
// console.log(document.querySelector('input').type)


// console.log(document.querySelector('input').setAttribute("myDate", "Hello"));
// document.querySelector('input').removeAttribute('myDate')
// console.log(document.querySelector('input').hasAttribute('myDate'))
// console.log(document.querySelector('input').getAttribute('myDate'))


/*
for (let atr of document.querySelector('input').attributes) {
   console.log(atr.name, atr.value)
}
*/
/*
let foo = () => {
   let f = document.querySelectorAll('form input');
   for (item of f) {
      let atr = prompt();
      let text = prompt();
      item.setAttribute(atr, text);
   }
}
foo()
*/

/*
let div = document.createElement('div');
div.className = "hello"
div.style.background = 'red'
div.innerHTML = '<del>Hello</del>'

document.body.append(div)
document.body.prepend(div)
document.querySelector('input').after(div);
document.querySelector('form').before(div);

let form = document.querySelector('form').cloneNode(true)
document.querySelector('form').remove();
document.body.prepend(form);
*/

// let fragment = new DocumentFragment();

// let div = document.createElement('div');
// div.className = "hello"
// div.style.background = 'red'
// div.innerHTML = '<del>Hello</del>'

// fragment.prepend(div);

// let h1 = document.createElement('h1');
// h1.textContent = "hello";

// fragment.prepend(h1);

// document.body.prepend(fragment);

/*
let date = new Date();
date.get
*/
//DZ\\
/*
let date = new Date;
date.setHours(12, 01, 06)
const stopTime = setInterval(() => {
   const times = document.getElementById("timer").innerHTML = new Date(date -= 1000).toLocaleTimeString();
   if (times <= '12:00:00') {
      clearInterval(stopTime)
      document.querySelector('h1 span').style.display = 'unset'
   }
}, 1000);
*/
/*
class Block {
   constructor(type) {
      this.type = type;
   }
   setRemove() {
      let rem = prompt('какой тег хотите удалить?');
      document.querySelector(rem).remove();
   }
   tagCreat() {
      if (this.type == 'div') {
         let question = prompt("сколько div вы хотите создать?");
         for (let i = 0; i < question; i++) {
            let tagDiv = document.createElement('div');
            tagDiv.className = prompt('className');
            document.body.prepend(tagDiv);
         }
      } else if (this.type == 'p') {
         let question_Two = prompt("сколько p вы хотите создать?");
         for (let i = 0; i < question_Two; i++) {
            let tagP = document.createElement('p');
            tagP.textContent = prompt('text');
            document.body.prepend(tagP);
         }
      } else if (this.type == 'img') {
         let question_Tree = prompt("сколько img вы хотите создать?");
         for (let i = 0; i < question_Tree; i++) {
            let tagImg = document.createElement('img');
            tagImg.src = prompt('src');
            tagImg.className = prompt('className');
            tagImg.style = prompt(style);
            document.body.prepend(tagImg);
         }
      }
   }
}
let block = new Block(prompt('div/p/img?'));
block.tagCreat();
*/


/*
   beforebegin - над
   afterbegin - в. самый верх
   beforeend - в. самый низ
   afterend - после
*/

/*
document.querySelector('.test').insertAdjacentHTML("afterend", "<h1>Hello</h1>")
*/

/*
document.querySelector('.row').classList.add('blablabla')
document.querySelector('.row').classList.toggle('123')
console.log(document.querySelector('.row').classList.contains('blablabla'))
console.log(document.querySelector('.row').classList)
*/

/*
let go = () => {
   document.body.style.background = "red";
}
*/
/*
let go = () => {
   let text = document.querySelector('#text').value;
   let cls = document.querySelector('#class').value;
   console.log(text, cls)
   let h = document.createElement('h1');
   h.className = cls;
   h.textContent = text;
   document.body.append(h);
}

let rem = () => {
   let classss = document.querySelector('#remove').value;
   console.log(classss)
   let s = document.querySelector(`.${classss}`);
   s.remove();
}
*/
/*
document.body.style.background = 'red';
document.body.style.marginBottom = '50px';

document.querySelector('div').style.cssText = `
   color:red;
   font-size:30px;
   background: blue;
`
*/

/*
let elem = document.querySelector('.test')
let elemStyle = getComputedStyle(elem)
console.log(elemStyle.backgroundColor);
*/
/*
let l = document.querySelector('.info');

console.log(l.offsetTop)
console.log(l.offsetLeft)

console.log('\n');

console.log(l.offsetWidth)
console.log(l.offsetHeight)

console.log('\n');

console.log(l.clientLeft)
console.log(l.clientTop)
console.log(l.clientWidth)
console.log(l.clientHeight)

console.log('\n');

console.log(l.scrollWidth)
console.log(l.scrollHeight)
*/
//DZ\\
/*
let show = () => {
   let text = document.querySelector('.text').value;
   let nameCls = document.querySelector('.class').value;
   let tagP = document.createElement('p');
   tagP.className = nameCls;
   tagP.textContent = text;
   document.body.append(tagP);
}

let showStyle = () => {
   let cls = document.querySelector('.class-style').value;
   let stl = document.querySelector(`.${cls}`);
   let text_Stl = document.querySelector('.text-style').value;
   let text_Stl_Fs = document.querySelector('.text-style-fs').value;
   stl.style.color = text_Stl;
   stl.style.fontSize = `${text_Stl_Fs}px`;
}
*/
//DZ
/*
let show = () => {
   let i = document.querySelector('.info');
   let scroll_H = i.scrollHeight;
   let client_H = i.clientHeight;
   if (client_H < scroll_H) {
      i.style.height = `${scroll_H}px`;
      document.querySelector('#text').textContent = 'свернуть';
   } else if (scroll_H > '300') {
      i.style.height = `200px`;
      document.querySelector('#text').textContent = 'розвернуть';
   }
}
*/
//DZ
/*
function changestyle() {
   let act = document.querySelector('.action');
   if (act.hidden == true) {
      act.hidden = false;
      setTimeout(changestyle, 1000);
   } else {
      act.hidden = true;
      setTimeout(changestyle, 700);
   }
}
setTimeout(changestyle);
*/

/*
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(document.documentElement.clientWidth)
*/

// console.log(window.pageYOffset);

// const go = () => {
//    if (window.pageYOffset > 0) {
//       window.scrollBy(0, -100);
//       setTimeout(go, 0);
//    }
// }

/*
let int = setInterval(() => {
   go();
   if (window.pageYOffset == 0) {
      clearInterval(int)
   }
}, 0)
*/

// let up = () => {
//    window.scrollBy(0, -100)

// }

//document.body.style.overflow = 'hidden'
/*
let go = () => {
   let block = document.querySelector('#block')
   document.body.style.overflow = 'hidden'
   block.hidden = false;
}
let exid = () => {
   let ex = document.querySelector('#block');
   ex.hidden = true;
   document.body.style.overflow = '';
}

let infogo = () => {
   document.querySelector('#info').scrollIntoView(true);
}
*/
//DZ
/*
let field = document.querySelector('.field');
let ball = document.querySelector('#ball');
ball.style.left = (field.clientWidth / 2) - (ball.offsetWidth / 2) + 'px';
ball.style.top = (field.clientHeight / 2) - (ball.offsetHeight / 2) + 'px';
*/

/*
let d = document.querySelector('div');
function createMsg(elem, html) {
   let message = document.createElement('div');
   message.style.cssText = 'position:fixed; background:yellow';

   let cord = d.getBoundingClientRect();
   message.style.left = cord.left + 'px';
   message.style.top = cord.bottom + 10 + 'px';

   message.innerHTML = html;
   return message;
}

let message = createMsg(d, "hello");
document.body.append(message);
setTimeout(() => message.remove(), 8000);
*/

/*
field.onclick = function (event) {
   let value = event.clientX + ':' + event.clientY
   console.log(value)
}
*/

//position:fixed clientX/clientY
//position:absolute pageX/pageY

/*

dStyle = getComputedStyle(d)
console.log(dStyle);

console.log(d.getBoundingClientRect())
*/

//d = document.querySelector('div');

/*
let top_1 = d.getBoundingClientRect().top + window.pageYOffset
console.log(top_1);

let field = document.querySelector('.field');

document.onclick = (e) => {
   console.log(e.clientX, e.clientY)
}
*/
/*

События мыши:

click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).

contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.

mouseover / mouseout – когда мышь наводится на / покидает элемент.

mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.

mousemove – при движении мыши.

События на элементах управления:

submit – пользователь отправил форму <form>.
focus – пользователь фокусируется на элементе, например нажимает на <input>.
Клавиатурные события:

keydown и keyup – когда пользователь нажимает / отпускает клавишу.
События документа:

DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
*/
/*
let print = () => {
   console.log("hello")
}

let info = () => {
   console.log("goodbuy")
}

document.querySelector('.test').addEventListener('click', print);
document.querySelector('.test').addEventListener('click', info);
*/
/*
document.querySelector('.test').onclick = (event) => {
   event.currentTarget.style.background = 'black';
   console.log(event.type, event.clientX, event.clientY, event.currentTarget)
}
*/
// //DZ


/*
document.querySelector('#field').onclick = (event) => {

   let field = document.querySelector('#field')
   let fieldCoords = document.querySelector('#field').getBoundingClientRect();
   let ball = document.querySelector('#ball');

   let ballLeft = event.clientX - fieldCoords.left - ball.clientWidth / 2;
   let ballTop = event.clientY - fieldCoords.top - ball.clientHeight / 2;

   if (ballTop < 0) ballTop = 0;
   if (ballLeft < 0) ballLeft = 0;
   if (ballTop + ball.clientHeight > field.clientHeight) {
      ballTop = field.clientHeight - ball.clientHeight;
   }
   if (ballLeft + ball.clientWidth > field.clientWidth) {
      ballLeft = field.clientWidth - ball.clientWidth;
   }
   ball.style.left = ballLeft + 'px';
   ball.style.top = ballTop + 'px';
}
*/

let isBlack = true;
const game = document.querySelector('.game');

let g = game.children;

const black = "rgb(0, 0, 0)";
const red = "rgb(255, 0, 0)";

const b = 'black';
const r = 'red';

game.onclick = (event) => {

   const background = getComputedStyle(event.target).backgroundColor;

   if (isBlack && background != red) {
      event.target.style.background = 'black';
      isBlack = false;
   }
   else if (background != black) {
      event.target.style.background = 'red';
      isBlack = true;
   }
   if (g[0].style.background == b && g[1].style.background == b && g[2].style.background == b) {
      console.log('win black');
   }
   else if (g[0].style.background == r && g[1].style.background == r && g[2].style.background == r) {
      console.log('win red');
   }
   else if (g[3].style.background == b && g[4].style.background == b && g[5].style.background == b) {
      console.log('win black');
   }
   else if (g[3].style.background == r && g[4].style.background == r && g[5].style.background == r) {
      console.log('win red');
   }
   else if (g[6].style.background == b && g[7].style.background == b && g[8].style.background == b) {
      console.log('win black');
   }
   else if (g[6].style.background == r && g[7].style.background == r && g[8].style.background == r) {
      console.log('win red');
   }
   else if (g[0].style.background == b && g[4].style.background == b && g[8].style.background == b) {
      console.log('win black');
   }
   else if (g[0].style.background == r && g[4].style.background == r && g[8].style.background == r) {
      console.log('win red')
   }
   else if (g[2].style.background == b && g[4].style.background == b && g[6].style.background == b) {
      console.log('win black');
   }
   else if (g[2].style.background == r && g[4].style.background == r && g[6].style.background == r) {
      console.log('win red');
   }
   else if (g[0].style.background == b && g[3].style.background == b && g[6].style.background == b) {
      console.log('win black');
   }
   else if (g[0].style.background == r && g[3].style.background == r && g[6].style.background == r) {
      console.log('win red');
   }
   else if (g[1].style.background == b && g[4].style.background == b && g[7].style.background == b) {
      console.log('win black');
   }
   else if (g[1].style.background == r && g[4].style.background == r && g[7].style.background == r) {
      console.log('win red');
   }
   else if (g[2].style.background == b && g[5].style.background == b && g[8].style.background == b) {
      console.log('win black');
   }
   else if (g[2].style.background == r && g[5].style.background == r && g[8].style.background == r) {
      console.log('win red');
   }
}

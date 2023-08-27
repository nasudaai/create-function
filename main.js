const app = document.getElementById('app');
console.log(app);

const createElm = (elm) => {
 const newElm = document.createElement(elm);
 return newElm;
}

const h = createElm('h1');
h.textContent = 'hello';
app.appendChild(h);
console.log(h);

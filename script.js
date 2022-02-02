function load_list_img() {
  let body = document.getElementById("body");
  let liste = document.createElement("ul");
  body.appendChild(liste);
  let tag = 0;
  let i = 0;
  while (tag <= 10) {
    let num = Math.floor(Math.random() * 100);
    if (num <= 10) {
      let li = document.createElement("li");
      let textli = document.createTextNode(num);
      li.appendChild(textli);
      liste.appendChild(li);
      if (num === 10) {
        i += 1;
        console.log(`${num} est triré : ${i}`);
      }
      tag += 1;
    }
  }
  let par = document.getElementById("dix");
  par.innerText = `Nombre de fois le chiffre dix est tiré : ${i}`;
  let r = Math.floor(Math.random() * 100);
  let g = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
  let ul = document.createElement("ul");
  for (i = 0; i <= 12; i++) {
    let lin = document.createElement("li");
    let img = document.createElement("img");
    let idUri = Math.floor(Math.random() * 100);
    img.src = `https://picsum.photos/id/${idUri.toString()}/350/350`;
    lin.appendChild(img);
    ul.appendChild(lin);
    body.appendChild(ul);
  }
}
function listeNumber() {
  let liste = document.getElementById("liste");
  for (i = 0; i <= 10; i++) {
    let li = document.createElement("li");
    let textLi = document.createTextNode(Math.floor(Math.random() * 100));
    li.appendChild(textLi);
    liste.appendChild(li);
  }
}

function createTable(x, y) {
  let table = document.getElementById("table");
  for (i = 0; i < x; i++) {
    let tr = document.createElement("tr");
    for (j = 0; j <= y; j++) {
      let td = document.createElement("td");
      let tdtext = document.createTextNode(`cellule : ${i}-${j}`);
      td.appendChild(tdtext);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  table.setAttribute("border", "2");
}

function numberlessThenTwenty(a) {
  var tbl = document.getElementById("table");
  while (a <= 20) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var celltext = document.createTextNode(`${a}`);
    td.appendChild(celltext);
    tr.appendChild(td);
    tbl.appendChild(tr);
    a += 2;
  }
}

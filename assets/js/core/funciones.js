
/* Funcion que permite crear el portfolio de imagenes sin tener que colocar una por una en el codigo */

const portfolioContainer = document.getElementById("portfolioContainer")

function buildImagePortfolio(portfolioContainer, url, index) {

  let div = document.createElement("div");
  div.setAttribute('class', "col-lg-3 col-md-4 col-6")
  div.id = "imgDiv" + index;
  portfolioContainer.appendChild(div);

  let portfolioDiv = document.getElementById("imgDiv" + index);
  let a = document.createElement("a");
  a.setAttribute('class', "d-block mb-4 h-100")
  a.id = "imgA" + index
  portfolioDiv.appendChild(a);

  let portfolioA = document.getElementById("imgA" + index);
  let img = document.createElement("img");
  img.setAttribute('class', "img-fluid img-thumbnail")
  img.setAttribute('src', url)
  portfolioA.appendChild(img);
}

/** Randomiza las imagenes para que al cargar la pagina cambien de posicion*/

var lista=[0,1,2,3,4,5,6,7,8,9,10,11];

let shuffledLista = lista.sort(function () {
  return Math.random() - 0.5;
});

for (let i of shuffledLista) {
  var url = "assets/img/imagen" + i + ".jpeg";
  buildImagePortfolio(portfolioContainer, url, i)
}


let div1 = document.getElementById("2");
let div2 = document.getElementById("3");
let div3 = document.getElementById("4");
let div4 = document.getElementById("1");
const listGroup = document.querySelector(".list-group");

// let start = document.createElement("button");
let next = document.createElement("button");
let prev = document.createElement("button");

// start.onclick = startList();
// start.innerHTML = "start";

// next.onclick = getNextList();
next.dataset.url = "";
next.innerHTML = "next";

// prev.onclick = getPrevList();
prev.dataset.url = "";
prev.innerHTML = "Previous";

div3.appendChild(next);
// div2.appendChild(start);
div1.appendChild(prev);

// function startList() {
//   // Fetch data from api
//   return fetch = ("https://pokeapi.co/api/v2/pokemon")
//     .then(response => {
//       // take response from api and turn into json
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       //   store data in variable
//       let pokemonList = data.results;

//       // Find element that I want to put generated elements in
//       let ul = document.getElementById("1");

//       // create elements from data and add it to the FOUND element
//       return pokemonList.map(pokemon => {
//         // Creating elements
//         let li = document.createElement("li");
//         let a = document.createElement("a");

//         //   setting element data
//         a.innerHTML = pokemon.name;
//         a.href = pokemon.url;
//         li.className = "each";

//         //   building up the HTML from the pieces
//         li.appendChild(a);
//         ul.appendChild(li);
//       });
//     });
// }

const getList = (url = "https://pokeapi.co/api/v2/pokemon?limit=10") => {
  // Fetch data from api
  fetch(url)
    .then(response => {
      // take response from api and turn into json
      return response.json();
    })
    .then(data => {
      console.log(data);
      //   store data in variable
      let pokemonList = data.results;

      // create elements from data and add it to the FOUND element
      return pokemonList.map(pokemon => {
        // Find element that I want to put generated elements in
        let div = document.getElementById("1");

        // let card = document.createElement("div");
        // card.className = "card";
        // card.id = "card";
        // let content = document.createElement("div");
        // content.className = "card-content";
        let ul = document.createElement("ul");

        // Creating elements
        // let li = document.createElement("li");
        let p = document.createElement("li");
        let info = document.createElement("button");
        // let avatar = document.createElement("img");
        // let info = document.createElement("button");

        //   setting element data
        p.innerHTML = pokemon.name;
        p.href = pokemon.results;

        // info.onclick = getNextList();
        // info.dataset.url = "";
        // info.innerHTML = "More Info";

        // avatar.scr = pokemon;

        info.addEventListener("click", function() {
          let infoUrl = (p.href = pokemon.url);
          getPokeInfo(infoUrl);
        });

        // li.className = "each";

        //   building up the HTML from the pieces
        // li.appendChild(a);
        // content.appendChild(avatar);
        // content.appendChild(p);
        // content.appendChild(info);
        // content.appendChild(window.infop);
        p.appendChild(info);
        ul.appendChild(p);
        div.appendChild(ul);

        //Passing next and previous url
        next.url = data.next;
        prev.url = data.previous;
      });
    });
};

const getPokeInfo = (pUrl = "https://pokeapi.co/api/v2/pokemon/1/") => {
  fetch(pUrl)
    .then(response => {
      // take response from api and turn into json
      return response.json();
    })
    .then(data => {
      console.log(data);
      //   store data in variable
      let pokemonInfo = data;
      console.log(pokemonInfo);

      let hold = document.getElementById("1");

      let card = document.createElement("div");
      card.className = "card";
      card.id = "card";
      let content = document.createElement("div");
      content.className = "card-content";

      // Create Elements to hold abilities
      let pokemon = document.createElement("h4");
      let pokemonH = document.createElement("h6");
      let pokemonW = document.createElement("h6");
      let pokemonHH = document.createElement("h6");
      let pokemonHW = document.createElement("h6");
      let move = document.createElement("h6");
      let picture = document.createElement("img");

      //   setting element data
      pokemon.innerHTML = data.name;
      picture.src = data.sprites.front_shiny;
      pokemonH.innerText = "Height: ";
      pokemonW.innerText = "Weight: ";
      pokemonHW.innerHTML = data.weight;
      pokemonHH.innerHTML = data.height;

      //   building up the HTML from the pieces

      content.appendChild(picture);
      content.appendChild(pokemon);
      content.appendChild(pokemonH);
      content.appendChild(pokemonHH);
      content.appendChild(pokemonW);
      content.appendChild(pokemonHW);
      content.appendChild(move);
      card.appendChild(content);
      hold.appendChild(card);
    });
};

// function getPrevList(url) {
//   // Fetch data from api
//   return fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
//     .then(response => {
//       // take response from api and turn into json
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       //   store data in variable
//       let pokemonList = data.results;

//       // Find element that I want to put generated elements in
//       let ul = document.getElementById("1");

//       // create elements from data and add it to the FOUND element
//       return pokemonList.map(pokemon => {
//         // Creating elements
//         let li = document.createElement("li");
//         let a = document.createElement("a");

//         //   setting element data
//         a.innerHTML = pokemon.name;
//         a.href = pokemon.url;
//         li.className = "each";

//         //   building up the HTML from the pieces
//         li.appendChild(a);
//         ul.appendChild(li);
//       });
//     });
// }

window.onload = getList();
if (prev.url === null) {
  //   prev.innerHTML = "";
}

next.addEventListener("click", function() {
  //   listGroup.innerHTML = "";
  let nextUrl = next.url;
  getList(nextUrl);

  var list = document.getElementById("1");

  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
});

prev.addEventListener("click", function() {
  //   listGroup.innerHTML = "";
  let prevUrl = prev.url;
  getList(prevUrl);

  var list = document.getElementById("1");

  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
});

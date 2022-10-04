//You can edit ALL of the code here
const list = document.getElementById('inputElement');
const container = document.getElementById('mainSection');
const btnSubmit = document.getElementById('submitbtn');

// list.addEventListener('input', valueInput);
//btnSubmit.addEventListener('submit', )

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

// function valueInput(e){
//   e.preventDefault();
//   const val = list.value;
//   makePageForEpisodes(val);
//   console.log(val); 
// }

function makePageForEpisodes(episodeList) {
  //const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  let episode = episodeList.map(item =>{
    return `
  <div>
    <h2>${item.name}<span> S01E0${item.season}</span></h2>
    <h4>${item.number}</h4>
    <img src=${item.image.medium} alt=${item.url}/>
    <p>${item.summary}</p>
    <p>Data is from: <span>TVMaze.com</span></p>
    <a href="${item._links.self.href}">${item._links.self.href}</a>
  </div>
  ` }).join('');
  container.innerHTML = episode;
}

window.onload = setup;

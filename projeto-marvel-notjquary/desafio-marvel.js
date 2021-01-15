document.addEventListener("DOMContentLoaded", function (event) {
    const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=30&apikey=7e99323b2679072c3e1119052f1aca13&hash=779d449f29c113e00feddbada3e680af';
    const content = document.getElementById('marvel-row');
 
    const getHeroes = async function (url) {
        const data = await fetch(url);
        const body = await data.json();
        const allHeroes = body.data.results;
 
        Array.from(allHeroes).forEach((marvel) => {
         const div = document.createElement("div");
         const urlMarvel = marvel.urls[0].url
         div.classList = 'marvel';
         div.innerHTML = `<a href="${urlMarvel}" target="_blank">
 
     <img src="${marvel.thumbnail.path}.${marvel.thumbnail.extension}">
     </a> 
         <h3 class="title">${marvel.name}</h3>` 
             content.appendChild(div);
        }) 
    }
    getHeroes(url);
});
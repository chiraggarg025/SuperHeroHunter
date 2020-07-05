
//========Accessing the hero==============//
var xhrRequest = new XMLHttpRequest();
// Accessing the hero id from current window object
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var heroId = urlParams.get('id');
//  console.log(heroId);
// var heroObject=null;
xhrRequest.onload = function (){
        var result=JSON.parse(xhrRequest.response);
        // Getting all the available data
        var names =result;
        let heroObject=names;
        console.log(heroObject);
        // window.location.assign('superhero.html?id='+heroId);
        fillHeroData(heroObject);
        document.getElementById('hero-image').attributes.src=heroObject.image.url;
}
xhrRequest.open('get','https://www.superheroapi.com/api.php/3328323083897178/'+heroId);
xhrRequest.send();


// ======================== function to fill all the super herro data//

function fillHeroData(data){
    console.log(data.image.url)
    var img = document.getElementById('hero-image');
    img.setAttribute('src',data.image.url);
    console.log(img);
    document.getElementById('hero-name').innerText=data.name;
    var powers = data.powerstats;
    // Traversing through powers
    for (const [key, value] of Object.entries(powers)) {
        var p = document.createElement('p');
        p.innerText=`${key}: ${value}`;
        p.classList.add('details')
        document.getElementById('hero-details').appendChild(p);
        console.log(`${key}: ${value}`);
      }
}

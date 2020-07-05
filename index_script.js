// Trigger function get Data on each keyup event in input
document.getElementById('hero-name').onkeyup=getData;

//hero id
let heroId;
// function to get data
function getData(){

    var val = document.getElementById('hero-name').value;
    var list = document.getElementById('auto-complete');
    clearList();
  
    var xhrRequest = new XMLHttpRequest();
    // Handling http request
    xhrRequest.onload = function (){
        var result=JSON.parse(xhrRequest.response);
        // Getting all the available data
        var names =result.results;

        if(names==null){
            clearList();
            console.log("not found")
        }else{
            for(var i of names){
                // creating individual list item and appending it
                var li = document.createElement('li');
                li.innerText=i.name;
                li.id=i.id;
                li.classList.add('list-group-item');
                li.addEventListener('click',function(){
                    heroId=this.id;
                    document.getElementById('hero-name').value=this.innerText;
                    clearList();
                    return;
                })
                var ul = document.getElementById('auto-complete').appendChild(li);
            }
        }
        
    }
    // xmlRequest
    xhrRequest.open('get','https://www.superheroapi.com/api.php/3328323083897178/search/'+val);
    xhrRequest.send();
    
}

// Function to clear the list items from list
function clearList(){

    var list = document.getElementById('auto-complete');
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild)
    }
    // heroId=null;
}
// on clicking search button
document.getElementById('btn-search').addEventListener('click',showHero);
function showHero(){
    var name = document.getElementById('hero-name').value;
    if(name==""){
        alert("Enter the name to be searched")
    }else{
            window.location.assign('superhero.html?id='+heroId);
        
    }
    // console.log(hero);
}


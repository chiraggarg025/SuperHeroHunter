// 
// addCards();
var storedNames = JSON.parse(localStorage.getItem("names")||"[]");
function createCards(data){
    // card body
    var parent = document.createElement('div');
    parent.classList.add('card');
    parent.setAttribute('id',Date.now())
    var image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src',data.image);
    image.setAttribute('alt','hero image');
    parent.appendChild(image);
    var child = document.createElement('div');
    child.classList.add('card-body');
    // H3 tag
    var h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.innerText=data.name;
    child.appendChild(h3);
    // anchor tags
    // details button
    var details=document.createElement('a');
    details.classList.add('btn');
    details.classList.add('btn-success');
    details.setAttribute('href','superhero.html?id='+data.id);
    // icon
    var iconDetails = document.createElement('i');
    iconDetails.classList.add('fa');
    iconDetails.classList.add('fa-info-circle');
    details.appendChild(iconDetails);
    var detailsText = document.createElement('span');
    detailsText.innerText= ' Show Details';
    details.appendChild(detailsText);
    child.appendChild(details);
    // remove button
    var remove = document.createElement('a');
    remove.classList.add('btn');
    remove.classList.add('btn-danger');
    
    //remove icon
    var iconRemove = document.createElement('i');
    iconRemove.classList.add('fa');
    iconRemove.classList.add('fa-times');
    remove.appendChild(iconRemove);
    var removeText = document.createElement('span');
    removeText.innerText=' Remove';
    remove.appendChild(removeText);
    remove.setAttribute('id',data.id);
    // Handling remove event on click event
    remove.addEventListener('click',function(ev){
        console.log(storedNames);
        var id = this.id;
        parentId= document.getElementById(id).parentElement.parentElement.id;
        removeHero(storedNames,'id',id,parentId);
        // console.log(storedNames);
    })
    child.appendChild(remove);
    parent.appendChild(child);
    
    // remove.innerText=' Remove';
    
    //Appending child to container
    document.getElementById('cards-container').appendChild(parent);


}
// loop to add cards 
// function addCards(){

    for(let i=0;i<storedNames.length;i++){
        createCards(storedNames[i]);
     }
// }



// remove a super hero
function removeHero(arr, attr, value,child){
    console.log(value);
    console.log(parent);
    var i = arr.length;
    while(i--){
       if(arr[i][attr] === value ) { 

           arr.splice(i,1);

       }
    }
    if(arr.length==0){
        window.localStorage.removeItem("names");
    }
    window.localStorage.setItem("names", JSON.stringify(arr));
    // return arr;
    // var deleteChild = document.getElementById(child);
    // document.getElementById('cards-container').removeChild(deleteChild);
    document.getElementById('cards-container').innerHTML="";
    for(let i=0;i<storedNames.length;i++){
        createCards(storedNames[i]);
     }

    // addCards();
}
document.getElementById('remove')
console.log(storedNames);

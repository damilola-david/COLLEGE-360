//list of the images we want to use in array
let images=["IMAGES/application.jpg","IMAGES/two.jpg","IMAGES/sign.jpg","IMAGES/verified.jpg"];

//get the id 
let changeimage= document.getElementById("changeimage");

//set the index to zero
let index=0;

let items=document.querySelectorAll(".some");

let itemsarray=Array.prototype.slice.call(items,0);

//create a function to change the images and move through the text
function change(){
    for(i=0; i<itemsarray.length; i++){
        itemsarray[i].classList.remove("active")  
    }

    index++;
    
    if (index>itemsarray.length){
        index=1;
    }
    
    changeimage.src=images[index-1];

    itemsarray[index-1].classList.add("active");
    
    setTimeout(change,3500)
}
function changer(){
    
}
change()
changer()


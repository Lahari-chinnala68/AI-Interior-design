
document.getElementById("image").addEventListener("change",function(){

let file=this.files[0];

if(file){

let reader=new FileReader();

reader.onload=function(e){
document.getElementById("previewImg").src=e.target.result;
};

reader.readAsDataURL(file);

}

});

function generateDesign(){

let file=document.getElementById("image").files[0];

if(!file){
alert("Please upload room image first");
return;
}

document.getElementById("loading").innerText="Generating Designs...";

let style=document.getElementById("style").value;

let images=[];

if(style=="modern"){

images=[
"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
"https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
"https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
];

}

else if(style=="luxury"){

images=[
"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
"https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
"https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
];

}

else if(style=="minimal"){

images=[
"https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg",
"https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
"https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
];

}

document.getElementById("img1").src=images[0];
document.getElementById("img2").src=images[1];
document.getElementById("img3").src=images[2];

setTimeout(function(){
document.getElementById("loading").innerText="";
},1000);

}


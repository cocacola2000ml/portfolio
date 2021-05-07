let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[0];

function mouseIn(){
    thisH1.innerHTML="天竺鼠車車進來囉";
}

function mouseOut(){
    thisH1.innerHTML="天竺鼠車車回家囉";
    thisP.innerHTML="";
}

function mouseMove(e){
    thisP.innerHTML="天竺鼠車車開到了"+e.clientX+","+e.clientY;
}

thisDiv.addEventListener("mouseover", mouseIn);
thisDiv.addEventListener("mouseout", mouseOut);
thisDiv.addEventListener("mousemove", mouseMove);
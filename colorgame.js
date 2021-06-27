let numofsq =12;
let colors=generaterandomcolors(numofsq);
let squares = document.querySelectorAll(".square")
let pickedcolor = pickcolor();
let colordisplay=document.querySelector("#colordisplay");
let msgdisplay = document.querySelector("#message")
let h1=document.querySelector("h1");
let reset = document.querySelector("#reset");
let easybtn=document.querySelector(".easy");
let hardbtn=document.querySelector(".hard");
let mdmbtn=document.querySelector(".medium");
colordisplay.textContent = pickedcolor;
for(let i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
    let clickedcolor = this.style.backgroundColor;
    if(clickedcolor===pickedcolor){
        msgdisplay.textContent="Correct!!!"
        changecolor(clickedcolor)
        h1.style.backgroundColor = clickedcolor;
        reset.textContent="Play Again?"
    }
   else{
       this.style.backgroundColor ="#232323"
       msgdisplay.textContent="Try Again"
   }
     })
}
function changecolor(color){
    for(let i=0;i<colors.length ;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function generaterandomcolors(num){
    let arr =[];
    for(let i=0;i<num;i++)
    {
        arr[i]=randomrgb();
    }
    return arr;
}
function randomrgb(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return "rgb("+ r +", "+ g +", "+ b +")";
}
function pickcolor(){
    let pick= Math.floor(Math.random()*colors.length)
    return colors[pick];
}
reset.addEventListener("click",function(){
    colors=generaterandomcolors(numofsq);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(let i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
    msgdisplay.textContent="";
    this.textContent="New Color"
})
easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected")
    mdmbtn.classList.remove("selected")
    hardbtn.classList.remove("selected")
    numofsq=4;
    colors=generaterandomcolors(numofsq);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    h1.style.backgroundColor="steelblue";
    for(let i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];   
        }
       else
       squares[i].style.display="none";
    }
})
mdmbtn.addEventListener("click",function(){
    mdmbtn.classList.add("selected")
    easybtn.classList.remove("selected")
    hardbtn.classList.remove("selected")
    numofsq=8;
    colors=generaterandomcolors(numofsq);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    h1.style.backgroundColor="steelblue";
    for(let i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i]; 
            squares[i].style.display="block";  
        }
       else
       squares[i].style.display="none";
    }
})
hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected")
    mdmbtn.classList.remove("selected")  
    hardbtn.classList.add("selected")
    numofsq=12;
    colors=generaterandomcolors(numofsq);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    h1.style.backgroundColor="steelblue";
    for(let i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];   
        squares[i].style.display="block";   
    }    
})

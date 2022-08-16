//      Changing Background for main section
let bgsArray = ['01','02','03','05','07']; 
let mainsection = document.getElementById("mainsection");
let bgImgIndex = 0;
setInterval(function(){
    mainsection.style.backgroundImage = `url(./images/${bgsArray[bgImgIndex]}.jpg)`;
    if(bgImgIndex === 4)
        bgImgIndex = 0;
    else
        bgImgIndex ++;
},6000)
//      end
//      bar icon onclick (menubar show)
var baricon = document.querySelector(".baricon");
var navbar = document.querySelector(".navbar");
baricon.onclick = function(){
    navbar.classList.toggle("display");
    setTimeout(_=> navbar.classList.toggle("margin"));
}
//      end
//      setting icon onclik
var settingicon = document.getElementById("setting");
var settingbar = document.getElementById("settingbar");
var settingiconcontainer = document.getElementById("iconcontainer");
let counter = 45;
let myinterval;
settingiconcontainer.onclick = function(){
    if(!myinterval)
    {
        myinterval = setInterval(function(){
        settingicon.style.transform = `rotate(${counter}deg)`;
        counter+=3;})
    }
    else {
        clearInterval(myinterval);
        myinterval = undefined;
    }
    settingbar.classList.toggle("move");
}
//      end
//      Changing main Color
function changeMainColor(color) {
    let root = document.querySelector(':root'); 
    root.style.setProperty('--maincolor',color);
}
//      end
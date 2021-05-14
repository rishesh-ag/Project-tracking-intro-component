let navItems = document.querySelector(".nav-items");
let ham = document.querySelector('.ham')
let childNodes = navItems.childNodes;
var clickHam = false;
let empty = document.querySelector('#empty');
let links = document.querySelectorAll('.nav-item');

links.forEach(link => link.addEventListener('click', function() {
    var width = document.body.clientWidth;
    if(width <= 768){
        for(var i=1; i< childNodes.length ; i+=2){
            childNodes[i].classList.add('hide');
        }
        ham.src = "./images/icon-hamburger.svg";
    }
}));

function showMenu(){
    clickHam = !clickHam;
    if(clickHam){
        ham.src = "./images/icon-close.svg";
        for(var i=1; i< childNodes.length ; i+=2){
            childNodes[i].classList.remove('hide');
        }
    }
    else{
        ham.src = "./images/icon-hamburger.svg";
        for(var i=1; i< childNodes.length ; i+=2){
            childNodes[i].classList.add('hide');
        }
    }
}

function getNavBar(){
    var width = document.body.clientWidth;
    if(width > 768) {
        for(var i=1; i< childNodes.length ; i+=2){
            childNodes[i].classList.remove('hide');
        }
        navItems.classList.remove('active');
        ham.classList.add('hide');
        empty.classList.remove('rec');
        empty.classList.add('circle');
    }
    else{
        for(var i=1; i< childNodes.length ; i+=2){
            childNodes[i].classList.add('hide');
        }
        navItems.classList.add('active')
        ham.classList.remove('hide');
        empty.classList.add('rec');
        empty.classList.remove('circle');
    }
}

window.addEventListener( 'resize', getNavBar);
ham.addEventListener('click', showMenu);
getNavBar();
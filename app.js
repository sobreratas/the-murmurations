function changeHamburgerBackground(){
    const hamburger = document.querySelector(".hamburger-container")
    let scrollValue = window.scrollY;
    if(scrollValue > 900){
        hamburger.style.backgroundColor = "black";
    } else {
        hamburger.style.backgroundColor = "transparent";
    }
}

window.addEventListener('scroll', changeHamburgerBackground);
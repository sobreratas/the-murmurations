// function changeHamburgerBackground(){
//     const hamburger = document.querySelector(".hamburger-container")
//     let scrollValue = window.scrollY;
//     if(scrollValue > 900){
//         hamburger.style.backgroundColor = "black";
//     } else {
//         hamburger.style.backgroundColor = "transparent";
//     }
// }

// window.addEventListener('scroll', changeHamburgerBackground);

//MIDDLE CARD CLASS INTERSECTION OBSERVER 
const middleCards = document.querySelectorAll(".middle-card");

const middleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) middleObserver.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

middleCards.forEach(card => {
    middleObserver.observe(card)
})

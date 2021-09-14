let header = document.querySelector("header");
let yo = document.querySelector(".yo");
yo.style.paddingTop = 25 + header.clientHeight + "px";


addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        header.classList.add("left-nav");
        header.classList.remove("top-nav");
    }
    else {
        header.classList.add("top-nav");
        header.classList.remove("left-nav");
    }
})


let imgDiv = document.querySelector(".img div");
imgDiv.style.height = imgDiv.clientWidth+"px";
imgDiv.parentElement.style.height = imgDiv.firstElementChild.clientHeight-125+"px";
imgDiv.parentElement.style.borderRadius = `0 0 ${imgDiv.clientWidth}px ${imgDiv.clientWidth}px`;
addEventListener("resize", () => {
    imgDiv.style.height = imgDiv.clientWidth+"px";
    imgDiv.parentElement.style.height = imgDiv.firstElementChild.clientHeight-125+"px";
    imgDiv.parentElement.style.borderRadius = `0 0 ${imgDiv.clientWidth}px ${imgDiv.clientWidth}px`;
});



//atributos
// let atributo = document.querySelectorAll(".atributo");
// let heights = [];
// for (let attr of atributo) {
//     heights.push(attr.clientHeight);
//     console.log(heights)
// }
// for (let attr of atributo) {
//     attr.style.height = Math.max(...heights);
// }



//proyectos experiencias

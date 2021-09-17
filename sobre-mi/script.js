let header = document.querySelector("header");
let main = document.querySelector("main");
main.style.marginTop = header.clientHeight + "px";


//evolucion
// let antesDespues = document.querySelectorAll(".comparacion div:not(.img)");
// let heights = [];
// for (let a of antesDespues) {
//     heights.push(a.clientHeight);
// }
// for (let a of antesDespues) {
//     a.style.height = Math.max(...heights) + "px";
// }
let evolucion = document.querySelector(".evolucion");
evolucion.style.width = document.body.clientWidth + "px";
evolucion.style.minHeight = 100-header.clientHeight + "vh";


//img
let imgDiv = document.querySelector(".img");
imgDiv.style.height = imgDiv.clientWidth + "px";
addEventListener("resize", () => {
    imgDiv.style.height = imgDiv.clientWidth + "px";
});


//container
let info = [
    {
        h3: "Título 1",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título 2",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título 3",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título 4",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },{
        h3: "Título",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iure soluta cupiditate ducimus fugit sapiente ullam autem atque veritatis molestiae."
    },
]


let container = document.querySelector(".container");
for (let i=0; i<3; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    for (let i=0; i<4; i++) {
        let dato = document.createElement("div");
        dato.classList.add("dato");
        row.appendChild(dato);
    }
    container.appendChild(row);
}

let datos = document.querySelectorAll(".dato");
for (let i=0; i<12; i++) {
    datos[i].innerHTML = `
    <h3>${info[i].h3}</h3>
    <p>${info[i].p}</p>
    `;
}

// let rows = document.querySelectorAll(".row");
// for (let row of rows) {
//     let datos = row.children;
//     let count = 1;
//     for (let dato of datos) {
//         dato.style.zIndex = count;
//         setInterval(() => {
//             let index = 1;
//             setInterval(() => {
//                 dato.style.zIndex = dato.style.zIndex*1 + index++;
//                 console.log(dato.style.zIndex)
//             }, 1000);
//         }, 4000);
//         count += 1;
//     }
// }

let header = document.querySelector("header");
let main = document.querySelector("main");
main.style.marginTop = header.clientHeight + "px";


//container
let info = [
    {
        h3: "hola",
        p: "aaaaaaaaaa"
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
    },{
        h3: "",
        p: ""
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

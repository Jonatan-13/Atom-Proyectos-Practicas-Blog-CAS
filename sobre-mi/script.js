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
        h3: "Mis talentos",
        p: "Yo, desde que empecé la primaria, me he destacado en la asignatura de matemáticas y también en algunos deportes como el atletismo y el ultimate frisbee."
    },{
        h3: "Mis hobbies",
        p: "Hace unos años me encantaba leer libros de ficción y más que todo aquellos que pertenecen a sagas. Sin embargo, hoy me enfoco en libros de los cuales pueda aprender algo de algún area de conocimiento o algo que sea útil para la vida. Tambien me gusta escuchar música y hacer Yoga."
    },{
        h3: "¿Qué me gustaría mejorar o aprender?",
        p: "Siento que a veces no empleo el tiempo necesario para ciertas actividades a las que debería dedicarme más, así que debería tener un mejor manejo del tiempo y ser un poco más responsable con ese tipo de cosas."
    },{
        h3: "Habilidades y CAS",
        p: "Creo que con mis habilidades relacionadas al uso de la lógica y las matemáticas yo podría ayudar a personas a mejorar en estas habilidades. Además, al tener un gran gusto por el deporte también podría participar en algún proyecto relacionado a algún deporte o actividad deportiva."
    },{
        h3: "¿Qué me gustaría hacer?",
        p: "Me encantan las matemáticas, el uso de la lógica y el desarrollo de la creatividad, así que estaría dispuesto a realizar cualquier proyecto o actividad relacionada a estos conceptos, ya sea un club de matemáticas o la realización de algún programa, aplicación o página web."
    },{
        h3: "Lo que me hace persona",
        p: "Todo el tiempo estoy dispuesto a ayudar a los demás siempre que sea por una buena causa, soy generoso y decente, y siento que en todo momento debería comportarme según la moral por mi bien y el de los demás."
    },{
        h3: "Momentos de reflexión",
        p: "Ciertamente a lo largo de mi vida he cometido errores y a veces algunos que han afectado a las personas a mi alrededor, y es en esos momentos que reflexiono y tomo los comentarios de los demás para crecer como persona, finalmente aprendo de todos ellos."
    },{
        h3: "¿Qué me apasiona?",
        p: "Sinceramente, desde Septiembre del 2020 he adquirido un gigantesco amor por la programación y todo lo que se puede hacer con la tecnología, aún me sigue sorprendiendo y no pienso detener el aprendizaje sobre esta area."
    },{
        h3: "Participación en la comunidad",
        p: "En este momento no pertenezco a otra comunidad que no sea la del colegio, pero estoy dispuesto a unirme a cualquier asociación comunitaria con el propósito de ayudar al prójimo."
    },{
        h3: "Mi gusto por la lógica",
        p: "Siento un gran gusto por la lógica y las áreas en las que esta se puede aplicar, como las matemáticas y la programación, me pongo retos constanemente relacionados a esta áreas y sigo aprendiendo y mejorando en ellas."
    },{
        h3: "Mi motivación",
        p: "Desde el inicio de este 2021 he establecido algunas metas y he mejorado en ciertos aspectos de mi vida ya que ahora, en todo momento, pienso y actuo según lo que yo quiera y como quiera ser en el futuro, tratando de mejorar cada día y aprender de los errores que cometa."
    },{
        h3: "Mis cualidades",
        p: "Yo me caracterizo principalmente por mi tranquilidad frente diversas situaciones, por mi aptitud para ayudar a los demás y por la capacidad de comprender los diferentes puntos de vista que puede llegar a tener la gente."
    }
];


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
for (let d of datos) {
    let dH3 = d.firstElementChild;
    let dP = dH3.nextElementSibling;
    dH3.classList.add("center");
    dP.classList.add("hidden");
    d.style.cursor = "pointer";
    d.addEventListener("click", () => {
        dH3.classList.toggle("left-top");
        dH3.classList.toggle("center");
        dP.classList.toggle("visible");
        dP.classList.toggle("hidden");
    });
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



let change = (child, delay, direction) => {
    for (let i=1; i<=4; i++) {
        let d = document.querySelector(`.row:nth-child(${child}) .dato:nth-child(${i})`);
        let count = 1;
        let order = i;
        setTimeout(() => {
            var changeOrder = setInterval(() => {
                if (direction === "left") {
                    if (order-count > 0) {
                        d.style.order = order-count;
                        count++;
                    }
                    else {
                        order = 4;
                        d.style.order = order;
                        count = 1;
                    }
                }
                else if (direction === "right") {
                    if (order+count < 5) {
                        d.style.order = order+count;
                        count++;
                    }
                    else {
                        order = 1;
                        d.style.order = order;
                        count = 1;
                    }
                }
            }, 7500);
        }, delay);
    }
}
change(1, 0, "left");
change(2, 0, "right");
change(3, 3000, "left");
let rows = document.querySelectorAll(".row");
for (let row of rows) {
    row.addEventListener("mouseenter", (e) => {
        let ds = row.children;
        for (let d of ds) {
            d.style.animationPlayState = "paused";
        }
    });
    row.addEventListener("mouseleave", (e) => {
        let ds = row.children;
        for (let d of ds) {
            let dH3 = d.firstElementChild;
            let dP = dH3.nextElementSibling;
            dH3.classList.remove("left-top");
            dH3.classList.add("center");
            dP.classList.remove("visible");
            dP.classList.add("hidden");
            d.style.animationPlayState = "running";
        }
    });
}

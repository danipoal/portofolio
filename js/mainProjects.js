import { javaScript, html, css, api, bootstrap, react, spring, docker } from "./svgs.js";
import { exerciseCard, projectCard } from "./componentes.js";
//Bloque ejercicios
const inyectarEjercicio = (data) => {
    data.forEach(element => {
        const projectContainer = document.querySelector('#excersiseContainer');
        projectContainer.innerHTML += exerciseCard;

    });
}

const rellenarEjercicio = data => {
    const proyectos = document.querySelectorAll('#proyecto');

    let dataCounter = 0;
    proyectos.forEach(proyecto => {

        proyecto.querySelector('a').href = data[dataCounter].deploy;
        proyecto.querySelector('#project-img').src = data[dataCounter].imagen;
        proyecto.querySelector('.card-title').textContent = data[dataCounter].nombre;
        proyecto.querySelector('.card-text').textContent = data[dataCounter].descripcion;
        proyecto.querySelector('.technologies').innerHTML += detectTechnologies(data[dataCounter].tecnologias)
        proyecto.querySelector('.text-muted').textContent = data[dataCounter].fecha;
        proyecto.querySelector('.git').href = data[dataCounter].github;



        dataCounter++;

    })
}

function detectTechnologies(techJson) {
    let htmlReturn = "";
    techJson.forEach(tech => {
        if (tech === "javaScript") {
            htmlReturn += javaScript;
        }else if (tech === "html"){
            htmlReturn += html;
        }else if (tech === "css"){
            htmlReturn += css;
        }else if(tech === "api"){
            htmlReturn += api;
        }else if(tech === "bootstrap"){
            htmlReturn+= bootstrap;
        }else if(tech === "react"){
            htmlReturn+= react;
        }else if(tech === "spring"){
            htmlReturn+= spring;
        }else if(tech === "docker"){
            htmlReturn+= docker;
        }
    })

    return htmlReturn;
}
//Bloque proyectos
const inyectarProyecto = (data) => {
    data.forEach(element => {
        const projectContainer = document.querySelector('#projectContainer');
        projectContainer.innerHTML += projectCard;

    });
}

const rellenarProyecto = data => {
    const proyectos = document.querySelectorAll('#proyecto');

    let dataCounter = 0;
    proyectos.forEach(proyecto => {

        proyecto.querySelector('a').href = data[dataCounter].deploy;
        proyecto.querySelector('#project-img').src = data[dataCounter].imagen;
        proyecto.querySelector('.card-title').textContent = data[dataCounter].nombre;
        proyecto.querySelector('.card-text').innerHTML = data[dataCounter].descripcion;
        proyecto.querySelector('.technologies').innerHTML += detectTechnologies(data[dataCounter].tecnologias)
        proyecto.querySelector('.text-muted').textContent = data[dataCounter].fecha;
        proyecto.querySelector('.git').href = data[dataCounter].github;



        dataCounter++;

    })
}

//Funciones fetching
fetch('js/ejercicios.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        inyectarEjercicio(data);
        rellenarEjercicio(data);
        
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

fetch('js/proyectos.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        inyectarProyecto(data);
        rellenarProyecto(data);
        
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

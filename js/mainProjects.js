//TODO 1- json, 2- fetch + renderizar cartas, 3- write cartas 

import { javaScript, html, css, api, bootstrap } from "./svgs.js";
import { carta } from "./componentes.js";




const inyectarProyecto = (data) => {
    data.forEach(element => {
        const projectContainer = document.querySelector('#projectContainer');
        projectContainer.innerHTML += carta;

    });
}

const rellenarProyecto = data => {
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
        }
    })

    return htmlReturn;
}

fetch('js/proyectos.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        inyectarProyecto(data);
        rellenarProyecto(data);
        
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

import render from "./modulos/render.js";
import { renderError } from "./modulos/renderError.js";
import validacion from "./modulos/validacion.js";

function get(params) {
    return document.querySelector(params);
}
function getAll(params) {
    return document.querySelectorAll(params);
}

const form=get(".form");
const inputs=getAll(".input-container");
const result=getAll(".result__span");

form.addEventListener("submit",e=>{
    e.preventDefault();
    const nums=[form.dia.value,form.mes.value,form.anio.value];
    const mess=["","",""];
    //arreglar precision del metodo render
    if(validacion(nums,mess)) 
        render(nums,result);
    renderError(inputs,mess);
    
});
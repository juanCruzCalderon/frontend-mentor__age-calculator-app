import { validacionFecha, validacionGeneral } from "./modulos/validacion.js";

function get(params) {
    return document.querySelector(params);
}
function getAll(params) {
    return document.querySelectorAll(params);
}
const form=get(".form");
form.addEventListener("submit",e=>{
    e.preventDefault();
    const nums=[form.dia.value,form.mes.value,form.anio.value];
    const mess=["","",""];
    if(validacionGeneral(nums,mess))
        validacionFecha(nums,mess);
});
import ageDiference from "./ageDiference.js";

function validacionGeneral(nums, warning) {
  let valido = true;
  nums.forEach((e, i) => {
    warning[i] = "";
    if (parseInt(e) != e) {
      warning[i] = "Ivalid input";
      valido = false;
    }
    if (!e) {
      warning[i] = "This field is required";
      valido = false;
    }
  });
  return valido;
}

function validacionFecha(fecha, warning) {
  if ((fecha[0] < 1) | (fecha[0] > 32)) {
    warning[0] = "Invalid Date";
    return false
  }
  if ((fecha[1] < 1) | (fecha[1] > 12)) {
    warning[1] = "Invalid Date";
    return false;
  }

  if ((fecha[2] < 1) | (fecha[2] > 9999)) {
    warning[2] = "Invalid Date";
    return false;
  }

  if (ageDiference(fecha) < 0) {
    warning[0] = "Must be in the past";
    warning[1] = "Must be in the past";
    warning[2] = "Must be in the past";
    return false;
  }
  return true;
}

export default function validacion(fecha, warning) {
  if (validacionGeneral(fecha, warning)) {
    return validacionFecha(fecha, warning);
  }
  return false;
}

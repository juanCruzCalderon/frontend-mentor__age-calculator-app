export function renderError(inputs,message) {
    inputs.forEach(e=>e.classList.remove("error"));
    message.forEach((m,i) => {
        if (m!="") {
            inputs[i].querySelector(".hidden").textContent=m;
            inputs[i].classList.add("error");
            
        }
    });

}
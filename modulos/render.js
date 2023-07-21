import ageDiference from "./ageDiference.js";

export default function render(nums,result) {
    let tiene=ageDiference(nums);
    tiene/=1000*60*60*24*365;
    result[0].textContent=Math.floor(tiene);
    tiene%=1;
    tiene*=365/31;
    result[1].textContent=Math.floor(tiene);
    tiene%=1;tiene*=31;
    result[2].textContent=Math.floor(tiene);

}
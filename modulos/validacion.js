export function validacionGeneral(nums,warning) {
    
    let valido=true;
    nums.forEach((e,i)=>{
        
        warning[i]="";
        if(parseInt(e)!=e){
            warning[i]="Ivalid input";
            valido=false;
        }
        if(!e){
            warning[i]="This field is required";
            valido=false;
        }
    });
    return valido;
}

export function validacionFecha(fecha,warning) {
    if (fecha[0]<1 |fecha[0]>32 | fecha[1]<1 | fecha[1]>12 |fecha[2]<1000 | fecha[2]>9999 ) {
        warning[0]="Invalid Date";
        warning[1]="Invalid Date";
        warning[2]="Invalid Date";
        return false
    }
   

    const hoy=new Date();
    let born=new Date();
    born.setFullYear(fecha[2]);
    born.setMonth(fecha[1]-1);
    born.setDate(fecha[0]);

    if (hoy<born) {
        warning[0]="Must be in the past";
        warning[1]="Must be in the past";
        warning[2]="Must be in the past";
        return false
    }
}

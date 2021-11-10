let añoBisiesto = parseInt (prompt("Ingresa el numero del proximo año bisiesto."));

if(añoBisiesto === 2024){
    alert("Estas en lo correcto, en el año 2024, Febrero tendra 29 días. Ahora conoceras cuales seran los años bisiestos hasta el final del siglo.");
} else { 
    while(añoBisiesto != 2024){
            añoBisiesto = prompt("Ingresaste el año incorrecto, vuelve a internarlo.");     
    }
}

alert("Estas en lo correcto, en el año 2024, Febrero tendra 29 días. Ahora conoceras cuales seran los años bisiestos hasta el final del siglo.");

for(let i = 2028; i <= 2096; i += 4){
    alert("Año: " + i + "." + " Febrero 29 días.");
}



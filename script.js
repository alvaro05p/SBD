let peso = document.getElementById("peso");

function calcular(){

        let objetivo = document.getElementById("objetivo");
        valor = parseFloat(objetivo.value);

        if(!isNaN(valor)){

        let pesos = document.querySelectorAll('.peso');
        let porcentajes = document.querySelectorAll('.porcentaje');
        
        let arrayPorcentajes = [];

        porcentajes.forEach(porcentaje => {
            arrayPorcentajes.push(parseFloat(porcentaje.textContent));
        });

        let i=0;

        pesos.forEach(peso => {
            
            resultado = arrayPorcentajes[i]*valor/100;
            peso.textContent = resultado;
            i++;

        });

    }

    
}
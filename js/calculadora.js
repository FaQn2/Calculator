window.addEventListener("load",function(){ 
    //buscamos y guardamos el display
   const display = document.querySelector(".calculator-display");
   //buscamo y guardamos los botones en un html coleccion 
    const keypadButtons = document.getElementsByClassName("keypad-button");
    // html coleccion los convertimos en array oara poder iterar sobre todos los botones.
    const keypadButtonsArray = Array.from(keypadButtons);
   
    //iteramos por nuestro nuevo array de botones
    keypadButtonsArray.forEach((button)=>{
         //capturamos el valor del boton al cual se le hace click
        button.addEventListener("click",()=>{
            //llamamos a la funcion calculadora
            calculadora(button, display);
        })

    })
});

function calculadora(button,display){
    //si el valor del boton es C llama a la funcion borrar, si es = llama a la funcion calcular, 
    switch (button.innerHTML){
        case "C":
            borrar(display);
            break;
        case "=":
            calcular(display);
            break;    
        default:
            actualizar(display,button);
            break;
    }
}

function calcular(display){
    // eval tomar el string y lo resuelve. Guardamos el inmerHYML del display
    display.innerHTML = eval(display.innerHTML) 
}

function actualizar (display, button){
    if(display.innerHTML == 0){
        display.innerHTML = "";
    }
    //mandar los valores de los botones al display
    display.innerHTML += button.innerHTML;//display.innerHTML = button.innerHTML + button.innerHTML; 
}

function borrar(display){
    
 display.innerHTML = 0;
}

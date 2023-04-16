function adivinaAleatorio(){
    let numeroAleatorio = Math.floor((Math.random()*(101-1))+1);
    document.getElementById('resultado').innerHTML = 'Número aleatorio = ' + numeroAleatorio;
    let contador = 1;
    let respuesta = prompt('Ingresa un numero del 1 al 100');
    while(Number(respuesta)!==numeroAleatorio && contador<30){
        if(respuesta<numeroAleatorio){
            respuesta = prompt('El número es mayor al que ingresaste. Inténtelo de nuevo');
        }else{
            respuesta = prompt('El número es menor al que ingresaste. Inténtelo de nuevo');
        }
        contador++;
        document.getElementById('contador').innerHTML = 'Intentos = ' + contador;
    }
    if(contador==30){
        alert('GAME OVER. Has superado el número máximo de intentos. Suerte la próxima');
    }else{
        alert('Felicitaciones. Adivinaste el número');
    }
    
}
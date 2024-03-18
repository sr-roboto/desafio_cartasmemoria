var frutas, vidas, nombre_usuario, intentos, posicion, posicion, pos2, proposiciones_pares;

frutas = ['Manzana', ' Pera', ' Manzana', ' Pera'];
vidas = 2;
nombre_usuario = window.prompt('Ingrese un nombre de usuario');
window.alert('Bienvenido ' + String(nombre_usuario));
window.alert(frutas)
window.alert('Elige una posicion que quieras revelar: ' + '[1]   [2]   [3]   [4]');



while(vidas != 0){
for (intentos = 1; intentos === 1; intentos++) {
    posicion = Number(window.prompt('Ingrese una posicion que quiera revelar'));
    
    
    if (posicion >= 1 && posicion <= 4) {
        
        window.alert('La fruta en la posición ' + posicion + ' es: ' + frutas[posicion - 1]);
        
        pos2 = Number(window.prompt('Ahora ingrese otra posición que sea par con la anterior: '));
        
        if(pos2 >=1 && pos2 <= 4){
          window.alert(('La fruta en la posición ' + pos2 + ' es: ' + frutas[pos2 - 1]));
        }
    } 
    else {
        window.alert('Ingrese una posición válida');
        intentos--; // Decrementa el contador de intentos para permitir otro intento
    }
}

    let pares = (posicion == 1 && pos2 == 3) || (posicion == 3 && pos2 == 1) || (posicion == 2 && pos2 == 4) || (posicion == 4 && pos2 == 2);

    if (pares) {
    window.alert('¡Ganaste! Las frutas en las posiciones ' + posicion + ' y ' + pos2 + ' son pares.');
    break;
}   
    else {
    vidas -= 1;
    window.alert('Perdiste. Las frutas en las posiciones ' + posicion + ' y ' + pos2 + ' no son pares. Te quedan ' + vidas + " vidas.");
    console.log(vidas)
}
}
window.alert('Fin del juego');

var frutas, vidas, nombre_usuario, intentos, posicion, pos1, pos2, proposiciones_pares;


frutas = ['Manzana', 'Pera', 'Manzana', 'Pera'];
vidas = 2;
nombre_usuario = window.prompt('Ingrese un nombre de usuario');
window.alert('Bienvenido ' + String(nombre_usuario));
window.alert('Elige una posicion que quieras revelar: ' + '[1]   [2]   [3]   [4]');
for (intentos = 1; intentos <= 2; intentos++) {
  posicion = Number(window.prompt('Ingrese una posicion que quiera revelar'));
  if (posicion == 1) {
    window.alert(frutas[0]);
  } else if (posicion == 2) {
    window.alert(frutas[1]);
  } else if (posicion == 3) {
    window.alert(frutas[2]);
  } else if (posicion == 4) {
    window.alert(frutas[3]);
  } else {
    window.alert('Ingrese una posicion valida');
  }
}
while (vidas > 0) {
  pos1 = Number(window.prompt('Ahora ingrese una posicion: '));
  pos2 = Number(window.prompt('Ahora ingrese otra posicion que sea par con la anterior: '));
  proposiciones_pares = pos1 + pos2;
  if (pos1 == 1 && pos2 == 3) {
    window.alert('Opcion Correcta');
  } else if (pos1 == 3 && pos2 == 1) {
    window.alert('Opcion correcta');
  } else if (pos1 == 2 && pos2 == 4) {
    window.alert('Opcion correcta');
  } else if (pos1 == 4 && pos2 == 2) {
    window.alert('Opcion correcta');
  } else {
    window.alert('Opcion Incorrecta');
    vidas = vidas - 1;
  }
  window.alert(['Te quedan ',vidas,' vidas'].join(''));
}
window.alert('Ya no tienes mas vidas');
window.alert('Fin del juego');
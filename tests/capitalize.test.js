// tests/capitalize.test.js
import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('¡La función no funciona correctamente para "hello"!');
}

if (capitalize('') !== '') {
  throw new Error('¡La función no funciona correctamente para una cadena vacía!');
}

console.log('¡Todas las pruebas han pasado!');

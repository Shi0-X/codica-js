// tests/capitalize.test.js
import assert from 'assert';
import capitalize from '../src/capitalize.js';

// Prueba para una cadena normal
assert.strictEqual(capitalize('hello'), 'Hello', '¡La función no funciona correctamente para "hello"!');

// Prueba para una cadena vacía
assert.strictEqual(capitalize(''), '', '¡La función no funciona correctamente para una cadena vacía!');

console.log('¡Todas las pruebas han pasado!');

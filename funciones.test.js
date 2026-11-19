const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sumar, esPar } = require('./funciones');

test('Suma de números positivos', () => {
  assert.equal(sumar(5, 3), 8);
});

test('Suma de números negativos', () => {
  assert.equal(sumar(-2, -3), -5);
});

test('Número par', () => {
  assert.equal(esPar(4), true);
});

test('Número impar', () => {
  assert.equal(esPar(7), false);
});
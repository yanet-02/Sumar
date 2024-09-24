// tests/calcularSuma.test.js

const { calcularSumaDefecto, calcularSumaCorregida } = require('../src/calcularSuma');

test('Suma de números con defecto', () => {
    expect(calcularSumaDefecto([10, 20, 30, 40, 50])).toBe(150);
    expect(() => calcularSumaDefecto()).toThrow(); // Debería fallar al no pasar un array
});

test('Suma de números corregido', () => {
    expect(calcularSumaCorregida([10, 20, 30, 40, 50])).toBe(150);
    expect(calcularSumaCorregida()).toBe(0); // Corrección: debería devolver 0
    expect(calcularSumaCorregida("123")).toBe(0); // Entrada no válida
    expect(calcularSumaCorregida([])).toBe(0); // Suma de array vacío
});

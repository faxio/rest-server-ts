"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Math2_1 = require("../models/Math2");
describe("Obtener si un número es primo", () => {
    let math;
    let numberPrime = 17;
    beforeEach(() => {
        math = new Math2_1.Math2();
    });
    test("Validar número es primo", () => {
        // Función que entrega un resultado erroneo
        const result = math.isPrimeError(17);
        expect(result).toBe(true);
    });
    test("Validar número primo", () => {
        const result = math.isPrime(17);
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=Math2.spec.js.map
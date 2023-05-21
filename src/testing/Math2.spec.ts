import { Math2 } from "../models/Math2";

describe("Obtener si un número es primo", () => {
  let math: Math2;
  let numberPrime = 17;

  beforeEach(() => {
    math = new Math2();
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

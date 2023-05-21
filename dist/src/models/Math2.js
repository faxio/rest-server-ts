"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Math2 = void 0;
class Math2 {
    isPrimeError(number) {
        for (let i = 2; i <= number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    isPrime(number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}
exports.Math2 = Math2;
//# sourceMappingURL=Math2.js.map
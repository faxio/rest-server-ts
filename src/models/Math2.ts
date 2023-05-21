export class Math2 {
  isPrimeError(number: number): boolean {
    for (let i = 2; i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  isPrime(number: number): boolean {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

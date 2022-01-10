export function reversibleCheck (value: number): boolean {
  if (value % 10 === 0)
    return false;

  let n = value, m = 0;
  while (n) {
    m = m * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  let sum = value + m;
  while (sum) {
    if (sum % 10 % 2 === 0)
      return false;
    sum = Math.floor(sum / 10);
  }

  return true;
}

export function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

export function calculatePercentage(partialValue, totalValue) {
  if (totalValue === 0) {
    return 0;
  }
  return (partialValue / totalValue) * 100;
}

export function getStatColor(value) {
  if (value < 51) return "red";
  if (value < 102) return "orange";
  if (value < 153) return "yellow";
  if (value < 204) return "lime";
  return "cyan";
}

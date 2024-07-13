export function formatAda(value, ifNull) {
  if (isNaN(value)) return ifNull ?? "--₳"
  return (value / 1000000).toFixed(2) + "₳"
}
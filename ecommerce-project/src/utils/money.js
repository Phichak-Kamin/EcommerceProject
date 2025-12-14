export function formatMoney(amounyCents) {
  return `$${(amounyCents/100).toFixed(2)}`
}
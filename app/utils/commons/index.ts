export const getMonthlyPayment = (
  amountArg: number,
  apr: number,
  limit: number
): { monthlyTotal: number; monthlyInterest: number } => {
  const mothlyInterestApr = apr / 12 / 100; // Convertir la tasa de interés anual a mensual y a decimal
  const num =
    amountArg * mothlyInterestApr * Math.pow(1 + mothlyInterestApr, limit);
  const dom = Math.pow(1 + mothlyInterestApr, limit) - 1;
  const monthlyTotal = num / dom;
  const monthlyInterest = amountArg * mothlyInterestApr;
  return {
    monthlyTotal: monthlyTotal === Infinity || Number.isNaN(monthlyTotal) ? 0 : Number(monthlyTotal.toFixed(2)),
    monthlyInterest: Number(monthlyInterest.toFixed(2)),
  };
};

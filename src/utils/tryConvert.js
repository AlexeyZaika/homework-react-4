export const toDol = (currency) => currency * 0.036;

export const toEuro = (currency) => currency * 0.031;

export const convert = (currency, convert) => {
  const output = Math.round(convert(currency));
  return output;
};
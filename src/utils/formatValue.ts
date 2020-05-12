const formatValue = (value: number): string =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
// Intl.NumberFormat().format(value); // TODO

export default formatValue;

const CurrencyFormat = new Intl.NumberFormat(undefined, {
  currency: "MNT",
  //   style: "currency",
});

const FormatCurrency = (number: number) => {
  return CurrencyFormat.format(number);
};

export default FormatCurrency;

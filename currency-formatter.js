/**
 * Formats a number into a currency.
 *
 * @param currency Defaults to "EUR".
 * @param showSymbol Defaults to true.
 * @param locales Defaults to "de-DE"
 * @param decimals Defaults to 0 decimals.
 *
 * @returns {string} formatted amount with the symbol included.
 */
Number.prototype.formatCurrency = function (showSymbol, currency, locales, decimals) {
  showSymbol || showSymbol === false || (showSymbol = true);
  currency || (currency = 'EUR');
  locales || (locales = 'de-DE');
  decimals || (decimals = 0);

  let options = {
    currency: currency,
    minimumFractionDigits: decimals
  };

  if (showSymbol) {
    options.style = 'currency';
  }

  const formatter = new Intl.NumberFormat(locales, options);
  return formatter.format(this);
};

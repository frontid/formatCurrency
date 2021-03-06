/**
 * Formats a number into a currency.
 *
 * @param currency Defaults to "USD".
 * @param showSymbol Defaults to true.
 * @param locales Defaults to "en-US"
 * @param decimals Defaults to 0 decimals.
 *
 * @returns {string} formatted amount with the symbol included.
 */
Number.prototype.formatCurrency = function (showSymbol, currency, locales, decimals) {
  showSymbol || showSymbol === false || (showSymbol = true);
  currency || (currency = 'USD');
  locales || (locales = 'en-US');
  // 0 Means to use the default decimals specified at ISO 4217 codes.
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

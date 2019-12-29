# Number.formatCurrency()
`Number.formatCurrency()` is a wrapper for `Intl.NumberFormat()` making easy format amounts.

## [DEMO](https://frontid.github.io/formatCurrency/)

## Usage
```
<script src="currency-formatter.js"></script>
```

```javascript
const usdFormatted = 23565.formatCurrency();
// OUTPUTS: $23,565

// With all available options (Showing the symbol, EUR formatted with Spanish Spain locale):
const formattedCurrency = 23565.formatCurrency(true, 'EUR', 'es-ES');
// OUTPUTS: 23.565 €
```

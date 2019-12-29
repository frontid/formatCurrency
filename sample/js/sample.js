$(function () {
  const $trigger = $('button');
  const $outputLabel = $('.output .label');
  const $outputValue = $('.output .value');

  function calcAndPrint() {
    const inputValue = $('input[type="number"]').val();
    const currencySelected = $('#currency_selected').val();
    const localeSelected = $('#locale_selected').val();

    let value = parseFloat(inputValue);
    const formattedCurrency = value.formatCurrency(
      true,
      currencySelected,
      localeSelected
    );

    $outputLabel.text(`Showing the amount formatted in ${currencySelected} under  ${localeSelected} locale formatting.`);
    $outputValue.text(formattedCurrency);
  }

  $trigger.on('click', function (e) {
    calcAndPrint();
  });

  // Init.
  calcAndPrint();
});
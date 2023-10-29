'use strict';

const CAR_RENTAL_PER_DAY = 29.99;

window.onload = () => {
  const totalDueBtn = document.getElementById('estimateTotalCostBtn');
  totalDueBtn.onclick = displayTotalDue;
};

/**
 * Display car rental fee, options fee, under 25 surcharge fee, amd total due to the DOM.
 */
function displayTotalDue() {
  // get form element values
  const pickupDate = document.getElementById('pickupDate').value;
  const numOfDays = +document.getElementById('numOfDays').value;
  const isCheckedElecTollTag = document.getElementById('electronicTollTag').checked;
  const isCheckedGps = document.getElementById('gps').checked;
  const isCheckedRoadsideAssis = document.getElementById('roadsideAssistance').checked;
  const isUnder25 = getValueOfUnder25(document.getElementsByName('under25Options'));

  // validate the values
  // calculate the totals

  console.log(pickupDate);
  console.log(numOfDays);
  console.log(isCheckedElecTollTag);
  console.log(isCheckedGps);
  console.log(isCheckedRoadsideAssis);
  console.log(isUnder25);
}

function getValueOfUnder25(radios) {
  let under;
  radios.forEach((element) => {
    if (element.checked) {
      under = /true/.test(element.value);
    }
  });
  return under;
}

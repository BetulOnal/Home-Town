var input_num, total, arrayPoz, arrayNeg, earning_sum, expenses_sum;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

document.getElementById('button').addEventListener('click', (event) => {
  input_num = convertToNumber(document.getElementById('input_value').value);
  if (input_num > 0) {
    let element_earnings_list = document.getElementById('earnings_list');
    let new_li = document.createElement('li');
    new_li.innerText = input_num;

    element_earnings_list.appendChild(new_li);
    arrayPoz = [input_num];
    earning_sum = (typeof earning_sum === 'number' ? earning_sum : 0) + input_num;
    let element_total_earnings = document.getElementById('total_earnings');
    element_total_earnings.innerText = earning_sum;
  } else {
    let element_expenses_list = document.getElementById('expenses_list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = input_num;

    element_expenses_list.appendChild(new_li2);
    arrayNeg = [input_num];
    expenses_sum = (typeof expenses_sum === 'number' ? expenses_sum : 0) + input_num;
    let element_total_expenses = document.getElementById('total_expenses');
    element_total_expenses.innerText = expenses_sum;
  }
  total = earning_sum;
  total = (typeof total === 'number' ? total : 0) + expenses_sum;
  let element_sum = document.getElementById('sum');
  element_sum.innerText = total;

});
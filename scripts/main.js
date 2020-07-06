const btnEql = document.getElementById('btnEql');
const result = document.getElementById('res');

btnEql.addEventListener('click', function (e) {
    const operands = result.textContent.match(/\d+/g);
    const operator = result.textContent.match(/[\+-\/\*]/)[0];

    result.textContent = calculate(operands, operator);
});

document.getElementById('btnClr').addEventListener('click', function (e) {
    result.textContent = '';
});

document.getElementById('btn0').addEventListener('click', displayIt);
document.getElementById('btn1').addEventListener('click', displayIt);
document.getElementById('btnSum').addEventListener('click', displayIt);
document.getElementById('btnSub').addEventListener('click', displayIt);
document.getElementById('btnMul').addEventListener('click', displayIt);
document.getElementById('btnDiv').addEventListener('click', displayIt);

function displayIt(e) {
    result.textContent += e.target.textContent;
}

function calculate(operands, operator) {
    const result = eval(parseInt(operands[0], 2) + operator + parseInt(operands[1], 2));
    return result.toString(2);
}
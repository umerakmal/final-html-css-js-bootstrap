function appendToInput(value) {
    document.getElementById('input').value += value;
    document.getElementById('input01').value += value;
}
function clearInput() {
    document.getElementById('input').value = '';
    document.getElementById('input01').value = '';
}
function clearInput01() {
    document.getElementById('input01').value = input01.value.slice(0,-1);
    document.getElementById('input').value = input.value.slice(0,-1);
}
function calculate() {
    let input = document.getElementById('input').value;
    let result = eval(input);
    document.getElementById('input').value = result;
    document.getElementById('input01').value = input;
}
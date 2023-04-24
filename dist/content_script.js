"use strict";
var value = "";
var div = document.createElement('div');
var setValue = function (v) {
    console.log(v);
    if (!v)
        div.style.display = 'none';
    else
        div.style.display = 'block';
};
var appendPopupToBody = function () {
    div.style.position = 'fixed';
    div.style.right = '20px';
    div.style.bottom = '20px';
    div.style.zIndex = '999999';
    div.style.width = '300px';
    div.style.maxHeight = '80vh';
    div.style.padding = '10px';
    div.style.backgroundColor = '#444654';
    div.style.border = '1px solid #2a2b32';
    div.style.boxShadow = '-19px 11px 51px 21px #000000';
    div.style.borderRadius = '6px';
    div.style.minHeight = '200px';
    div.style.display = 'none';
    document.body.appendChild(div);
};
var getValueOfActiveElement = function () {
    var activeElement = document.activeElement;
    if (activeElement instanceof HTMLInputElement) {
        return activeElement.value;
    }
    return '';
};
window.addEventListener('keyup', function (_event) {
    setValue(getValueOfActiveElement());
});
appendPopupToBody();

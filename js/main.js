const selectEl = _n => document.querySelector(_n);
const createEl = _n => document.createElement(_n);

const _ = ["+", "-", "*", "/", "=", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const createEls = (_na = "div", _arr = [], _cb = () => {}) => {
    let i = 0, rArr = [];
    for(; i < _arr.length; i++) {
        let btn = createEl(_na);
        btn.dataset.purpose = _arr[i];
        btn.innerText = _arr[i];
        btn.addEventListener("click", (_t) => _cb(_t.target), false);
        rArr.push(btn);
    }
    return rArr;
};

const output = selectEl("#result");
const flex = selectEl("#flex");
const del = selectEl("#del");

init();
function init() {
    const els = createEls("button", _, (_t) => {
        if(output.value == "undefined") {
            output.value = "0";
        }
        if(output.value.split("")[0] == "0") {
            output.value = "";
        }
        output.value += _t.dataset.purpose;
        if(_t.dataset.purpose === "=") {
            try {
                output.value = (eval(output.value.replace("=", "")));
            } catch {
                output.value = "0";
            }
        }
    });
    del.onclick = () => output.value = output.value.substr(0, output.value.length - 1);
    els.forEach(el => {
        flex.appendChild(el);
    });
}


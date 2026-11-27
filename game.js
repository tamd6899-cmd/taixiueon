let selected = "";

const tai = document.querySelector(".tai");
const xiu = document.querySelector(".xiu");
const confirmBtn = document.querySelector(".confirm");

tai.onclick = function() {
    selected = "TÀI";
    updateChoice();
};

xiu.onclick = function() {
    selected = "XỈU";
    updateChoice();
};

function updateChoice() {
    confirmBtn.disabled = false;
    confirmBtn.innerText = "ĐÃ CHỌN " + selected;
}

const chips = document.querySelectorAll(".chips button");

chips.forEach(button => {
    button.onclick = function() {
        document.querySelector(".amount").innerText =
            button.innerText + " xu ảo";
    };
});

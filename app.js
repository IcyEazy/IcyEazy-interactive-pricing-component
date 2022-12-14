var slider = document.querySelector(".range"),
    checkToggle = document.getElementById("checkbox"),
    priceReader = document.querySelectorAll(".price");


window.onload = priceValue;

slider.addEventListener("change", priceValue);

checkToggle.addEventListener("change", priceValue);

function priceValue(){
    if(checkToggle.checked){
        priceReader.forEach(price => {
            price.innerHTML = ((75/100) * parseFloat(slider.value)).toFixed(2);
        });
    }
    else{
        priceReader.forEach(price => {
            price.innerHTML = (parseFloat(slider.value)).toFixed(2);
        });
    }
}


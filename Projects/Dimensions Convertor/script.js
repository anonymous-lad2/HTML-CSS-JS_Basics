// Weight conversion :-

let KgWeight = document.querySelector('#kg')
let poundWeight = document.querySelector('[data-poundResult]')
let gramWeight = document.querySelector('[data-gramResult]')
let ounceResult = document.querySelector('[data-ounceResult]')
let generateWeightBtn = document.querySelector('.generateWeight')

poundWeight.innerText = '';
gramWeight.innerText = '';
ounceResult.innerText = '';

generateWeightBtn.addEventListener('click' , ()=>{
    if(KgWeight.value <= 0){
        // Error display using html will be better then alert
        alert('Enter Valid weight')
        KgWeight.value = ''
    }
    else{
        let weight = KgWeight.value;
        let pound = (weight * 2.205).toFixed(2);
        let gram = (weight * 1000).toFixed(2);
        let ounce = (weight * 35.274).toFixed(2);

        poundWeight.innerText = `${pound}`;
        gramWeight.innerText = `${gram}`;
        ounceResult.innerText = `${ounce}`;
    }
})


// Height Conversion:- 

let height = document.querySelector('#cm')
let feetHeight = document.querySelector('[data-feetResult]')
let inchHeight = document.querySelector('[data-inchResult]')
let generateHeightBtn = document.querySelector('.generateHeight')

generateHeightBtn.addEventListener('click' , ()=>{
    if(height.value <= 0){
        // Error display using html will be better then alert
        alert('Enter Valid height')
        height.value = ''
    }

    else{
        let heightValue = height.value;
        let feet = (heightValue / 30.48).toFixed(2);
        let inch = (heightValue / 2.54).toFixed(2);

        feetHeight.innerText = `${feet}`
        inchHeight.innerText = `${inch}`
    }
})
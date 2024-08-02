let output = document.querySelector(".result")
// output.value = "";

function Solve(val){
    output.innerHTML += val;
    scrollToRight();
}

function Result(){
    try {
        // Replace 'x' with '*' and evaluate the expression
        let num1 = output.innerHTML.replace(/x/g, '*');
        let num2 = eval(num1);
        output.innerHTML = num2;
    } catch {
        output.innerHTML = "Error";
    }
    scrollToRight();
}

function Clear(){
    output.innerHTML = "";
}

function Back(){
    output.innerHTML = output.innerHTML.slice(0, -1);
    scrollToRight();
}

function scrollToRight() {
    output.scrollLeft = output.scrollWidth;
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';

    if(validKeys.includes(key)){
        Solve(key === '*' ? key = 'x' : key)
    } 

    else if(key === 'Enter'){
        Result();
    }

    else if(key === 'Backspace'){
        Back();
    }

    else if(key === 'c'){
        Clear();
    }
})
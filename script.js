// add history in an array and dispaly it
// remove eval and let js handle the equation

let input = document.getElementById("input");
let cross = document.getElementById("cross");
let buttons = document.querySelectorAll(".buttons");
let history = document.getElementById("history");
function evaluateExpression(expression) {
    try {
        // Create a new function that returns the result of the expression
        const func = new Function('return ' + expression);
        
        // Execute the function and return the result
        return func();
    } catch (error) {
        // Return an error message if the expression is invalid
        return 'Error: Invalid expression';
    }
}

Array.from(buttons).forEach((btn)=>{
    btn.addEventListener("click",(e) => {
        let valueT = e.target.innerHTML;
        let string = String(input.value)

        if (valueT == "="){
            console.log(string);
            let answer = evaluateExpression(input.value);
            input.value = answer;
            history.innerHTML=string
        } else if (valueT == "C"){
            string = "-"
            input.value= ''
            history.innerHTML= string
            
        } else if(e.target == cross){
            lastIndex = input.value.length-1;
            let correctArr = [];
            for (let a=0; a<lastIndex;a++){
                correctArr.push(input.value[a]);
            }
            let correctValue = correctArr.join('');
            input.value = correctValue;
        }        
        else {
            input.value=input.value + valueT;
        }
    })
})
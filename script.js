
let input = document.getElementById("input");
let cross = document.getElementById("cross");
let buttons = document.querySelectorAll(".buttons");
let history = document.getElementById("history");

let sin = Math.sin ; 
let cos = Math.cos ; 
let tan = Math.tan ;

function evaluateExpression(expression) {
    // Functions 
    
    try {
        // Create a new function that returns the result of the expression
        const func = new Function('return ' + expression);
        
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
            let answer = evaluateExpression(string);
            input.value = answer;
            history.innerHTML=string
        } else if (valueT == "AC"){
            string = "-"
            input.value= ''
            history.innerHTML= string
            
        } else if(e.target == cross){
            input.value = input.value.slice(0, -1);
        }   
        else {
            
            if (valueT === "x"){
                valueT ="*";
            }
            else if (valueT === "sin()"){
                valueT = "sin("
            }
            else if (valueT === "cos()"){
                valueT = "cos("
            }
            else if (valueT === "tan()"){
                valueT = "tan("
            }
            
            input.value=input.value + valueT;

            // Checking if the last enterd digit is a operator so that the user Cannot enter the same/different operator again 
            
            let operators = ["+" , "-" , "*" , "/" , "%"] ;
            let lastDigit = input.value.charAt(input.value.length-1);
            let secondlastDigit = input.value.charAt(input.value.length-2);
            
            if(operators.includes(lastDigit) && operators.includes(secondlastDigit)){
                let newvalue = input.value.slice(0,input.value.length -1) 
                input.value = newvalue             
            }            
        }
    })
})

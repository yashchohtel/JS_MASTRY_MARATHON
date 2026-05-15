function findEvenOdd() {

    // Get the number 
    let numInput = document.getElementById("num").value;
    let num = Number(numInput);
    let result = document.getElementById("result");

    // empty input validation check
    if(numInput === ""){
        result.innerHTML = "❌ Please fill all fields";
    } 

    // if number is zero 
    else if (num === 0){
        result.innerHTML = "zero is special";
    }

    // odd even check
    else if (num % 2 === 0){
        result.innerHTML = `${num} is even number`;
    } else{
        result.innerHTML = `${num} is odd number`;
    }


}
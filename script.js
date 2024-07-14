const temp = document.getElementById("cal-display");

function appendToDisplay(input){
    temp.value += input;
}

function clearDisplay(){
    temp.value = "";
}

function changeSign(){
    temp.value = eval(-1*(temp.value));
}

function removeLast(){
    temp.value = temp.value.slice(0, -1); 
}

function calculate(){
    try{
        temp.value = eval(temp.value);
    }
    catch(error){
        temp.value = "Error"
    }
}

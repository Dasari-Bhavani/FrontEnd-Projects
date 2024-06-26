function convertTemperature(){
    const inputTemperature=parseFloat(document.getElementById("num").value);
    const unit=document.getElementById("unit").value;

    let convertedTemperature;
    if(unit== 'celsius'){
        //convert to Fahrenheit
        convertedTemperature=(inputTemperature * 9/5) + 32;
        document.getElementById("result").textContent=`${inputTemperature} degrees Celsius=${convertedTemperature} degrees Fahrenheit.`
    }
    else if(unit==='Fahrenheit'){
        //convert to celsius
        convertedTemperature=(inputTemperature-32)* 5/9;
        document.getElementById("result").textContent=`${inputTemperature} degrees Fahrenheit= ${convertedTemperature} degrees Celsius.`
    }
    else{
        document.getElementById("result").textContent='Please Select a VALID unit.';
    }
}
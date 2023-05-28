let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let inputType = document.getElementById("input-type")
let resultType = document.getElementById("result-type")
let clear=document.getElementById("clear")





input1.addEventListener("keyup", myResult)
inputType.addEventListener("change", myResult)
resultType.addEventListener("change", myResult)

 let inputTypeValue = inputType.value
 let resultTypeValue = resultType.value

function myResult() {
  
    
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    if (inputTypeValue === "METER" && resultTypeValue === "KILOMETER") {
        input2.value = input1.value / 1000

    } else if (inputTypeValue === "METER" && resultTypeValue === "CENTIMETER") {
        input2.value = input1.value * 100

    } else if (inputTypeValue === "METER" && resultTypeValue === "METER") {
        input2.value = input1.value
    }

    if (inputTypeValue === "KILOMETER" && resultTypeValue === "METER") {
        input2.value = input1.value * 1000

    } else if (inputTypeValue === "KILOMETER" && resultTypeValue === "CENTIMETER") {
        input2.value = input1.value * 100000

    } else if (inputTypeValue === "KILOMETER" && resultTypeValue === "KILOMETER") {
        input2.value = input1.value
    }
    if (inputTypeValue === "CENTIMETER" && resultTypeValue === "KILOMETER") {
        input2.value = input1.value / 100000

    } else if (inputTypeValue === "CENTIMETER" && resultTypeValue === "METER") {
        input2.value = input1.value / 100

    } else if (inputTypeValue === "CENTIMETER" && resultTypeValue === "CENTIMETER") {
        input2.value = input1.value

    }else if(inputTypeValue === "METER/SEC" && resultTypeValue === "KILOMETER/HR"){
        input2.value = input1.value*3.6

    }else if(inputTypeValue === "METER/SEC" && resultTypeValue === "METER/SEC"){
        input2.value = input1.value

    }else if(inputTypeValue === "KILOMETER/HR" && resultTypeValue === "METER/SEC"){
        input2.value = input1.value/3.6

    }else if(inputTypeValue === "KILOMETER/HR" && resultTypeValue === "KILOMETER/HR"){
        input2.value = input1.value

    }else if(inputTypeValue === "SECOND" && resultTypeValue === "MINUTE"){
        input2.value = input1.value/60

    }else if(inputTypeValue === "SECOND" && resultTypeValue === "SECOND"){
        input2.value = input1.value

    }else if(inputTypeValue === "MINUTE" && resultTypeValue === "SECOND"){
        input2.value = input1.value*60

    }else if(inputTypeValue === "MINUTE" && resultTypeValue === "MINUTE"){
        input2.value = input1.value

    }else if(inputTypeValue === "LITER" && resultTypeValue === "MILI-LITER"){
        input2.value = input1.value*1000

    }else if(inputTypeValue === "LITER" && resultTypeValue === "LITER"){
        input2.value = input1.value

    }else if(inputTypeValue === "MILI-LITER" && resultTypeValue === "LITER"){
        input2.value = input1.value/1000

    }else if(inputTypeValue === "MILI-LITER" && resultTypeValue === "MILI-LITER"){
        input2.value = input1.value

    }else if(inputTypeValue === "KILOGRAM" && resultTypeValue === "GRAM"){
        input2.value = input1.value*1000

    }else if(inputTypeValue === "KILOGRAM" && resultTypeValue === "KILOGRAM"){
        input2.value = input1.value

    }else if(inputTypeValue === "GRAM" && resultTypeValue === "KILOGRAM"){
        input2.value = input1.value/1000

    }else if(inputTypeValue === "GRAM" && resultTypeValue === "GRAM"){
        input2.value = input1.value

    }
        



}
clear.addEventListener("click",(e)=>{
input1.value=""
input2.value=""

})





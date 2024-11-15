function displayContent(content){
    result.value +=content
}

// cliar input
function calcClear(){
    result.value =""
}
// result

function calOutput(){
result.value =eval(result.value)

}
// back space
function removeLast(){
    result.value=result.value.slice(0,-1)
}


var globalVar="123"
function outerFunction(){
    var outerVar="456"
    globalVar="1112"
    function innerFunction(){
        console.log(globalVar)
        console.log(outerVar)
    }
    innerFunction()
}
outerVar="618"
globalVar="910"
outerFunction()
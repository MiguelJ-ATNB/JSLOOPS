
let btnEl = document.getElementById("btn")
let btn2El = document.getElementById("btn2")
let btn3El = document.getElementById("btn3")
let btn4El = document.getElementById("btn4")
let btn5El = document.getElementById("btn5")

btnEl.addEventListener("click", btn1)
btn2El.addEventListener("click", btn2)
btn3El.addEventListener("click", btn3)
btn4El.addEventListener("click", btn4)
btn5El.addEventListener("click", btn5)


function btn1(){
    let n = 0
    
    while( n<500){
        n++ 
        console.log('First,', "I'm so happy")
    }
}
function btn2(){
    for( let n = 12;n<800; n+=4){
        console.log("Second,",n)
    }
}
function btn3(){
    for(let n =55; n>11 ; n-=2){
        console.log('Third,',n)
    }
}
function btn4(){
    let total=0;    
    for(let n=5; n<=50; n++){
        total += n;
    }
    console.log("Fourth,",total)
}
function btn5(){
    let total=0;
    for(let n=10; n<=100; n+=10){
        total += n;

    }
    console.log("Fifth,", total)
}


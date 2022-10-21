/* TIMER SETUP*/

let currentTime=10
let timeLeft=document.getElementById('timeLeft')
let playBtn=document.getElementById('playBtn')


playBtn.addEventListener('click',startTimer)

function startTimer(){
    
    playBtn.disabled=true;
    
    timeLeft.innerText=currentTime;
       
    let timerId=setInterval(()=>{

        currentTime--;
        timeLeft.innerText=currentTime
        
        if(currentTime === 0){

            finishGame(timerId)

        }



    },1000)
}

function finishGame(timerId){
    clearInterval(timerId)
    giveScore()
    document.querySelector('textarea').disabled=true
}

/* get quote */

const quote=document.querySelector('blockquote')
const cite=document.querySelector('cite')

fetch('https://api.quotable.io/random')
.then(res=>res.json())
.then(data=>{
    quote.innerText=data.content
    cite.innerText=data.author
})
.catch(error=>{
    console.error(error)
    quote.innerText='You have power over your mind - not outside events. Realize this, and you will find strength.'
    cite.innerText='Marcus Aurelius'
})

/* compare quote and userInput */

function compareText(){
    
    let correct=0;

    const userInput=document.querySelector('textarea').value.split('')
    
    const quoteArray=quote.textContent.split('')

    for(let i=0;i<userInput.length;i++){
        if(userInput[i]===quoteArray[i]){
            correct++
        }

    }

    let score= Math.round((correct * 100) /quoteArray.length)
    
    return score
}

/* GIVE THE SCORE */

function giveScore(){

    let score=compareText();
    document.querySelector('h4').innerText=`Your score is: ${score}%`
    document.querySelector('h4').style.color='salmon'
}
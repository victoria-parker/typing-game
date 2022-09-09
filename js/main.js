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
            clearInterval(timerId)
        }
    },1000)
}



/*     if(!timer){
        timer=function(){
            let sec=60;
            let interval=setInterval(function(){
                document.getElementById('timeLeft').innerHTML=sec;
                sec--;
                if(sec<0){
                    clearInterval(timer)
                }
            },1000)
        }
    }
 */
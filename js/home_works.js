const input = document.querySelector("#gmail_input");
const btn = document.querySelector("#gmail_button");
const checker = document.querySelector("#gmail_result");

const regex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;

btn.onclick = () => {
    if(regex.test(input.value)){
        checker.innerHTML = "правильно"
        checker.style.color ="green"
    }
    else{
        checker.innerHTML = 'введите правильно'
        checker.style.color = 'red'
    }
}
// btn.addEventListener("click", imput);
// input.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         checkGmail();
//     }
// });

//  move blok
    const parentBlok = document.querySelector('.parent_block')
    const childBlok = document.querySelector('.child_block')

    let positionX = 0; 
    let positionY = 0;


    const totalWayWidth = parentBlok.clientWidth - childBlok.offsetWidth;
    const totalWayHeight = parentBlok.clientHeight - childBlok.offsetHeight;

    const moveBlokFunction =() => {  
         if(positionX < totalWayWidth && positionY === 0){positionX ++;
        }else if(positionX >= totalWayWidth && positionY < totalWayHeight){
        positionY++;
        }else if (positionY === totalWayHeight && positionX > 0) {
        positionX--;    
        }else if (positionX === 0 && positionY > 0){
        positionY--;    
        }

        childBlok.style.left =  `${positionX}px`
        childBlok.style.top =  `${positionY}px`
        requestAnimationFrame(moveBlokFunction)
    }
    moveBlokFunction()

    // counter


const time = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

seconds = 0
interval = null

startBtn.addEventListener('click', () => {
    if(interval === null){
        interval = setInterval(() => {
            seconds++;
            time.textContent = seconds

        },1000)

    }
} )
stopBtn.addEventListener('click', ()=>{
    clearInterval(interval)
    interval = null
})
resetBtn.addEventListener('click', ()=>{
    clearInterval(interval)
    interval = null
    seconds = 0 
    time.textContent = seconds
})



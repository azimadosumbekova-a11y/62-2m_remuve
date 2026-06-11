//  phone blok 

const phoneInpute = document.querySelector('#phone_input')
const phoneButton= document.querySelector('#phone_button')
const phoneResult= document.querySelector('#phone_result')

const regEx = /^\+996\s\d{3}\s\d{2}-\d{2}-\d{2}$/



phoneButton.onclick =() => {
    if(regEx.test(phoneInpute.value)){
        phoneResult.innerHTML = " work"
        phoneResult.style.color = " green"
    } else {
        phoneResult.innerHTML = "Error"
        phoneResult.style.color = "red"
    }
}



//  tab slider \


const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems  = document.querySelectorAll('.tab_content_item')
const tabsParent       = document.querySelector('.tab_content_items')

let currentIndex = 0
let timer = null

const hideTabContent = () => {
  tabContentBlocks.forEach(tab => tab.style.display = 'none')
  tabContentItems.forEach(item => item.classList.remove('tab_content_item_active')) 
}

const showTabContent = (i = 0) => {
  hideTabContent()
  tabContentBlocks[i].style.display = 'block'
  tabContentItems[i].classList.add('tab_content_item_active')
  currentIndex = i
}


const startAutoSlide = () => {
  timer = setInterval(() => {
    const next = (currentIndex + 1) % tabContentBlocks.length
    showTabContent(next)
  }, 3000)
}

const stopAutoSlide = () => {
  clearInterval(timer)
}

showTabContent(0)
startAutoSlide()

tabsParent.addEventListener('click', (event) => { 
  if (!event.target.classList.contains('tab_content_item')) return

  stopAutoSlide()

  tabContentItems.forEach((tabItem, tabIndex) => {
    if (tabItem === event.target) {
      showTabContent(tabIndex)
    }
  })

  startAutoSlide() 
})



const usdInput = document.querySelector("#usd")
const somInput = document.querySelector("#som")
const eurInput = document.querySelector("#eur")


const converter = (targetElement, otherElement,anyElement  ) => {
    targetElement.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader( 'Content-type', 'application/json')
        request.send ();
       

    
        request.onload = () => {
            const reasopns = JSON.parse(request.response);
            const usd = reasopns?.usd;
            const eur = reasopns?.eur;


            if(targetElement.id === 'som'){
                otherElement.value = (targetElement.value / usd ).toFixed(2)
                anyElement.value = (targetElement.value / eur ).toFixed(2)
            }
            else if (targetElement.id  === 'usd'){
                otherElement.value = (targetElement.value * usd ).toFixed(2)
                anyElement.value = ((targetElement.value * eur) / usd ).toFixed(2)
            }
            else if(targetElement.id === 'eur'){
                otherElement.value = ( targetElement.value * (eur / usd)).toFixed(2)
                anyElement.value = ( targetElement.value * eur).toFixed(2)
            }
        }
    })

}
converter (somInput , usdInput,eurInput);
converter (usdInput,somInput ,eurInput);
converter (eurInput,usdInput, somInput);



const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('#btn-get');
const modalCloseBtn = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'
};

const closeModal = () =>{
    modal.style.display = 'none'
    document.body.style.overflow = '';
}
modalBtn.addEventListener('click', openModal)
modalCloseBtn.addEventListener('click', closeModal)
modal.onclick = (event) => {
    if(event.target === modal){
        closeModal();
    }
}
const modalScroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 0.5){
        openModal()
        window.removeEventListener("scroll", modalScroll);
    }
}


window.addEventListener ('scroll', modalScroll)
setTimeout(() => {
    openModal() 
}, 10000)
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        //allows us to access all of the data atributes as if they're javascript objects
        const modal = document.querySelector(button.dataset.modalTarget)
        
        //calling the function
        openModal(modal)
    })
})


//every time we click our overlay we close our modal
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)

    })
})


closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        //allows us to access all of the data atributes as if they're javascript objects
        const modal = button.closest('.modal')
        
        //calling the function
        closeModal(modal)
    })
})

//every time we click our overlay we close our modal
overlay.addEventListener('clock', () => {
    const Modals = document.querySelectorAll('.moda.active')
    modals.forEach(modal => {
        closeModal(modal)

    })
})

//function
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
//function
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
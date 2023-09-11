const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropMenu = document.querySelector('.dd_menu')

toggleBtn.onclick =  function (){
    dropMenu.classList.toggle('open')
    const isOpen = dropMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}
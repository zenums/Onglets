const buttons = [...document.querySelectorAll(".btn")]
const texts = [...document.querySelectorAll(".container-text")]


buttons.forEach((button)=>{

    
    button.addEventListener('click',onglet)

})


function onglet(e){

    const indexRemove = buttons.findIndex((btn)=>{
        return btn.classList.contains("active-btn")
    })
    buttons[indexRemove].classList.remove("active-btn")
    texts[indexRemove].classList.remove("active-text")

    
    const indexSHow = buttons.indexOf(e.target)


    buttons[indexSHow].classList.add("active-btn")
    texts[indexSHow].classList.add("active-text")

}
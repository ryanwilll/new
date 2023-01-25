const btnTrailerOpen = document.querySelector("#botao-trailer-open")
const btnTrailerClose = document.querySelector("#botao-trailer-close")
const modal = document.querySelector(".modal")


modal.addEventListener("click", (eCloseModal) => {
    modal.classList.remove("aberto")
    stop()
})

btnTrailerOpen.addEventListener("click", (e) => {
    modal.classList.add("aberto")

})

btnTrailerClose.addEventListener("click", (eClose) => {
    modal.classList.remove("aberto")
    stop()

})

function stop(){
    var iframe = document.getElementById('video');
    iframe.src = iframe.src;
}
const textareaEl = document.getElementById('textarea')
const totalCounterEl = document.getElementById('total-counter')
const remainingEl = document.getElementById('remainer-counter')


textareaEl.addEventListener('keyup', ()=>{
    updateTextarea()
    
})
updateTextarea()
function updateTextarea(){
    

    totalCounterEl.innerText = textareaEl.value.length

    remainingEl.innerText = textareaEl.getAttribute('maxLength') - textareaEl.value.length
}
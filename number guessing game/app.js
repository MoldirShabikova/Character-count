const answer = Math.floor(Math.random()* 10 + 1)

const submitEl = document.getElementById('submitBtn')
let guesses = 0
submitEl.addEventListener('click', function(){
  

     let inputVal = document.getElementById('guessNum').value
     guesses +=1 
 if(answer== inputVal){
    alert(`${inputVal} is the same. Tried ${guesses} guesses`)
 }else if(answer > inputVal){
    alert('Too low!')
 }else{
    alert('Too large!')
 }

})


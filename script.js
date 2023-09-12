// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

 

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

 

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

 

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

 

// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.

 

// 12. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

 

// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento.

 

// 15. Į li elementą įrašytas balas turi būti tos pačios spalvos kaip ir h3 elemente.

 

// 16.1. Sukurti mygtuką ir jį įdėti į li elementą.
// 16.2. Paspaudus šį mygtuką, li elementas su balu turi būti ištrintas.. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)


let numbersWrapper = document.querySelector('#numbers')

let numberDisplay = document.createElement('h3')
let numberDisplay2 = numberDisplay
let minusButton = document.createElement('button')
let plusButton = document.createElement('button')
let minusButton2 = document.createElement('button')
let plusButton2 = document.createElement('button')
let resetButton = document.createElement('button')

let input1 = document.createElement('input')
input1.type = 'number'
input1.value = 5
input1.min = 1
input1.max = 10

numberDisplay.textContent = 5
minusButton.textContent = '-'
plusButton.textContent = '+'
minusButton2.textContent = '-2'
plusButton2.textContent = '+2'
resetButton.textContent = 'Reset button'


numbersWrapper.append(numberDisplay,minusButton2, minusButton,resetButton, plusButton,plusButton2)
numbersWrapper.prepend(input1)

minusButton.addEventListener('click', function() {
  numberDisplay.textContent = numberDisplay.textContent - 1
  input1.value = numberDisplay.textContent
  if (numberDisplay.textContent && numberDisplay2.textContent<5){
      numberDisplay.style.color = 'red'
  }

  
  
  if (numberDisplay.textContent <= 1) {
    minusButton.setAttribute('disabled', true)
  }

  if (numberDisplay2.textContent <=2){
    minusButton2.setAttribute('disabled', true)
  }


  if (numberDisplay.textContent < 10) {
    plusButton.removeAttribute('disabled')
  }
  if (numberDisplay2.textContent <9){
    plusButton2.removeAttribute('disabled')
  }

})





minusButton2.addEventListener('click', function(){

numberDisplay2.textContent = Number(numberDisplay2.textContent) - 2
input1.value = numberDisplay.textContent

    if (numberDisplay.textContent && numberDisplay2.textContent<5){
      numberDisplay.style.color = 'red'
    }
    if (numberDisplay.textContent <= 1) {
      minusButton.setAttribute('disabled', true)
    }
  
    if (numberDisplay2.textContent <=2){
      minusButton2.setAttribute('disabled', true)
    }
  
  
    if (numberDisplay.textContent < 10) {
      plusButton.removeAttribute('disabled')
    }
    if (numberDisplay2.textContent <9){
      plusButton2.removeAttribute('disabled')
    }
  
   
})







plusButton.addEventListener('click', function() {
  numberDisplay.textContent = Number(numberDisplay.textContent) + 1
  input1.value = numberDisplay.textContent

  if (numberDisplay.textContent && numberDisplay2.textContent>=5){
    numberDisplay.style.color = 'green'
}

  if (numberDisplay.textContent >= 10) {
    plusButton.setAttribute('disabled', true)
  }
  if (numberDisplay2.textContent >=9){
    plusButton2.setAttribute('disabled', true)
  }

  if (numberDisplay.textContent > 1) {
    minusButton.removeAttribute('disabled')
  }
  if (numberDisplay2.textContent >2) {
    minusButton2.removeAttribute('disabled')
  }
})


plusButton2.addEventListener('click', function(){
    numberDisplay2.textContent = Number(numberDisplay2.textContent) + 2
    input1.value = numberDisplay.textContent

    if (numberDisplay.textContent && numberDisplay2.textContent>=5){
      numberDisplay.style.color = 'green'
    }
  

    if (numberDisplay.textContent >= 10) {
      plusButton.setAttribute('disabled', true)
    }
    if (numberDisplay2.textContent >=9){
      plusButton2.setAttribute('disabled', true)
    }
  
    if (numberDisplay.textContent > 1) {
      minusButton.removeAttribute('disabled')
    }
    if (numberDisplay2.textContent >2) {
      minusButton2.removeAttribute('disabled')
    }


})

input1.addEventListener('input', function(){

numberDisplay.textContent=input1.value


})
resetButton.addEventListener('click', function(){

numberDisplay.textContent = 5
input1.value = numberDisplay.textContent
numberDisplay.style.color = 'green'

minusButton.removeAttribute('disabled')
minusButton2.removeAttribute('disabled')
plusButton.removeAttribute('disabled')
plusButton2.removeAttribute('disabled')
})




let submitButton = document.createElement('button')
submitButton.textContent = 'Įrašyti balą'
numbersWrapper.append(submitButton)

let score = document.createElement('h4')
score.textContent = 'Balai:'
numbersWrapper.append(score)

let ul = document.createElement('ul')
numbersWrapper.append(ul)



submitButton.addEventListener('click', function(){
let li = document.createElement('li')
    li.textContent = numberDisplay.textContent
    ul.append(li)
    
    if (li.textContent>=5 ){
      li.style.color = 'green'
    }
    if (li.textContent <5){
      li.style.color = 'red'
    }
    let deleteButton = document.createElement('button')
        deleteButton.textContent = 'X'
        li.append(deleteButton)
        deleteButton.addEventListener('click', function(){
          li.remove()
        })

})
// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento.

 
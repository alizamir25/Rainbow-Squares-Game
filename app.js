const board=document.querySelector('#board')
const colors=['#e74c3c', '#f80000', '#8e44ad', '#fff', '#3498db', '#ffff00', '#e67e22', '#000ff', '#2ecc71']
const squaresNumber=500
for(let i=0;i<squaresNumber;i++){
    const square=document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}
function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor=color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.backgroundColor='#272626'
    element.style.boxShadow=`0 0 2px #000`
}
function getRandomColor(){
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}
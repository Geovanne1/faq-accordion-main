const button = document.querySelectorAll('button')
const paragrafos = document.querySelectorAll('p')


for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    if(button[i].classList ==  'plus'){
      button[i].classList.add('minus')
      paragrafos[i].style.display = 'block'
    } else {
      button[i].classList.remove('minus')
      paragrafos[i].style.display = 'none'
    }
  })
}
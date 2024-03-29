const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

let examGrade = prompt("Puani Girin")
let textInfo;
let info = document.querySelector("#info")
info.classList.add('text-primary')

switch (true) {
    case examGrade >= 90 && examGrade <= 100:
        textInfo = SMILE
        info.innerHTML = `${examGrade} -> AA --> ${textInfo}`
        break;
    case examGrade >= 85 && examGrade <= 89:   
        textInfo = SMILE
        info.innerHTML = `${examGrade} -> BA --> ${textInfo}`
        break;
    case examGrade >= 80 && examGrade <= 84:
        textInfo = SMILE
        info.innerHTML = `${examGrade} -> BB --> ${textInfo}`   
        break;
    case examGrade >= 75 && examGrade <= 79:
        textInfo = SMILE
        info.innerHTML = `${examGrade} -> CB --> ${textInfo}`
        break;
    case examGrade >= 70 && examGrade <= 74:
        info.classList.add('text-primary')
        info.innerHTML = `${examGrade} -> CC --> ${textInfo}`
        break;
    case examGrade >= 65 && examGrade <= 69:
        textInfo = SMILE
        info.innerHTML = `${examGrade} -> DC --> ${textInfo}`
        break;
    case examGrade >= 60 && examGrade <= 64:
        textInfo = SMILE
        info.innerHTML = `${examGrade} -> DD --> ${textInfo}`
        break;
    case examGrade >= 50 && examGrade <= 59:
        textInfo = SMILE
        info.innerHTML = `${examGrade} -> FD --> ${textInfo}`
        break;
    case examGrade < 50 && examGrade >= 0:
        textInfo = FROWN
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
        info.innerHTML = `${examGrade} -> FF --> ${textInfo}`
        break;
    default:
        info.innerHTML = "Girilen Puan 0-100 Araliginda Olmali!"
        break;
}
  
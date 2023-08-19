// Timer
var today = new Date();
var date = today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("dateDisplay").innerHTML = date;
document.getElementById("timeDisplay").innerHTML = time;


setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("timeDisplay").innerHTML = d.toLocaleTimeString();
} 
// End of timer

// Calculator 

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
  button.addEventListener('click', (e) => {
      switch(e.target.innerText){
          case 'C':
              display.innerText = '';
              break;
          case '=':
              try{
                  display.innerText = eval(display.innerText);
              } catch {
                  display.innerText = "Error"
              }
              break;
          case '←':
              if (display.innerText){
                 display.innerText = display.innerText.slice(0, -1);
              }
              break;
          default:
              display.innerText += e.target.innerText;
      }
  });
});

// End of calculator

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    btn.innerHTML = newColor;
})


const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const upsPara = document.querySelectorAll('p');

for (let paraText of upsPara) {
    paraText.addEventListener('click', () => {
        paraText.style.color = randomColor();
    })
}
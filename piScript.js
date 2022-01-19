const button = document.querySelectorAll('.numberButton');
const colorChanger = document.querySelector('#colorChanger');
const piDigitsParagraf = document.querySelector('#piDigitsParagraf');

const values = [1,4,1,5,9,2,6,5,3,5,8,9];

let i = 0;
let buttonValue;
button.forEach((x)=>{
    x.addEventListener('click', ()=>{
        buttonValue=x.value;
        console.log(buttonValue);
        if (buttonValue==values[i]){
            piDigitsParagraf.innerHTML+=values[i];
            colorChanger.style.backgroundColor="green";
            i++;
            setTimeout(()=>{colorChanger.style.backgroundColor="grey";},200)
        }else{
            colorChanger.style.backgroundColor="red";
            setTimeout(()=>{colorChanger.style.backgroundColor="grey";},200)
        }
        if (i==12){
            setTimeout(()=>{
                piDigitsParagraf.setAttribute("class", "animation");
                colorChanger.style.backgroundColor="green";
                colorChanger.innerHTML="<p>Gratuluję, wygrałeś !!!</p>";
            },201)
        }
    })
})
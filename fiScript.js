const tab=[27, 80, 17, 144, 21, 9, 34, 233, 10, 79, 5, 333, 4, 55, 420, 11, 100, 8, 13, 377, 30, 20, 7, 89];
const correctNumb=[5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
const part3=document.querySelector(".part3");

const button = document.querySelectorAll(".btn");
let iTab = [];
let i;
button.forEach((x)=>{
    i = Math.floor(Math.random()*24);
    while (1){
        if(iTab.indexOf(i)!=-1){
            i = Math.floor(Math.random()*24);
        }else{
            iTab.push(i);
            break;       
        }
    }
    console.log(iTab);
    console.log(i);
    x.innerHTML = tab[i];
})
i=25;
iTab=[];
let a;
button.forEach((y)=>{
    a=0;
    y.addEventListener('click', ()=>{
        if(y.innerHTML==correctNumb[a]){
            y.style.backgroundColor="#88FF88";
            a++;
        }else{
            button.forEach((x)=>{
                i = Math.floor(Math.random()*24);
                while (1){
                    if(iTab.indexOf(i)!=-1){
                        i = Math.floor(Math.random()*24);
                    }else{
                        iTab.push(i);
                        break;       
                    }
                }
                console.log(iTab);
                console.log(i);
                x.innerHTML = tab[i];
                x.style.backgroundColor="#CCCCCC";
            })
            i=25;
            iTab=[];
            a=0;
        }
        if(a==10){
            part3.innerHTML = "BRAWO!";
            part3.removeAttribute("class");
            part3.setAttribute("class", "winner")
            document.querySelector("body").style.backgroundColor="#DDFFDD"
        }
    })
})
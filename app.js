let cal=document.querySelector(".display");
let clear=document.querySelector(".btn_clear");
let negate=document.querySelector(".btn_negate");
let calci="";
let counter=0;
let num='';
let display=document.querySelector(".display");
let btn_num=document.querySelectorAll(".btn_num");
let equal=document.querySelector(".btn_equal");
btn_num.forEach(button=>{
    button.addEventListener("click",()=>{
        num+=`${button.textContent}`;
        if(counter==1)
        {
            calci+=`${button.textContent}`;
            display.textContent=num;
        }
        else{
            // console.log("hello");
        display.textContent=num;
        calci+=`${button.textContent}`;
        counter=1;
        }
        // console.log(calci);
        // console.log(typeof(+calci));
        // if(typeof(+calci)==`number`)
        // {
        //     calci+=`${button.textContent}`;
        //     display.textContent=calci;
        // }
        // if(calci.split(" ").length==3 && calci.split(" ")[2]!=''){
        //     console.log(calci.split(" "));
        //     calculate();
        //     }
    });
});
let btn_sym=document.querySelectorAll(".btn_symbol");
btn_sym.forEach(btn=>{
    btn.addEventListener("click",()=>{
        calci+=` ${btn.textContent} `;
        counter=0;
        num='';
        // console.log(calci);
        if(calci.split(" ").length>=3 && calci.split(" ")[2]!=''){
            // console.log(calci.split(" "));
        calculate();
        calci+=` ${btn.textContent} `;
        counter=0;
        num='';
        }
    });
});

class Calculator {
    constructor() {
        this.method = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
            "%": (a, b) => a % b
        };
    }
}
let c=new Calculator;
function calculate()
{
    let cal=calci.split(" ");
    let num1=+cal[0];
    let op=cal[1];
    let num2=+cal[2];
    let ans=c.method[op](num1,num2);
    display.textContent=+ans;
    calci=+ans;
    num=ans;
    counter=1;
    console.log(calci);
}
equal.addEventListener("click",()=>{
    calculate();
});
clear.addEventListener("click",()=>{
    calci='';
    display.textContent="";
    num="";
});
negate.addEventListener("click",()=>{
    if(num!=0)
    {
        num*=(-1);
        display.textContent=num;
        calci=num;
    }
});

document.addEventListener("keydown",(e)=>{
    console.log(+e.key);
    if(!isNaN(+e.key))
    {
        num+=`${e.key}`;
        if(counter==1)
        {
            calci+=`${e.key}`;
            display.textContent=num;
        }
        else{
            // console.log("hello");
        display.textContent=num;
        calci+=`${e.key}`;
        counter=1;
        }
    }
    else if(e.key===`+`|| e.key==="/" || e.key==="-" || e.key==="*" || e.key==="%")
    {
            calci+=` ${e.key} `;
            //   console.log(calci.split(" "));
            counter=0;
            num='';
            console.log(calci);
            if(calci.split(" ").length>=3 && calci.split(" ")[2]!=''){
                console.log(calci.split(" "));
            calculate();
            calci+=` ${e.key} `;
            counter=0;
            num='';
            }
    }
    else if(e.key=="=" || e.key=="enter")
    {
        console.log(calci);
        console.log(calci.split(" "));
        calculate();
    }
});
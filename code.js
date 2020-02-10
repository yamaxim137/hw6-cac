// var [a, b] = [1, 2];

let sum = (a=1, b=2) =>{
    if(a == 0.1 & b == 0.2){
        console.log(`a = ${a} и b = ${b}`);
        console.log(`сумма = 0.3 !`);
    }else{
        console.log('a != 0.1');
    }
     
    console.log(`сумма = ${a + b} !`);
}

let minus = (a=1, b=2) =>{
    console.log(`разность = ${a - b} !`);
}

let mult = (a=1, b=2) =>{
    console.log(`произведение = ${a * b} !`);
}

let devide = (a=1, b=2) =>{
    console.log(`частное = ${a / b} !`);
}

// функция fcrt() создаёт кнопку
let fcrt = (i=1) => {
    let _i = i;
var condicion = document.createElement("button");
    condicion.display = "inline";
    condicion.className = `cond c${ _i}`;
    
var numBtn = document.createElement("Button");
numBtn.type = "button";
numBtn.className = "dec-temp";
numBtn.display = "inline";
numBtn.innerHTML = `${_i}`;
numBtn.addEventListener('click', () => {   
	console.log(`rclick${_i}`);
    });

condicion.appendChild(numBtn);

// rootDom = document.getElementById("root") 
// rootDom.appendChild(condicion); // обернули
};

let multi_fcrt = (max=3) => {
    for (let i = 0; i < max; i++) {
        fcrt(i);
    }
}


let state = 'Off';
let displ = document.getElementById("displ");
let spanTxt = document.getElementById("span-txt");

let inpCh = () => {
    // let displ = document.getElementById("displ");
    console.log(`в инпуте: ${displ.value}`);
};

let m_is = () => {
    document.addEventListener ('keydown', function (event){
        console.log (event);
    }); 
    var evt = new KeyboardEvent('keydown', {'keyCode':13, 'which':13});
    document.dispatchEvent(evt);
}
// при нажатии на кнопку "="
let eq_ = () => {
    view_act(`=`);
    inp('=');
}

// отображение текста в специальном месте 
let view_act = (text='') => {
    
    spanTxt.innerHTML = text; //`нажато было только что '='!`;
}

// выводит на дисплей символ (добавляет)
let inp = (s='') => {
    view_act(s);
    // let displ = document.getElementById("displ");
    if(s == '='){ 
        calculated(displ.value);
        return
    };
    if(s == 'On/Off' | s == 'C'){       // проверка клавишь
        if (s == 'On/Off') {
            if (state == 'Off') {
                state = 'On';           // включение
                spanTxt.innerHTML += '  ...включаем .. )';
            } else {
                state = 'Off';          // отключение
                spanTxt.innerHTML += '  ...отключаем ! )';
            };
        }
        if (s == 'C') {
            displ.value = '';
        }
    }else{displ.value += s;};
}

// чтение с дисплея и вычисления...

let calculated = (p='-') => {
    view_act(`вычисляем ${p}...`);
    let operations = '+-*/%^sct';
    let operations_arr = [];
    let op = 0;
    operations_arr = operations.split('');
    for (let i = 0; i < operations_arr.length; i++) {
        if (p.includes(operations_arr[i])){
            var pp = [];
            pp = p.split(operations_arr[i]);
            console.log(pp);
            console.log(`i=${i}`);
            op=i;
            break;
        };
    
    }
    console.log(`op=${op}`);

    if(op==0){displ.value=Number(pp[0])+Number(pp[1]);}
    if(op==1){displ.value=+pp[0]-pp[1];}
    if(op==2){displ.value=+pp[0]*pp[1];}
    if(op==3){displ.value=+pp[0]/pp[1];}
    if(op==4){displ.value=+pp[0]%pp[1];}
    if(op==5){displ.value=(+pp[0])**pp[1];}
    if(op==6){displ.value=Math.sin(+pp[1]);}
    if(op==7){displ.value=Math.cos(+pp[1]);}
    if(op==8){displ.value=Math.tg(+pp[1]);}
}

// создаём типовые кнопочки (цифры и кнопки + - * / = ,) 


var [a, b] = [1, 2];

let sum = (a=1, b=2) =>{
    if(a == 0.1){
        console.log('a = ' + a);
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


// caculator.js

let on_off_func = function(){
    onBtn = document.getElementById('b-on_off');
    alert('включён какулятор');
}



// addEventListener('click', () => {   
//     this._camera.off();
//     this.stateChange();
// });
    // onBtn.addEventListener('click', () => { 
        
    // });

// объект "Панель действий" (Actsboard)
function Actsboard(name) {
    // let count = this.count;
    // let self = this;
    this.name = "Ab" + name;
    this.createActsBoard = function(){
        addActButton('plus')
    }
    
    function addActButton(name){
        let word = name+'Btn';
        word.createElement('Button');
        word.innerHTML('+');
        return word;
    }
    
    }
    
    var actsboard = new Actsboard('first_panel');
    // person.printAge();

    var addBtn = document.getElementById("add-camera"); // Камера
    addBtn.className = "add-style";
    addBtn.addEventListener('click', function(){
    var timerModel = new Camera("Sony");
    var viewTimerModel = new ViewCamera(timerModel, document.getElementById("root"));
    viewTimerModel.render();
});

// сумма

let sum = (a, b) =>{
    if(a = 0.1){
        console.log('a = ' + a);
    }else{
        console.log('a != 0.1');
    }
     
     a + b;

}







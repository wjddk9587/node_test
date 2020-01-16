function Clazz(msg){
    this.name = 'I	am	Class';
    this.message =msg;


    message2 = "find me!";
}

    
    Clazz.prototype.getMessage = function(){return	this.message; }
    Clazz.prototype.getMessage2	= function(){ return this.message2;}


    var	myClazz	= new Clazz('good to see u!');
    console.log(myClazz.getMessage()); //	내부에	선언된	함수와는	다르게	prototype으로	선언한	함수는	값을	사용할	수	없다. 
    console.log(myClazz.getMessage2());


    function calc(num1, num2, func){
        return func(num1, num2);
    }

    function add(num1, num2){
        return num1 + num2;
    }

    clac(1, 2, add); //자바 스크립트는 함수자체를 매개변수로 넣어 활용할 수 있다.
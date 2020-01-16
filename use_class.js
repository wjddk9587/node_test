var	NodeClass	= require('./NodeClass');
//	new	연산자를	사용해서	NodeClass	클래스를	nodeClass	변수로	초기화한다. 
var	nodeClass	=	new	NodeClass();
//	setMessage	함수로	값을	입력한다. 
nodeClass.setMessage('Good	to	See	u!');
//	입력된	값을	출력한다. 
console.log(nodeClass.getMessage());
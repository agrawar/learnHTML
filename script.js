function add(number1,number2){
	let sum= number2+number1; 
	return sum;
}

function alertMessage(message){
	alert(message);
}

let personDetails = {
	fullName: {
		firstName: 'John',
		lastName: 'Doe'
	},
	alertMessage: function(message){
		alert(message);
	}
}
personDetails.alertMessage('Hello World');

let submitButton = document.querySelector('#submit-button');
console.log(submitButton);

function clickListener(){
	event.preventDefault();

	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;
	if(emailValidate(emailText) !==true){
		console.log('The email must contain @');
		return false;
	}
	if(messageValidate(messageText)!==true){
		console.log('The message is not safe for work');
		return false;
	}
	console.log('Thanks for the message');
}

submitButton.addEventListener('click',clickListener)

function emailValidate(email){
	if(email.includes('@')){
		return true;
	} else {
		return false;
	}
}

function messageValidate(message){
	if(message.includes('crap')){
		return false;
	} else {
		return true;
	}
}
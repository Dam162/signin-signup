const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const nameSignUp = document.getElementById("nameSignUp");
const emailSignUp = document.getElementById("emailSignUp");
const passwordSignUp = document.getElementById("passwordSignUp");
const message = document.getElementById("message");

const emailSignIn = document.getElementById("emailSignIn");
const passwordSignIn = document.getElementById("passwordSignIn");
const messageTwo = document.getElementById("messageTwo");



signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// signup handler
const signUpHandler = () => {
	message.style.display = "block";

	console.log(nameSignUp.value);
	console.log(emailSignUp.value);
	console.log(passwordSignUp.value);

	firebase.auth().createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value)
		.then((userCredential) => {
			firebase
				.auth()
				.currentUser.sendEmailVerification()
				.then(() => {
					var user = userCredential.user;
					message.style.color = "green";
					message.innerHTML = "Success!";
					console.log(user);
					setTimeout(function () {
						message.innerHTML = "";
						message.style.display = "none";
					}, 2000);
					window.location.assign("./email-verify.html");
				});

		})

		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			message.style.color = "red";
			message.innerHTML = error.message;
			console.log(errorMessage)
			setTimeout(function () {
				message.innerHTML = "";
				message.style.display = "none";
			}, 2000);
		});

	nameSignUp.value = "";
	emailSignUp.value = "";
	passwordSignUp.value = "";
}

// signIn handler
const signInHandler = () => {
	messageTwo.style.display = "block";

	firebase.auth().signInWithEmailAndPassword(emailSignIn.value, passwordSignIn.value)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			messageTwo.style.color = "green";
			messageTwo.innerHTML = "Success!";
			console.log(user);
			setTimeout(function () {
				messageTwo.innerHTML = "";
				messageTwo.style.display = "none";
				if(userCredential.user.emailVerified){
					window.location.assign("./home.html");
				}else{
					window.location.assign("./signin_signup.html");
				}
			}, 2000);
			// ...
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			messageTwo.style.color = "red";
			messageTwo.innerHTML = errorMessage;
			console.log(errorMessage);
			setTimeout(function () {
				messageTwo.innerHTML = "";
				messageTwo.style.display = "none";
			}, 2000);
		});
	emailSignIn.value = "";
	passwordSignIn.value = "";
}

// show password signIN
const showPasswordSnIn = () => {
	if (passwordSignIn.type === "password") {
		passwordSignIn.type = "text";
	} else {
		passwordSignIn.type = "password";
	}
}

// show password sign Up
const showPasswordSnUp = () => {
	if (passwordSignUp.type === "password") {
		passwordSignUp.type = "text";
	} else {
		passwordSignUp.type = "password";
	}
}

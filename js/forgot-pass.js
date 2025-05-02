const email = document.getElementById("email");
const message = document.getElementById("message");
const forgotPasswordHandler = () => {
    firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .then(() => {
            message.style.display = "block";
            message.innerHTML = "Password reset link sent successfully on your given email!";
            message.style.color = "green";
            setTimeout(function () {
                message.style.display = "none";
            }, 2000);
        })
        .catch((error) => {
            var errorMessage = error.message;
            message.style.display = "block";
            message.innerHTML = errorMessage;
            message.style.color = "red";
            setTimeout(function () {
                message.style.display = "none";
            }, 2000);
        });
};

const login = () => {
   console.log("dfas");
   window.location.assign("signin_signup.html");
};



const email = document.getElementById("email");
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if (user.emailVerified) {
            window.location.assign("home.html");
        } else {
            email.innerHTML = user.email;
        }
    } else {
        window.location.assign("signin_signup.html");
    }
});

// re-send
const message = document.getElementById("message");
const resendHandler = () => {
    firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
            message.style.display = "block";
            message.innerHTML = "Email verification sent successfully!";
            message.style.color = "green";
            setTimeout(function () {
                message.style.display = "none";
            }, 2000);
        })
        .catch((err) => {
            message.innerHTML = err.message;
            message.style.color = "red";
            setTimeout(function () {
                message.style.display = "none";
            }, 2000);
        });
};

const goHomeHandler = () => {
    window.location.reload();
};

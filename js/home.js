firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified) {
      console.log("user", user);

      const paragraph1 = document.getElementById("paragraph1");
      const paragraph2 = document.getElementById("paragraph2");
      const paragraph3 = document.getElementById("paragraph3");

      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;


      // console.log(paragraph1);

      paragraph1.style.display = "block";
      paragraph2.style.display = "block";
      paragraph3.style.display = "block";

      paragraph1.innerHTML = `User Name :  ${displayName}`;
      paragraph2.innerHTML = `Email :  ${email}`;
      paragraph3.innerHTML = `Email Verified :  ${emailVerified}`;


    } else {
      window.location.assign("./../pages/email-verify.html");
    }
  } else {
    window.location.assign("./../pages/signin_signup.html");
  }

});

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.assign("./../pages/signin_signup.html");
    });
};

const deleteAccount = () => {
  // const user = firebase.auth().currentUser;

  // user.delete().then(() => {
  //   // User deleted.
  // }).catch((error) => {
  //   // An error ocurred
  //   // ...
  // });
}


const updatePassword = () => {
  // const user = firebase.auth().currentUser;
  // const newPassword = getASecureRandomPassword();

  // user.updatePassword(newPassword).then(() => {
  //   // Update successful.
  // }).catch((error) => {
  //   // An error ocurred
  //   // ...
  // });
}


const updateEmail = () => {
  // const user = firebase.auth().currentUser;
  // var oldEmail = user.email;
  // user.updateEmail(oldEmail).then(() => {
  //   var newEmail = prompt("Type your new email address", oldEmail);
  //   oldEmail = newEmail;
  //   console.log("Updated successfullly", oldEmail);
  //   // Update successful
  //   // ...
  // }).catch((error) => {
  //   console.log("not Updated successfullly");
  //   // An error occurred
  //   // ...
  // });
}



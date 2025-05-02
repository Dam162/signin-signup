firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // user === true
      console.log("Login true", user);
      if(user.emailVerified){
        window.location.assign("./pages/home.html");
      }else{
        window.location.assign("./pages/email-verify.html");
      }
    } else {
      window.location.assign("./pages/signin_signup.html");
    }
  });
  
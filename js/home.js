firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.emailVerified) {
        console.log("user", user);
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
  
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

const deleteAccountHanlder = () => {
  console.log("dileep");
  // firebase.auth().currentUser.delete().then(() => {
  //   // User deleted.
  //   console.log("deleted successfully");
  // }).catch((error) => {
  //   // An error ocurred
  //   // ...
  // });
}


const updatePasswordHandler = () => {
  console.log("dileep");
  // const user = firebase.auth().currentUser;
  // const newPassword = getASecureRandomPassword();

  // user.updatePassword(newPassword).then(() => {
  //   // Update successful.
  // }).catch((error) => {
  //   // An error ocurred
  //   // ...
  // });
}




const updateEmailHandler = () => {
  console.log("dileep");
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

// dataAddHandler

// const unamedb = document.getElementById("unamedb");
// const fnamedb = document.getElementById("fnamedb");
const emaildb = document.getElementById("emaildb");


// const message1 = document.getElementById("message1");
// const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");

// unique user id
// function uuidv4() {
//   return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
//     (
//       +c ^
//       (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
//     ).toString(16)
//   );
// }

const dataAddHandler = () => {
  // console.log("dileep");

  // console.log(unamedb.value);
  // console.log(fnamedb.value);
  console.log(emaildb.value);

  // example 1
  // firebase.database().ref('users/' + "userId").set({
  //   username: unamedb.value,
  //   fname: fnamedb.value,
  //   email: emaildb.value,
  // }).then(() => {
  //   unamedb.value = "";
  //   fnamedb.value = "";
  //   emaildb.value = "";
  // });


  // example 2
  //  firebase.database().ref('users/' + uuidv4()).set({
  //   username: unamedb.value,
  //   fname: fnamedb.value,
  //   email: emaildb.value,
  // }).then(() => {
  //   unamedb.value = "";
  //   fnamedb.value = "";
  //   emaildb.value = "";
  // });

  // example 3
  firebase.database().ref('users/').push({
    // username: unamedb.value,
    // fname: fnamedb.value,
    email: emaildb.value,
  }).then(() => {
    // unamedb.value = "";
    // fnamedb.value = "";
    emaildb.value = "";
  });

  // get data
  // firebase
  //   .database()
  //   .ref("users/" + "-OPyg-IAALnbc7Geofys")
  //   .on("value", (res) => {
  //     console.log("res", res.val());
  //     console.log("res", res.val().email);
  //   });

  // const loading = document.getElementById("loading");
  const loader = document.getElementById("loader");
  const ulList = document.getElementById("ulList");
  firebase
    .database()
    .ref("users/")
    .on("value", (res) => {
      // value child_added
      // loading.style.display = "none";
      loader.style.display = "none";
      ulList.style.display = "block";
      ulList.innerHTML = "";
      if (res.val()) {
        res.forEach((data) => {
          // message1.style.display = "Block";
          // message2.style.display = "Block";
          // message3.style.display = "Block";

          console.log("data", data.val());
          const todoValue = document.createElement("li");
          ulList.appendChild(todoValue);
          todoValue.innerHTML = data.val().email;
          // message3.innerHTML = `Email: ${data.val().email}`;
          // message2.innerHTML = `User Name: ${data.val().username}`;
          // message1.innerHTML = `Father's Name: ${data.val().fname}`;

        });
      } else {
        console.log("data not found ");
        const dataNotFound = document.createElement("li");
        ulList.appendChild(dataNotFound);
        dataNotFound.innerHTML = "Data not Found!";
        dataNotFound.style.color = "white"
      }

    });
};

// edit
const editHandler = () => {
  firebase
    .database()
    .ref("users/" + "-OQNvZOE7iZNKN1bpUZx")
    .update({
      email: "Update 2",
    });
};

// delete
const deleteHandler = () => {
  firebase
    .database()
    .ref("users/" + "-OQNvZOE7iZNKN1bpUZx")
    .remove();
};



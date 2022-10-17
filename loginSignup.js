let register_btn = document.getElementById("submitt");
let userName = document.getElementById("user_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

register_btn.addEventListener("click", function () {
    // event.preventDefault();
    if (/^\s*[0-9a-zA-Z][0-9a-zA-Z ]*$/.test(userName.value)) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            if (/^(?=.*[0-9])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password.value)) {
                if (password.value === confirmPassword.value) {
                    console.log("User done")
                    registerUser();
                } else {
                    Swal.fire("Incorrect Password!", "Confirm Password did not match your previous password.", "error");
                }
            } else {
                Swal.fire("Incorrect Password!", "Enter Password in Correct Format. Password be 8 Character long and shorter than 16 character and must contain 1 number", "error");
            }
        } else {
            Swal.fire("Incorrect Email!", "Enter Email in Correct Format", "error");
        }
    } else {
        Swal.fire("Incorrect Name!", "Enter Name in Correct Format", "error");
    }

});



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc, getFirestore }
    from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDmf2D-r9b1pcPxG3G0EmRBijDlpXdR7HI",
    authDomain: "login-with-firebase-7fb17.firebaseapp.com",
    projectId: "login-with-firebase-7fb17",
    storageBucket: "login-with-firebase-7fb17.appspot.com",
    messagingSenderId: "451708925508",
    appId: "1:451708925508:web:d06ec5b9907cbd72a06e11",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();


function registerUser() {
    createUserWithEmailAndPassword(auth, email.value, password.value, confirmPassword.value, userName.value)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log("user=>", user);
            Swal.fire("User", "Congrates Registered Successfully");
            await setDoc(doc(db, "users", user.uid), {
                userName: userName.value,
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value,
            });
            userName.value = "";
            email.value = "";
            password.value = "";
            confirmPassword.value = "";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error=>", errorMessage);
            Swal.fire("Invalid!", errorMessage);

        });
}
let login_btn = document.getElementById("my_login");
let login_Email = document.getElementById("login_email");
let login_Password = document.getElementById("login_password");

login_btn.addEventListener("click", function () {
    event.preventDefault();

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login_Email.value)) {
        if (/^(?=.*[0-9])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(login_Password.value)) {

            signInWithEmailAndPassword(auth, login_Email.value, login_Password.value)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    Swal.fire({
                        icon: 'success',
                        text: 'Login Succesfully',
                    })

                    setTimeout(() => {
                        window.location = "./index.html"
                    }, 1500)

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Swal.fire("Error!", "Invalid!", errorMessage);
                });

        } else {
            Swal.fire("Incorrect Password!", "Enter Password in Correct Format.", "error");
        }
    } else {
        Swal.fire("Incorrect Email!", "Enter Email in Correct Format.", "error");
    }
})


const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
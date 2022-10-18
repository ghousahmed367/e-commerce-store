// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ghIFKZ8IxPQ5XVRB7SXybUNBrsrUujc",
  authDomain: "e-store-dd1b0.firebaseapp.com",
  projectId: "e-store-dd1b0",
  storageBucket: "e-store-dd1b0.appspot.com",
  messagingSenderId: "106123047549",
  appId: "1:106123047549:web:65e55a5cfc2346b5033714",
  measurementId: "G-0MEDX2SEW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




try {
    function previewBeforeUpload(id){
        document.querySelector("#"+id).addEventListener("change",function(e){
          if(e.target.files.length == 0){
            return;
          }
          let file = e.target.files[0];
          let url = URL.createObjectURL(file);
          document.querySelector("#"+id+"-preview div").innerText = file.name;
          document.querySelector("#"+id+"-preview img").src = url;
        });
      }
      
      previewBeforeUpload("file-1");
      previewBeforeUpload("file-2");
      previewBeforeUpload("file-3");
} catch (error) {
    console.log(error)
}



var inputfield = document.querySelector(".effect-17")
var descriptionField = document.querySelector(".description-field")

console.log(descriptionField)
inputfield.addEventListener("focus", () => {
    inputfield.placeholder = ""
})
inputfield.addEventListener("blur", () => {
    inputfield.placeholder = "Price"
})

descriptionField.addEventListener("focus", () => {
    descriptionField.placeholder = ""
})
descriptionField.addEventListener("blur", () => {
    descriptionField.placeholder = "Descrption"
})
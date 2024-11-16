
document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.querySelector("form");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const signInButton = document.querySelector(".btn");
    const googleButton = document.querySelector(".google-btn");
    const facebookButton = document.querySelector(".facebook-btn");
  
    
    const togglePassword = document.createElement("i");
    togglePassword.className = "fas fa-eye";
    togglePassword.style.position = "absolute";
    togglePassword.style.right = "15px";
    togglePassword.style.top = "35px";
    togglePassword.style.cursor = "pointer";
    togglePassword.style.color = "#888";
    passwordInput.parentNode.style.position = "relative";
    passwordInput.parentNode.appendChild(togglePassword);
  
    togglePassword.addEventListener("click", () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.className = "fas fa-eye-slash";
      } else {
        passwordInput.type = "password";
        togglePassword.className = "fas fa-eye";
      }
    });
  
    
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
  
      
      if (!emailInput.value || !passwordInput.value) {
        alert("Please fill out all fields!");
        return;
      }
  
     
      alert("Sign-in successful!");
    });
  
   
    googleButton.addEventListener("click", () => {
      alert("Google Sign-In not implemented in this demo.");
    });
  
    
    facebookButton.addEventListener("click", () => {
      alert("Facebook Sign-In not implemented in this demo.");
    });
  });
  



const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "mourya" && password === "123") {
       setTimeout(function(){window.location.href='mouryaCourseProf.html'}, 1000); 
    } 
    else {
        loginErrorMsg.style.opacity = 1;
    }
})



const loginForm2 = document.getElementById("access-form");
const loginButton2 = document.getElementById("access-form-submit");
const loginErrorMsg2 = document.getElementById("access-error-msg");

loginButton2.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm2.password.value;

    if (password === "mourya123") {
       setTimeout(function(){window.location.href='mouryaCourse.html'}, 1000); 
    } 
    else {
        loginErrorMsg2.style.opacity = 1;
    }
})

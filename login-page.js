
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "mourya" && password === "m53r84") {
       setTimeout(function(){window.location.href='mouryaCourseProf.html'}, 1000); 
    } 
    else if (username === "ali" && password === "m64a28") {
       setTimeout(function(){window.location.href='aliCourseProf.html'}, 1000); 
    } 
    else if (username === "lu" && password === "d38u09") {
       setTimeout(function(){window.location.href='luCourseProf.html'}, 1000); 
    } 
    else if (username === "luo" && password === "j40z12") {
       setTimeout(function(){window.location.href='luoCourseProf.html'}, 1000); 
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

    if (password === "mourya8294") {
       setTimeout(function(){window.location.href='mouryaCourse.html'}, 1000); 
    }
    else if (password === "ali2097") {
       setTimeout(function(){window.location.href='aliCourse.html'}, 1000); 
    }
    else if (password === "lu1754") {
       setTimeout(function(){window.location.href='luCourse.html'}, 1000); 
    }
    else if (password === "luo3259") {
       setTimeout(function(){window.location.href='luoCourse.html'}, 1000); 
    }
    
    else {
        loginErrorMsg2.style.opacity = 1;
    }
})

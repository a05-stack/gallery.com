function checkLogin(event) {
        event.preventDefault(); // Prevent default form submission

        var identity = document.getElementById("identity").value;
        var password = document.getElementById("password").value;

        if (identity === "jme" && password === "gallery25") {
            alert("Login Successful!");
            window.location.href="hydrogen/index.html"; 
        } else {
            document.getElementById("message").innerText = "Invalid! Try Again.";
        }
    }
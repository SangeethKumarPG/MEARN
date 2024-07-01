class Landing{
    database={};
    registerUser(){
        console.log("Inside user registration");
        if(localStorage.getItem("userData") != null){
            this.getData();
        }
        let user = username.value;
        let email = emailid.value;
        let password = userpassword.value;
        if(user != "" && password!="" && password!=""){
            // alert(`User: ${user}, email: ${email}, password:${password}`);
            // console.log(`User: ${user}, email: ${email}, password:${password}`);

            if( email in this.database){
                alert(`${email} already exist in database`);
            }else{
                this.database[email] = {
                    name:user,
                    email:email,
                    password:password
                };
                this.saveData();
                alert("Registration success!!!");
                window.location = "login.html";
                // sessionStorage.setItem("registraionSuccess","true");
            }
        }else{
            alert("Please enter valid values");
        }
    }

    getData(){
        this.database = JSON.parse(localStorage.getItem('userData'));

    }
    saveData(){
        localStorage.setItem("userData",JSON.stringify(this.database));
    }

    login(){
        let loggedEmail = username.value;
        let loggedPassword = userpassword.value;
        this.getData();
        if(loggedEmail == "" || loggedPassword == ""){
            alert("Please provide both username and password");
        }else{
            // console.log(`${loggedEmail}, ${loggedPassword}`);
            if(this.database[loggedEmail]){
                if(this.database[loggedEmail].password == loggedPassword){
                    // alert(`${this.database[loggedEmail].name} logged in successfully!!!`)
                    sessionStorage.setItem("userName",this.database[loggedEmail].name);
                    window.location = "home.html";
                }else{
                    alert("Incorrect password");
                }
            }else{
                alert(`${loggedEmail} is invalid`);
            }

        }
    }
}

const obj = new Landing();
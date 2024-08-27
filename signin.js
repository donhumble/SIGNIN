let email = document.getElementById("email")
let password = document.getElementById("password")


console.log(email)
console.log(password)

let users = [
    {
        email: "peter@gmail.com",
        password: "peter"
    },

    {
        email: "okey@gmail.com",
        password: "okey"

    }
];

if (email === '' || password === ''){
    errorMessage.textContent = 'fill in both field';
     return;
}

// on email validation

function emailvalidation(){
    for(let k = 0; k < users.length; k++){
        i
    }
if(getemail == users[k] ){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
    

}
if(getpassword == users[k]){
    return password.length >=6
    
}
if(email && password){
    alert('login successful')
}
else{
    'Invalid email or password format.'
}
}


// function authentification(){
//     // let usersemail = usersemail.value 
//     // let userspassword = userspassword.value
// for(let i = 0; i < users.length; i ++){
//     if (usersemail.value == users[i].usersemail &&  userspassword == users[i].userspassword){
//         alert("login succesful")
//     }
//     else{
//         "login failed"
//     }
// }

// }


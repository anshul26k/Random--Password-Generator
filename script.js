const passwrdbox = document.getElementById("Password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz ";
const number = "0123456789"
const symbol =  "@#$%^&*()_+{[]}>M?-=";

const allchars = uppercase + lowercase + number + symbol;

function createPassword(){
    let Password = "";
    Password += uppercase[Math.floor(Math.random()*uppercase.length)];
    Password += lowercase[Math.floor(Math.random()*lowercase.length)];
    Password += number[Math.floor(Math.random()*number.length)];
    Password += symbol[Math.floor(Math.random()*symbol.length)];
    
    while(length > Password.length){
        Password += allchars[Math.floor(Math.random()*allchars.length)];  
    }
     
    passwrdbox.value = Password;
}

function copypassword(){
    passwrdbox.select();
    document.execCommand("copy");
}


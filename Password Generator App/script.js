const passwordBox= document.getElementById("password");

const lenght=12;
const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxyz";
const number= "0123456789";
const symbols="@#$^&_(){}[]<>/\-+*~";

const allChars=upperCase +lowerCase +number +symbols;

function generatePassword(){
    let password="";
    password +=upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=number[Math.floor(Math.random() * number.length)];
    password +=lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password +=symbols[Math.floor(Math.random() * symbols.length)];
    while(lenght>password.length){
        password +=allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value=password;
}

function copyPassword(){

    passwordBox.select();  // Select the text in the input
    const pass = passwordBox.value;
    navigator.clipboard.writeText(pass)
    .then(() => {
      console.log('Text copied to clipboard:', pass);
    })
    .catch(err => {
      console.error('Unable to copy text to clipboard:', err);
    });
}

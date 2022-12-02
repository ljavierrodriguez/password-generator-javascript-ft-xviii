function generatePassword(hasNumber = true, hasUppercase = true, hasLowercase = true, hasSymbols = true, size = 8) {

    let numbers = "1234567890";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let symbols = "#-./!@*%&";

    let characters = "";

    if (hasSymbols) characters += symbols;
    if (hasNumber) characters += numbers;
    if (hasUppercase) characters += uppercase;
    if (hasLowercase) characters += lowercase;

    let password = "";

    for (let i = 0; i < size; i++) {
        //let randomNumber = Math.floor(Math.random()*characters.length); 
        //password += characters[randomNumber];
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        //password = password.concat(characters.charAt(Math.floor(Math.random() * characters.length)))
    }

    return password;
}

module.exports = {
    generatePassword
}
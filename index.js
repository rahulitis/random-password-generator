const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")


let numtogenerate = 15


function tworandompasswords() {

    let randomElements1 = [];
    let randomElements2 = [];


    for (let i = 0; i < numtogenerate; i++) {
        let randomindex1 = Math.floor(Math.random() * characters.length);
        let randomindex2 = Math.floor(Math.random() * characters.length);
        randomElements1.push(characters[randomindex1]);
        randomElements2.push(characters[randomindex2]);
    }

    let randomstring1 = randomElements1.join("");
    let randomstring2 = randomElements2.join("");
    password1.textContent = randomstring1
    password2.textContent = randomstring2
}

tworandompasswords()



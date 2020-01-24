function changeVocals (str) {
    //code di sini

    var newStr = "";
    var dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ  ";

    for(var i = 0; i < str.length; i++){
            if(str[i] === "A"){
                newStr += dict[dict.indexOf("A") + 1];
            }
            else if(str[i] === "I"){
                newStr += dict[dict.indexOf("I") + 1];
            }
            else if(str[i] === "U"){
                newStr += dict[dict.indexOf("U") + 1];
            }
            else if(str[i] === "E"){
                newStr += dict[dict.indexOf("E") + 1];
            }
            else if(str[i] === "O"){
                newStr += dict[dict.indexOf("O") + 1];
            }
            else if(str[i] === "a"){
                newStr += dict[dict.indexOf("a") + 1];
            }
            else if(str[i] === "i"){
                newStr += dict[dict.indexOf("i") + 1];
            }
            else if(str[i] === "u"){
                newStr += dict[dict.indexOf("u") + 1];
            }
            else if(str[i] === "e"){
                newStr += dict[dict.indexOf("e") + 1];
            }
            else if(str[i] === "o"){
                newStr += dict[dict.indexOf("o") + 1];
            }
            else{
                newStr += str[i]
            } 
    }
    return newStr;
  }
  
  function reverseWord (str) {
    //code di sini
    var reverseStr = "";

    for(var k = str.length-1; k >= 0; k--){
        reverseStr += str[k];
    }

    return reverseStr;
  }

  function setLowerUpperCase (str) {
    //code di sini
    var newLc = "";

    for(var l = 0; l < str.length; l++){
        if(str[l] === str[l].toLowerCase()){
            newLc += str[l].toUpperCase();
        }
        else if(str[l] === str[l].toUpperCase()){
            newLc += str[l].toLowerCase();
        }
    }

    return newLc;
  }

  function removeSpaces (str) {
    //code di sini
    var spaces = ""
    for(var m = 0; m < str.length; m++){
        if(str[m] === " "){
            spaces += "";
        }
        else{
            spaces += str[m];
        }
    }
    return spaces;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return "Minimal karakter yang diinputkan adalah 5 karakter";
    }
    var vocals = changeVocals(name);
    var reverse = reverseWord(vocals);
    var lowerUpper = setLowerUpperCase(reverse);
    var spaces = removeSpaces(lowerUpper);

    return spaces;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
const initText = document.getElementById('textField').value = '';

//* Validate if the words are uppercase or special chars, then enc

function iniEnc() {

    let textEnc = document.getElementById('textField').value;
    
    if (textEnc.match(/\b[a-z]+/g)) {
        encrypt()
    } else if (textEnc.length < 1) {
        document.getElementById('textField').value = 'Ingresa una palabra.';
        setTimeout(function() {
            document.getElementById('textField').value = '';
        }, 2000);
    } else {
        document.getElementsByClassName('advice')[0].style.color = '#ff5733';
        setTimeout(function() {
            document.getElementsByClassName("advice")[0].style.color = "#000000";
        }, 2000);
    };

    if(textEnc.length >= 1) {
        document.getElementsByClassName('no_text')[0].style.display = 'none';
        document.getElementsByClassName('button_copy')[0].style.visibility = "visible";
    };
};


function iniDec() {

    let textEnc = document.getElementById('textField').value;

    if (textEnc.match(/\b[a-z]+/g)) {
        decrypt()
    } else if (textEnc.length < 1) {
        document.getElementById('textField').value = 'Ingresa una palabra.';
        setTimeout(function() {
            document.getElementById('textField').value = '';
        }, 2000);
    } else {
        document.getElementsByClassName('advice')[0].style.color = '#ff5733';
        setTimeout(function() {
            document.getElementsByClassName("advice")[0].style.color = "#000000";
        }, 2000);
    };

    if(textEnc.length >= 1) {
        document.getElementsByClassName('no_text')[0].style.display = 'none';
        document.getElementsByClassName('button_copy')[0].style.visibility = "visible";
    };
};


//* Encrypt Area - match and replace words
function encrypt() {
    let textEnc = document.getElementById('textField').value;

    const keysEnc = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
    textEnc = textEnc.replace(/a|e|i|o|u/g, function (matched) {
        return keysEnc[matched];
    });

    document.getElementById('result').textContent = textEnc;
};


//* Decrypt Area - match and replace words
function decrypt() {
    let textDec = document.getElementById('textField').value;

    const keysDec = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };
    textDec = textDec.replace(/ai|enter|imes|ober|ufat/g, function (matched) {
        return keysDec[matched];
    });

    document.getElementById('result').textContent = textDec;
};

//* Copy function
function copyResult() {
    let copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    document.getElementById("result").textContent = "Texto copiado con éxito!";
    setTimeout(function() {
        document.getElementById("result").textContent = "";
    }, 3000);    

    document.getElementById('textField').value = '';
};

//* 
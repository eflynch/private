let openpgp = window.openpgp;

openpgp.initWorker({path:'openpgp.worker.js'});

let getData = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "text";
    xhr.onload = () => {
        callback(xhr.response);
    };
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function (){
    const passinput = document.getElementById("pass");
    console.log(passinput);
    passinput.addEventListener("keyup", function(event) {
        if (event.keyCode == 13) {
            let password = passinput.value; 

            getData("data.gpg", (data)=>{
                openpgp.message.readArmored(data).then((message)=>{
                    let options = {
                        message: message,
                        passwords: [password],
                    };
                    openpgp.decrypt(options).then(function(plaintext) {
                        eval(plaintext.data);
                        window.loadpage();
                    });
                });
            });
        };
    }, false);
});


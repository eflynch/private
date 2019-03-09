let openpgp = window.openpgp;

openpgp.initWorker({path:'openpgp.worker.js'});

let password = "password";

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
});



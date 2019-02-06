
let email = document.getElementById('user');
let password = document.getElementById('password');
let showPass = document.getElementById('check')
const enter = document.getElementById('enter')

const showPassword = () => {
    let checkin = showPass;
    let contraseña = password;
    if (checkin.checked == true) {
        contraseña.type = "text"
    } else {
        contraseña.type = "password"
    }
};


const autentic = () => {
    let pass = password.value;
    let mail = email.value;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(mail, pass)
        .then(result => {
            location.href = "./view/panel.html";
        })
        .catch(function (error) {
            let errorCode = error.code;
            alert("Ingrese un usuario valido ")
            console.log(errorCode);
        })
};

enter.addEventListener('click', e => {
    autentic();

});

showPass.addEventListener('click', e => {
    showPassword();
})





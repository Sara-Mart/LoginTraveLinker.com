document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById("formulario")
    const usuario = document.getElementById("usuario")
    const password = document.getElementById("password")
    const errorPassword = document.getElementById("errorPassword")

    form.addEventListener('submit',(addEventListener)=>{
        addEventListener.preventDefault();
        if(password.value.length <3){
            errorPassword.textContent="¡Debe contener minimo 8 caracteres!"

        }
    });
});
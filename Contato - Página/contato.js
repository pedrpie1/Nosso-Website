let inputEmail = document.querySelector("#exampleFormControlInput1");
let inputNome = document.querySelector("#exampleFormControlInput2");
let inputMsg = document.querySelector("#exampleFormControlTextarea1")
let btn = document.querySelector("#btn");

let n = ""

btn.addEventListener("click", function enviar(){
    if (inputNome.value == n || inputEmail.value == n){
        alert("Erro! Verifique se todos os campos estão preenchidos.")
    } else if (inputMsg.value == n) {
        alert("Por favor, Digite uma mensagem.")
    } else{
        alert("Mensagem enviada!")
    }
})

// MODAL
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
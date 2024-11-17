function passwordVerifier() {
  const userPassword = document.getElementById("password").value;
  const result = document.getElementById("return");
  const specialCharacters = []
  let errorMessage = "";
  if (userPassword.length == 0) {
    errorMessage += ' Digite uma senha. ';
  }
  if (!userPassword.match(/^.*[0-9].*$/)) {
    errorMessage += ' A senha deve ter pelo menos um número. ';
  }
  if (userPassword.length < 8) {
    errorMessage += ' A senha deve ter pelo menos 8 caracteres. ';
  }
  if (!userPassword.match(/^.*[a-z].*$/)) {
    errorMessage += ' A senha deve ter pelo menos uma letra minúscula. ';
  }
  if (!userPassword.match(/^.*[A-Z].*$/)) {
    errorMessage += ' A senha deve ter pelo menos uma letra maiúscula. ';
  }
  if (!userPassword.match(/[@#$%^&*()<>';:=!^-]/g)) {
    errorMessage += ' A senha deve ter pelo menos um caractere especial. ';
  }

  result.textContent = errorMessage || "Sua senha é segura.";
  console.log(errorMessage)
}

export default passwordVerifier;
/* $&+,:;=?@#|'<>.-^*()%!
   " A senha deve ter pelo menos um caractere especial. "
   @#$%^&*()<>';:=
*/

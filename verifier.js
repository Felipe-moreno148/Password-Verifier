import { input } from "@inquirer/prompts";

async function passwordVerifier() {
  let password = await input({ message: "Digite sua senha" });

  if (password.length == 0) {
    console.log(" Digite uma senha. ");
    return passwordVerifier();
  }
  if (!password.match(/^.*[0-9].*$/)) {
    console.log(" A senha deve ter pelo menos um número. ");
    return passwordVerifier();
  }
  if (password.length < 8) {
    console.log(" A senha deve ter pelo menos 8 caracteres. ");
    return passwordVerifier();
  }
  if (!password.match(/^.*[a-z].*$/)) {
    console.log(" A senha deve ter pelo menos uma letra minúscula. ");
    return passwordVerifier();
  }
  if (!password.match(/^.*[A-Z].*$/)) {
    console.log(" A senha deve ter pelo menos uma letra maiúscula. ");
    return passwordVerifier();
  }
  if (!password.match(/[@#$%^&*()<>';:=!^-]/g)) {
    console.log(" A senha deve ter pelo menos um caractere especial. ");
    return passwordVerifier();
  }

  password = password || "Sua senha é segura.";
  console.log("sua senha é segura.");
}

async function start() {
  passwordVerifier();
}

start();

/*
' A senha deve ter pelo menos uma letra minúscula. '
' A senha deve ter pelo menos uma letra maiúscula. '
' A senha deve ter pelo menos um caractere especial. '
*/

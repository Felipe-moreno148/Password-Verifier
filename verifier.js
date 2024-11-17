import { input } from "@inquirer/prompts";

async function passwordVerifier() {

  let password = await input({message: 'Digite sua senha'})

  if (password.length == 0) {
    console.log(' Digite uma senha. ');
  }
  if (!password.match(/^.*[0-9].*$/)) {
    console.log(' A senha deve ter pelo menos um número. ');
  }
  if (password.length < 8) {
    console.log(' A senha deve ter pelo menos 8 caracteres. ');
  }
  if (!password.match(/^.*[a-z].*$/)) {
    console.log(' A senha deve ter pelo menos uma letra minúscula. ');
  }
  if (!password.match(/^.*[A-Z].*$/)) {
    console.log(' A senha deve ter pelo menos uma letra maiúscula. ') ;
  }
  if (!password.match(/[@#$%^&*()<>';:=!^-]/g)) {
    console.log(' A senha deve ter pelo menos um caractere especial. ') ;
  }

  password = password || 'Sua senha é segura.'
}


export default passwordVerifier;

/*
' A senha deve ter pelo menos uma letra minúscula. '
' A senha deve ter pelo menos uma letra maiúscula. '
' A senha deve ter pelo menos um caractere especial. '
*/
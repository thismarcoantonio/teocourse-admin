export function validateEmail(value) {
  const regex = RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
  )

  return value && regex.test(value)
    ? undefined
    : "O endereço de email fornecido não é valido"
}

export function required(value) {
  return value ? undefined : "Este campo é obrigatório"
}

export function validatePassword(value) {
  return value && value.length >= 6
    ? undefined
    : "A senha deve ter no mínimo 6 caracteres"
}

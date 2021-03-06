export default (values) => {
  const errors = {}

  let validationEmail = null
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  validationEmail = regexEmail.test(values.email)
  if (validationEmail === false) {
    if (!values.email) {
      errors.email = 'Ce champ est requis'
    } else {
      errors.email = 'Adresse email invalide'
    }
  }

  if (!values.name) {
    errors.name = 'Ce champ est requis'
  }

  if (!values.message) {
    errors.message = 'Ce champ est requis'
  }

  return errors
}

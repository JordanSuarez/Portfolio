export default ({palette}) => ({
  container: {
    margin: '5rem auto 0',
    maxWidth: '20rem',
    backgroundColor: palette.white,
    padding: '1.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    height: '25rem',
  },
  formTitle: {
    fontSize: '1.3rem',
    padding: '0.5rem',
    color: palette.light,
  },
  textField: {
    marginBottom: '0.5rem',
    width: '100%',
    '& .MuiFormLabel-root.Mui-focused': {
      color: palette.secondDarkBlue,
    },
    '& .MuiInput-underline:after': {
      borderColor: palette.secondDarkBlue,
    },
  },
  submit: {
    textTransform: 'initial',
    backgroundColor: palette.firstDarkBlue,
    color: palette.white,
    margin: '2em 0 2em auto',
    '&:hover': {
      color: palette.light,
      backgroundColor: palette.secondDarkBlue,
    },
  },
  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  login: {
    textAlign: 'right',
    color: palette.firstDarkBlue,
  },
  image: {
    height: '400px',
    width: '100%',
    objectFit: 'cover',
  },
})

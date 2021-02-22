export default ({palette}) => ({
  container: {
    padding: '3em 10px 3em 10px',
  },

  content: {
    margin: '0 auto',
    maxWidth: '400px',
    backgroundColor: palette.white,
    padding: '1.5em 1.5em',
  },

  formTitle: {
    fontSize: '1.3em',
    padding: '0.5em 0',
    color: palette.firstDarkBlue,
  },

  textfield: {
    marginBottom: '0.5em',
    '& .MuiFormLabel-root.Mui-focused': {
      color: palette.firstDarkBlue,
    },
    '& .MuiInput-underline:after': {
      borderColor: palette.firstDarkBlue,
    },
  },

  submit: {
    textTransform: 'initial',
    backgroundColor: palette.firstDarkBlue,
    color: palette.white,
    margin: '2em 0 2em auto',
    '&:hover': {
      color: palette.blue,
      backgroundColor: palette.firstDarkBlue,
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

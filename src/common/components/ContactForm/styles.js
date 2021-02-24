export default ({palette, breakpoints}) => ({
  container: {
    margin: '2rem auto 0',
    maxWidth: '25rem',
    padding: '1.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    [breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: 'unset',
    },
  },
  formTitle: {
    fontSize: '1.5rem',
    padding: '0.5rem',
    fontWeight: '400',
    color: palette.light,
    [breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '25rem',
    height: '30rem',
    justifyContent: 'space-evenly',
    position: 'relative',
    alignItems: 'flex-start',
    [breakpoints.down('xs')]: {
      width: 'auto',
      maxWidth: 'unset',
      alignItems: 'center',
    },
    '& img': {
      position: 'absolute',
      top: '-3rem',
      right: '-2rem',
      width: '5rem',
      zIndex: '1',
    },
  },
  textField: {
    marginBottom: '2rem',
    width: '100%',
    color: palette.firstDarkBlue,
    '& .MuiFilledInput-multiline': {
      padding: '0',
    },
    '& .MuiInputBase-input': {
      padding: '27px 12px 10px',
      backgroundColor: palette.lightBlue,
      borderRadius: '5px',
      position: 'relative',
      '&:focus': {
        backgroundColor: palette.light,
      },
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: palette.lightRed,
    },
    '& .MuiFormLabel-root.Mui-error': {
      color: palette.lightRed,
    },
    '& p': {
      position: 'absolute',
      bottom: '-1.3rem',
      fontSize: '0.8rem',
    },
  },
  captcha: {
    position: 'relative',
    '& < div': {
      margin: 'auto',
    },
  },
  errorMessage: {
    position: 'absolute',
    color: palette.lightRed,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    bottom: '-1rem',
    fontSize: '0.8rem',
    margin: '0 14px',
  },
  submit: {
    width: '8rem',
    marginTop: '1.7rem',
    color: palette.light,
    backgroundColor: palette.mediumBlue,
    alignSelf: 'flex-end',
    '&:hover': {
      cursor: 'none',
      color: palette.firstDarkBlue,
    },
    '&:disabled': {
      color: '#fdfdfd61',
      backgroundColor: '#f2f3f547',
    },
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
})

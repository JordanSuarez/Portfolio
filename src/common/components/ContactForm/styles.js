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
    [breakpoints.down('xs')]: {
      width: 'auto',
      maxWidth: 'unset',
    },
    '& img': {
      position: 'absolute',
      top: '-2rem',
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
})

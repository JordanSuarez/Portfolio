export default ({breakpoints}) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '3rem',
    '& button': {
      width: '8rem',
      [breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  },
})

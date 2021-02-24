export default ({breakpoints}) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& button': {
      [breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  },
})

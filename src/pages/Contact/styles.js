export default ({palette, breakpoints}) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    fontWeight: '400',
  },
  title: {
    display: 'flex',
    alignSelf: 'baseline',
    margin: '2rem auto',
    color: palette.light,
    fontWeight: '400',
    fontSize: '1.7rem',
    [breakpoints.up('md')]: {
      margin: '2rem',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    padding: '1rem',
    flexWrap: 'wrap',
    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      margin: '3rem auto 0',
      padding: '2rem 1rem',
      borderTop: `1px solid ${palette.lightRed}`,
    },
    '& li': {
      display: 'flex',
      alignItems: 'center',
      [breakpoints.down('xs')]: {
        flexWrap: 'wrap',
        flexDirection: 'column-reverse',
      },
      '& a': {
        color: palette.light,
        textDecoration: 'none',
        fontSize: '1.2rem',
        '&:hover': {
          textDecoration: 'underline',
        },
        '& img': {
          width: '2.5rem',
          margin: '0.5rem',
          transition: '.2s ease-in-out',
          '&:hover': {
            transition: '.2s ease-in-out',
            transform: 'scale(1.2)',
          },
        },
      },
    },
  },
})

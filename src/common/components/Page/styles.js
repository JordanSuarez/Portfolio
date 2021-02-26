export default ({palette, breakpoints}) => ({
  title: {
    margin: '0.7rem 2rem 0 3rem',
    color: palette.light,
    fontWeight: '400',
    textAlign: 'center',
    zIndex: '0',
    fontSize: '1.4rem',
    textShadow: `-2px 1px 0px ${palette.firstDarkBlue}`,
    '&::first-letter': {
      textShadow: `-3px 1px 0px ${palette.lightRed}`,
      border: `1px solid ${palette.light}`,
      padding: '1px 6px 5px 10px',
      margin: '6rem -4px',
    },
    [breakpoints.up('xs')]: {
      fontSize: '2rem',
    },
    [breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  wrapper: {
    overflow: 'scroll',
    height: '80vh',
    marginTop: '2rem',
    paddingBottom: '5rem',
    borderTop: `2px solid ${palette.light}`,
    [breakpoints.down('xs')]: {
      marginTop: '5.5rem',
    },
  },
})

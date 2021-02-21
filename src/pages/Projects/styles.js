export default ({palette}) => ({
  title: {
    margin: '0.7rem 2rem 0 3rem',
    color: palette.light,
    fontWeight: '400',
    textTransform: 'uppercase',
    textAlign: 'end',
    '&::first-letter': {
      textShadow: `-2px 1px 0px ${palette.firstDarkBlue}`,
      border: `1px solid ${palette.light}`,
      padding: '0px 3px 3px 5px',
      backgroundColor: palette.lightRed,
    },
    position: 'absolute',
    right: '0.6rem',
    backgroundColor: palette.firstDarkBlue,
    zIndex: '0',
  },
  wrapper: {
    overflow: 'scroll',
    height: '100vh',
    marginTop: '5rem',
    borderTop: `1px solid ${palette.light}`,
  },
})

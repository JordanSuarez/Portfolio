export default ({palette, breakpoints}) => ({
  title: {
    margin: '0.7rem 2rem 0 3rem',
    color: palette.light,
    fontWeight: '400',
    textAlign: 'end',
    position: 'absolute',
    top: '1.7rem',
    right: '0.6rem',
    zIndex: '0',
    fontSize: '1.4rem',
    textShadow: `-2px 1px 0px ${palette.firstDarkBlue}`,
    '&::first-letter': {
      textShadow: `-3px 1px 0px ${palette.lightRed}`,
      border: `1px solid ${palette.light}`,
      padding: '1px 6px 5px 10px',
      margin: '6rem -5px',
    },
    [breakpoints.up('xs')]: {
      fontSize: '2rem',
      top: '1.3rem',
    },
  },
  wrapper: {
    overflow: 'scroll',
    height: '-webkit-fill-available',
    marginTop: '5rem',
    paddingBottom: '5rem',
    borderTop: `1px solid ${palette.light}`,
  },
})

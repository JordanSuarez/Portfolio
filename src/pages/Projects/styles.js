export default ({palette}) => ({
  title: {
    margin: '0.7rem 2rem 0 3rem',
    color: palette.light,
    fontWeight: '400',
    textTransform: 'uppercase',
    textAlign: 'end',
    '& span': {
      textShadow: `-2px 1px 0px ${palette.lightRed}`,
      border: `1px solid ${palette.light}`,
      padding: '0px 3px 3px 5px',
    },
  },
  wrapper: {
    alignItems: 'center',
    marginTop: '10rem',
    overflow: 'scroll',
    height: '70%',
  },
})

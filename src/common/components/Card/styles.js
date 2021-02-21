export default ({palette}) => ({
  card: {
    // width: '30rem',
    width: '100%',
    // height: '30rem',
    background: palette.light,
    borderRadius: '5px',
    // boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
    transition: 'box-shadow 0.5s',
    willChange: 'transform',
    border: `5px solid ${palette.light}`,
  },
})

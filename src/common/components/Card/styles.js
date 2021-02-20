export default () => ({
  card: {
    width: '45ch',
    height: '45ch',
    background: 'grey',
    borderRadius: '5px',
    backgroundImage:
      'url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
    transition: 'box-shadow 0.5s',
    willChange: 'transform',
    border: '15px solid white',
    '&:hover': {
      boxShadow: '0px 30px 100px -10px rgba(0, 0, 0, 0.4)',
    },
  },
})

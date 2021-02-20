export default () => ({
  card: {
    width: '45ch',
    height: '45ch',
    background: 'grey',
    borderRadius: '5px',
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

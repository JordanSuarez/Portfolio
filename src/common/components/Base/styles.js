export default ({images}) => ({
  root: {
    height: '100vh',
    overflowY: 'hidden',
    overflowX: 'hidden',
    backgroundImage: `url(${images.background})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'unset',
  },
})

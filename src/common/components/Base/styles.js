import background from 'common/assets/images/background.jpg'

export default () => ({
  root: {
    height: '100vh',
    overflowY: 'hidden',
    overflowX: 'hidden',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'top',
  },
})

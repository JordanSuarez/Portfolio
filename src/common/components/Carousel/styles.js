export default () => ({
  carousel: {
    '& .awssld__content': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      '& img': {
        objectFit: 'contain',
        pointerEvents: 'none',
      },
    },
  },
})

export default ({breakpoints}) => ({
  carousel: {
    '& .awssld__content': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      '& img': {
        objectFit: 'contain',
        pointerEvents: 'none',
      },
    },
    '& .awssld__bullets': {
      '& button': {
        [breakpoints.down('xs')]: {
          marginRight: '1rem',
        },
      },
    },
  },
})

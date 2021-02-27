export default ({breakpoints, palette}) => ({
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
        backgroundColor: palette.secondGrey,
        [breakpoints.down('xs')]: {
          marginRight: '1rem',
        },
      },
      '& .awssld__bullets--active': {
        backgroundColor: palette.secondRed,
      },
    },
    '& .awssld__controls': {
      '--organic-arrow-color': palette.secondGrey,
    },
  },
})

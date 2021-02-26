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
        backgroundColor: palette.lightGrey,
        [breakpoints.down('xs')]: {
          marginRight: '1rem',
        },
      },
      '& .awssld__bullets--active': {
        backgroundColor: palette.lightRed,
      },
    },
    '& .awssld__controls': {
      '--organic-arrow-color': palette.lightGrey,
    },
  },
})

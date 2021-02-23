export default ({palette, font, breakpoints}) => ({
  titleWrapper: {
    textAlign: 'center',
    color: palette.light,
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-html-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
  title: {
    fontFamily: font.title,
    fontWeight: 'bold',
    fontSize: '4rem',
    [breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  letter: {
    display: 'inline-block',
    animation: '$moveItBack 900ms ease forwards',
    willChange: 'transform',
    '&:hover': {
      color: palette.lightRed,
      animation: '$moveIt 1.5s ease forwards',
      willChange: 'transform',
    },
  },
  bracket: {
    color: palette.lightRed,
    '&:hover': {
      color: palette.light,
    },
  },
  primaryLetter: {
    textShadow: `-6px 1px 0px ${palette.lightRed}`,
    border: `1px solid ${palette.light}`,
    padding: '0px 3px 5px 10px',
  },
  subtitle: {
    color: palette.light,
    fontSize: '2rem',
    textAlign: 'center',
    [breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  description: {
    width: '30rem',
    margin: '2rem auto',
    textAlign: 'justify',
    color: palette.light,
    background: '#95959a24',
    borderRadius: '6px',
    padding: ' 1rem',
  },
  link: {
    '& img': {
      transition: '.2s ease-in-out',
      [breakpoints.down('xs')]: {
        width: '10rem',
      },
      '&:hover': {
        transition: '.2s ease-in-out',
        transform: 'scale(1.1)',
      },
    },
  },
  redirection: {
    position: 'absolute',
    right: '1rem',
    bottom: '1rem',
  },
  '@keyframes moveIt': {
    '0%': {
      '-webkit-transform': 'scale(1) rotate(5deg)',
      transform: 'translateY(1px) scale3d(0.98,0.98,1) ',
    },
    '20%': {
      '-webkit-transform': 'scale(1) rotate(10deg)',
      transform: 'translateY(5px) scale3d(0.98,0.98,1) ',
    },
    '40%': {
      '-webkit-transform': 'scale(1) rotate(20deg)',
      transform: 'translateY(10px) scale3d(0.98,0.98,1)',
    },
    '60%': {
      '-webkit-transform': ' rotate(10deg)',
      transform: 'translateY(20px) scale3d(1.05,1.05,1)',
    },
    '70%': {
      '-webkit-transform': ' rotate(5deg)',
      transform: 'translateY(15px) scale3d(1.01,1.01,1)',
    },
    '80%': {
      transform: 'translateY(10px) scale3d(1.01,1.01,1)',
    },
    '90%': {
      '-webkit-transform': ' rotate(-10deg)',
      transform: 'translateY(7px) scale3d(1,1,1)',
    },
    '100%': {
      '-webkit-transform': ' rotate(-5deg)',
      transform: 'translateY(3px) scale3d(1,1,1)',
    },
  },
  '@keyframes moveItBack': {
    '0%': {
      transform: 'translateY(2px) scale3d(1,1,1)',
    },
    '20%': {
      transform: 'translateY(5px) scale3d(1.01,1.01,1)',
    },
    '40%': {
      transform: 'translateY(10px) scale3d(1.05,1.05,1)',
    },
    '60%': {
      transform: 'translateY(3px) scale3d(0.98,0.98,1)',
    },
    '80%': {
      transform: 'translateY(5px) scale3d(0.98,0.98,1) ',
    },
    '100%': {
      transform: 'translateY(0px) scale3d(0.98,0.98,1) ',
    },
  },
})

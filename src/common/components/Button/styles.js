export default ({palette}) => ({
  button: {
    padding: '0.7rem 1rem',
    border: 'none',
    borderRadius: '5px',
    overflow: 'hidden',
    background: palette.secondRed,
    fontSize: '1rem',
    '-webkit-transition': 'background-color 0.3s',
    transition: 'background-color 0.3s',
    color: '#f6f5f5',
    outline: 'none',
    '& > span': {
      display: 'inline-block',
    },
    '&:active': {
      backgroundColor: palette.second,
    },
    '&:hover': {
      backgroundColor: palette.second,
      '& > span': {
        '&:nth-child(odd)': {
          '-webkit-animation': '$anim-nanuk-1 0.5s forwards',
          animation: '$anim-nanuk-1 0.5s forwards',
        },
        '&:nth-child(even)': {
          '-webkit-animation': '$anim-nanuk-2 0.5s forwards',
          animation: '$anim-nanuk-2 0.5s forwards',
        },
        '&:nth-child(1)': {
          '-webkit-animation-delay': '0s',
          animationDelay: '0s',
        },
        '&:nth-child(2)': {
          '-webkit-animation-delay': '0.05s',
          animationDelay: '0.05s',
        },
        '&:nth-child(3)': {
          '-webkit-animation-delay': '0.1s',
          animationDelay: '0.1s',
        },
        '&:nth-child(4)': {
          '-webkit-animation-delay': '0.15s',
          animationDelay: '0.15s',
        },
        '&:nth-child(5)': {
          '-webkit-animation-delay': '0.2s',
          animationDelay: '0.2s',
        },
        '&:nth-child(6)': {
          '-webkit-animation-delay': '0.25s',
          animationDelay: '0.25s',
        },
        '&:nth-child(7)': {
          '-webkit-animation-delay': '0.3s',
          animationDelay: '0.3s',
        },
        '&:nth-child(8)': {
          '-webkit-animation-delay': '0.35s',
          animationDelay: '0.35s',
        },
        '&:nth-child(9)': {
          '-webkit-animation-delay': '0.4s',
          animationDelay: '0.4s',
        },
        '&:nth-child(10)': {
          '-webkit-animation-delay': '0.45s',
          animationDelay: '0.45s',
        },
        '&:nth-child(11)': {
          '-webkit-animation-delay': '0.5s',
          animationDelay: '0.5s',
        },
        '&:nth-child(12)': {
          '-webkit-animation-delay': '0.55s',
          animationDelay: '0.55s',
        },
        '&:nth-child(13)': {
          '-webkit-animation-delay': '0.6s',
          animationDelay: '0.6s',
        },
        '&:nth-child(14)': {
          '-webkit-animation-delay': '0.65s',
          animationDelay: '0.65s',
        },
        '&:nth-child(15)': {
          '-webkit-animation-delay': '0.7s',
          animationDelay: '0.7s',
        },
        '&:nth-child(16)': {
          '-webkit-animation-delay': '0.75s',
          animationDelay: '0.75s',
        },
      },
    },
  },
  '@keyframes anim-nanuk-1': {
    '0%, 100%': {
      opacity: 1,
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      color: palette.first,
    },
    '49%': {
      opacity: 1,
      '-webkit-transform': 'translate3d(0, 100%, 0)',
      transform: 'translate3d(0, 100%, 0)',
      color: palette.first,
    },
    '50%': {
      opacity: 0,
      '-webkit-transform': 'translate3d(0, 100%, 0)',
      transform: 'translate3d(0, 100%, 0)',
      color: palette.first,
    },
    '51%': {
      opacity: 0,
      '-webkit-transform': 'translate3d(0, -100%, 0)',
      transform: 'translate3d(0, -100%, 0)',
      color: palette.first,
    },
    '100%': {
      color: palette.first,
    },
  },
  '@keyframes anim-nanuk-2': {
    '0%, 100%': {
      opacity: 1,
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      color: palette.first,
    },
    '49%': {
      opacity: 1,
      '-webkit-transform': 'translate3d(0, -100%, 0)',
      transform: 'translate3d(0, -100%, 0)',
      color: palette.first,
    },
    '50%': {
      opacity: 0,
      '-webkit-transform': 'translate3d(0, -100%, 0)',
      transform: 'translate3d(0, -100%, 0)',
      color: palette.first,
    },
    '51%': {
      opacity: '0',
      '-webkit-transform': 'translate3d(0, 100%, 0)',
      transform: 'translate3d(0, 100%, 0)',
      color: palette.first,
    },
    '100%': {
      color: palette.first,
    },
  },
})

export default ({palette, breakpoints}) => ({
  menuToggle: {
    display: 'block',
    position: 'relative',
    top: '2.8rem',
    left: '2rem',
    zIndex: '1',
    '-webkit-user-select': 'none',
    'user-select': 'none',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '& a': {
      textDecoration: 'none',
      color: palette.second,
      transition: 'color 0.3s ease',
      fontSize: '2.5rem',
      [breakpoints.down('xs')]: {
        fontSize: '2rem',
      },
    },
    '& span:first-child': {
      transformOrigin: '0% 0%',
    },
    '& span:nth-last-child(2)': {
      transformOrigin: '0% 100%',
    },
  },
  input: {
    display: 'block',
    width: '2rem',
    height: '2rem',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    cursor: 'pointer',
    opacity: '0',
    zIndex: '2',
    '-webkit-touch-callout': 'none',
    '&:checked': {
      transform: 'none',
    },
    '&:first-child': {
      transformOrigin: '0% 0%',
    },
    '&:nth-last-child(2)': {
      transformOrigin: '0% 100%',
    },
    '&:checked ~ span': {
      opacity: 1,
      transform: 'rotate(45deg) translate(-2px, -1px)',
      background: palette.second,
    },
    '&:checked ~ span:nth-last-child(3)': {
      opacity: '0',
      transform: 'rotate(0deg) scale(0.2, 0.2)',
    },
    '&:checked ~ span:nth-last-child(2)': {
      transform: 'rotate(-45deg) translate(0, -1px)',
    },
    '&:checked ~ ul': {
      transform: 'none',
    },
  },
  burger: {
    display: 'block',
    width: '33px',
    height: '4px',
    marginBottom: '5px',
    position: 'relative',
    background: palette.second,
    borderRadius: '3px',
    zIndex: '1',
    transformOrigin: '4px 0px',
    transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),background 0.5s cubic-bezier(0.77,0.2,0.05,1.0) , opacity 0.55s ease',
  },
  menu: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    margin: '-100px 0 0 -50px',
    padding: '50px',
    paddingTop: '125px',
    background: palette.menu,
    'list-style-type': 'none',
    '-webkit-font-smoothing': 'antialiased',
    transformOrigin: '0% 0%',
    transform: 'translate(-100%, 0)',
    transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)',
    '& li': {
      padding: '10px 5px',
      fontSize: '22px',
      fontWeight: '400',
      width: 'fit-content',
      '&::first-letter': {
        textShadow: `-3px 1px 0px ${palette.secondRed}`,
        border: `1px solid ${palette.second}`,
        padding: '1px 6px 5px 10px',
        margin: '6rem -5px',
        '&:hover': {
          color: palette.second,
        },
        '& a': {
          padding: '15px 20px',
        },
      },
      '& a': {
        transition: 'all 0.3s ease-in-out',
      },
      '&:hover': {
        '& a': {
          borderBottom: `3px solid ${palette.second}`,
          padding: '3px 5px',
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
  activeLink: {
    borderBottom: `3px solid ${palette.second}`,
    padding: '3px 5px',
  },
})

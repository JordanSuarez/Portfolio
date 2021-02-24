export default ({breakpoints}) => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  shapes: {
    position: 'absolute',
    top: '30%',
    willChange: 'transform',
  },
  title: {
    [breakpoints.down('sm')]: {
      top: '30%',
    },
    [breakpoints.down('xs')]: {
      top: '35%',
    },
  },
  moon: {
    [breakpoints.down('md')]: {
      right: '50%',
    },
    [breakpoints.down('sm')]: {
      right: '60%',
    },
    [breakpoints.down('xs')]: {
      right: '70%',
    },
  },
  githubLink: {
    [breakpoints.down('md')]: {
      left: '40%',
    },
    [breakpoints.down('xs')]: {
      left: '60%',
      top: '38%',
    },
  },
  linkedinLink: {
    [breakpoints.down('md')]: {
      right: '40%',
    },
    [breakpoints.down('xs')]: {
      right: '60%',
      top: '25%',
    },
  },
})

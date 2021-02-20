export default ({palette, breakpoints}) => ({
  projectContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: '10rem',
    alignItems: 'center',
  },
  article: {
    color: palette.light,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: '1rem',
    width: '100%',
    [breakpoints.up('sm')]: {
      width: '50%',
    },
  },
  title: {
    fontSize: '3rem',
    fontWeight: '400',
    marginBottom: '1rem',
  },
  context: {
    display: 'block',
    fontSize: '1rem',
    fontStyle: 'italic',
  },
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'column',
    '& div': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: 'white',
      borderRadius: '7px',
      width: 'fit-content',
      padding: '0.5rem 1rem',
    },
  },
  category: {
    textTransform: 'upperCase',
    margin: '1rem 0',
  },
  icon: {
    width: '3rem',
    margin: '0.1rem 0.5rem',
  },
})

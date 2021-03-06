export default ({palette, breakpoints, font}) => ({
  projectContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: '5rem',
    margin: '5rem auto 0',
    '&:nth-child(odd)': {
      flexDirection: 'row',
    },
    [breakpoints.up('lg')]: {
      paddingTop: '0',
      margin: '8rem auto 7rem',
    },
  },
  article: {
    fontFamily: font.main,
    color: palette.second,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: '1rem',
    width: '90%',
    [breakpoints.up('lg')]: {
      width: '50%',
      '& categoriesContainer': {
        alignItems: 'center',
      },
    },
  },
  title: {
    fontSize: '2rem',
    fontWeight: '400',
    marginBottom: '1rem',
    [breakpoints.up('xs')]: {
      fontSize: '2.5rem',
    },
    [breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
  },
  context: {
    fontFamily: font.main,
    fontSize: '1rem',
    fontStyle: 'italic',
  },
  link: {
    fontFamily: font.main,
    color: palette.secondRed,
    marginLeft: '0.2rem',
  },
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:nth-child(odd)': {
      [breakpoints.up('lg')]: {
        alignItems: 'start',
      },
    },
    [breakpoints.up('lg')]: {
      alignItems: 'end',
    },
    '& div': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: 'white',
      borderRadius: '7px',
      width: 'fit-content',
      padding: '0.5rem 1rem',
      border: `2px solid #e2e7ed`,
    },
  },
  category: {
    fontWeight: '400',
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  icon: {
    width: '3rem',
    margin: '0.1rem 0.5rem',
  },
  divider: {
    height: '3px',
    marginBottom: '1rem',
    borderRadius: '1rem',
    backgroundColor: palette.secondRed,
  },
  sliderContainer: {
    width: '90%',
    marginTop: '2rem',
    [breakpoints.up('sm')]: {
      width: '80%',
    },
    [breakpoints.up('md')]: {
      width: '60%',
    },
    [breakpoints.up('lg')]: {
      width: '40%',
      marginTop: '0',
    },
  },
})

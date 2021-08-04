import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#7D48B1',
      main: '#663399',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#fff',
    },
    black: {
      light: '#949494',
      main: '#000',
    },
    background: {
      light: '#f1f3f4',
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
  },
  shape: {
    borderRadius: 4,
    round: 20,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
        },
      },
    },
  },
})

export default theme

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
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
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

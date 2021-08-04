import { alpha, AppBar, IconButton, styled, Toolbar } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import DashboardSearchBox from './DashboardSearchBox'

const DRAWER_WIDTH = 280
const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const Root = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  backgroundColor: alpha(theme.palette.background.light, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
  },
}))

const AppToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))

const DashboardNavbar = () => {
  return (
    <Root>
      <AppToolbar>
        <IconButton
          onClick={console.log('Clicked!')}
          sx={{ mr: 3, color: 'text.primary' }}
        >
          <MenuIcon color='primary' />
        </IconButton>
        <DashboardSearchBox />
      </AppToolbar>
    </Root>
  )
}

export default DashboardNavbar

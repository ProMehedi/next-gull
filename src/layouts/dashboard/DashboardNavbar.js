import { alpha, AppBar, styled, Toolbar } from '@material-ui/core'

const DRAWER_WIDTH = 280
const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const Root = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  // backgroundColor: alpha(theme.palette.background.default, 0.72),
  backgroundColor: '#555',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
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
      <AppToolbar>Navbar Here</AppToolbar>
    </Root>
  )
}

export default DashboardNavbar

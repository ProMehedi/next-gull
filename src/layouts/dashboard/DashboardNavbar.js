import {
  alpha,
  AppBar,
  Box,
  IconButton,
  styled,
  Toolbar,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import DashboardFullScreen from './DashboardFullScreen'
import DashboardNotifations from './DashboardNotifations'
import DashboardSearchBox from './DashboardSearchBox'
import DashboardUser from './DashboardUser'

const DRAWER_WIDTH = 120
const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const Root = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  backgroundColor: alpha(theme.palette.background.light, 0.72),
  transition: 'width 0.3s',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
  },
}))

const AppToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 3),
  },
}))

const AppBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}))

const DashboardNavbar = ({ isOpen, onOpenSidebar }) => {
  return (
    <Root style={{ width: !isOpen && '100%' }}>
      <AppToolbar>
        <IconButton onClick={onOpenSidebar} size='large' sx={{ mr: 3 }}>
          <MenuIcon color='primary' />
        </IconButton>
        <DashboardSearchBox />
        <AppBox sx={{ ml: 3 }}>
          <DashboardFullScreen />
          <DashboardNotifations />
          <DashboardUser />
        </AppBox>
      </AppToolbar>
    </Root>
  )
}

export default DashboardNavbar

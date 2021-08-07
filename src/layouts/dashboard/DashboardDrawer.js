import PropTypes from 'prop-types'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@material-ui/core'
import menuItems from '../../../data/menuItems'
import theme from '../../theme'
import Logo from '../../components/Logo'
import Link from '../../components/Link'

const DRAWER_WIDTH = 120

const Root = styled(Drawer)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '.MuiPaper-root': {
    width: DRAWER_WIDTH,
    backgroundColor: theme.palette.primary.main,
    border: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}))

const LogoRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}))

const Menu = styled(List)(({ theme }) => ({}))

const MenuItem = styled(ListItem)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'center',
}))

const MenuItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.white.main,
  minWidth: 'unset',
}))

const DashboardDrawer = ({ isOpenSidebar, onCloseSidebar }) => {
  return (
    <Root variant='permanent'>
      <LogoRoot component={Link} href='/'>
        <Logo />
      </LogoRoot>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem button key={item.id}>
            <MenuItemIcon>{item.icon}</MenuItemIcon>
            <ListItemText
              secondary={
                <Typography variant='body2' color={theme.palette.white.main}>
                  {item.title}
                </Typography>
              }
            />
          </MenuItem>
        ))}
      </Menu>
    </Root>
  )
}

DashboardDrawer.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
}

export default DashboardDrawer

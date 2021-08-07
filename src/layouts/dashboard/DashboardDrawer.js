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
import { useRouter } from 'next/router'

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

const Menu = styled(List)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingTop: 0,
}))

const MenuItem = styled(ListItem)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  ':hover': {
    backgroundColor: theme.palette.primary.light,
  },
}))

const MenuItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.white.main,
  minWidth: 'unset',
  marginBottom: theme.spacing(0.5),
}))

const DashboardDrawer = ({ isOpenSidebar, onCloseSidebar }) => {
  let isActive
  const router = useRouter()

  return (
    <Root variant='permanent'>
      <LogoRoot component={Link} href='/'>
        <Logo />
      </LogoRoot>
      <Menu>
        {menuItems.map((item) => (
          <div key={item.id}>
            {(isActive = router.pathname === item.path)}
            <MenuItem
              button
              component={Link}
              href={item.path}
              style={{
                backgroundColor: isActive && theme.palette.primary.light,
              }}
            >
              <>
                <MenuItemIcon>{item.icon}</MenuItemIcon>
                <ListItemText
                  secondary={
                    <Typography
                      variant='body2'
                      color={theme.palette.white.main}
                    >
                      {item.title}
                    </Typography>
                  }
                />
              </>
            </MenuItem>
          </div>
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

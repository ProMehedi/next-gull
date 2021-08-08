import PropTypes from 'prop-types'
import { Box, Drawer, List, styled } from '@material-ui/core'
import menuItems from '../../../data/menuItems'
import Logo from '../../components/Logo'
import Link from '../../components/Link'
import { useRouter } from 'next/router'
import MenuItem from '../../components/MenuItem'
import MHidden from '../../components/@material-extend/MHidden'

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

const DashboardDrawer = ({ isOpenSidebar, onCloseSidebar }) => {
  let isActive
  const router = useRouter()

  return (
    <MHidden width='lgDown'>
      <Root variant='permanent'>
        <LogoRoot component={Link} href='/'>
          <Logo />
        </LogoRoot>
        <Menu>
          {menuItems.map((item) => (
            <div key={item.id}>
              {(isActive = router.pathname === item.path)}
              <MenuItem item={item} isActive={isActive} />
            </div>
          ))}
        </Menu>
      </Root>
    </MHidden>
  )
}

DashboardDrawer.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
}

export default DashboardDrawer

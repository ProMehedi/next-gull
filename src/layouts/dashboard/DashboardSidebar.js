import PropTypes from 'prop-types'
import { styled } from '@material-ui/core'

const DRAWER_WIDTH = 280

const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
    backgroundColor: '#999',
  },
}))

const DashboardSidebar = ({ isOpenSidebar, onCloseSidebar }) => {
  return <Root>Sidebar Here</Root>
}

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
}

export default DashboardSidebar

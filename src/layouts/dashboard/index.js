import { styled } from '@material-ui/core'
import { useState } from 'react'
import DashboardNavbar from './DashboardNavbar'
import DashboardDrawer from './DashboardDrawer'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
}))

const Main = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}))

const Dashboard = ({ children }) => {
  const [open, setOpen] = useState(true)

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(!open)} />
      <DashboardDrawer isOpenSidebar={open} />
      <Main>{children}</Main>
    </RootStyle>
  )
}

export default Dashboard

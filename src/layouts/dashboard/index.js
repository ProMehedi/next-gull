import { styled } from '@material-ui/core'
import { useState } from 'react'
import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from './DashboardSidebar'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
}))

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

const Dashboard = ({ children }) => {
  const [open, setOpen] = useState(true)

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(false)} />
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <Main>{children}</Main>
    </RootStyle>
  )
}

export default Dashboard

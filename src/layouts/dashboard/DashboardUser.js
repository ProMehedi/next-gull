import { Avatar, IconButton, styled } from '@material-ui/core'

const Root = styled(IconButton)(({ theme }) => ({
  marginLeft: 1,
  width: 55,
  height: 55,
  borderRadius: 20,
  overflow: 'hidden',
}))

const User = styled(Avatar)(({ theme }) => ({
  borderRadius: 20,
  width: 50,
  height: 50,
}))

const DashboardUser = () => {
  return (
    <Root>
      <User src='images/avatar_default.jpg' alt='photoURL' />
    </Root>
  )
}

export default DashboardUser

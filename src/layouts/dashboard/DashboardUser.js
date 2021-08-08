import { Avatar, IconButton, styled } from '@material-ui/core'

const AVATAR_SIZE = 50

const Root = styled(IconButton)(({ theme }) => ({
  marginLeft: 1,
  width: AVATAR_SIZE + 5,
  height: AVATAR_SIZE + 5,
  borderRadius: 20,
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    width: AVATAR_SIZE * 0.75 + 5,
    height: AVATAR_SIZE * 0.75 + 5,
  },
  [theme.breakpoints.down('md')]: {
    width: AVATAR_SIZE * 0.5 + 5,
    height: AVATAR_SIZE * 0.5 + 5,
  },
}))

const User = styled(Avatar)(({ theme }) => ({
  borderRadius: 20,
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  [theme.breakpoints.down('lg')]: {
    width: AVATAR_SIZE * 0.75,
    height: AVATAR_SIZE * 0.75,
  },
  [theme.breakpoints.down('md')]: {
    width: AVATAR_SIZE * 0.5,
    height: AVATAR_SIZE * 0.5,
  },
}))

const DashboardUser = () => {
  return (
    <Root>
      <User src='images/avatar_1.jpg' alt='photoURL' />
    </Root>
  )
}

export default DashboardUser

import { styled, Box, Typography } from '@material-ui/core'

const Root = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
  fontSize: '1.85em',
  fontWeight: 700,
}))

const Logo = () => {
  return (
    <Root variant='h4' align='center'>
      Gull
    </Root>
  )
}

export default Logo

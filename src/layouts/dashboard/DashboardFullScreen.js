import { Box, IconButton, styled } from '@material-ui/core'
import CrossArrowIcon from '../../icons/CrossArrowIcon'

const Root = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
}))

const DashboardFullScreen = () => {
  return (
    <Root sx={{ ml: 3 }}>
      <IconButton
        sx={{ mr: 3, color: 'text.primary' }}
        style={{
          width: '35px',
          height: '35px',
          display: 'inline-block',
        }}
      >
        <CrossArrowIcon />
      </IconButton>
    </Root>
  )
}

export default DashboardFullScreen

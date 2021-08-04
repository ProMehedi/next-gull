import { IconButton } from '@material-ui/core'
import { Fullscreen } from '@material-ui/icons'

const DashboardFullScreen = () => {
  return (
    <IconButton size='large' sx={{ mr: 2 }}>
      <Fullscreen color='primary' />
    </IconButton>
  )
}

export default DashboardFullScreen

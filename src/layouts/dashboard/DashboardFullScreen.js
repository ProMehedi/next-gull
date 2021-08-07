import { IconButton } from '@material-ui/core'
import { Fullscreen } from '@material-ui/icons'

const DashboardFullScreen = () => {
  return (
    <IconButton sx={{ mr: 1, width: 45, height: 45 }}>
      <Fullscreen color='primary' />
    </IconButton>
  )
}

export default DashboardFullScreen

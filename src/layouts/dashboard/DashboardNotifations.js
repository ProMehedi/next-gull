import { Badge, IconButton } from '@material-ui/core'
import { NotificationsNoneOutlined } from '@material-ui/icons'

const DashboardNotifations = () => {
  return (
    <IconButton size='large'>
      <Badge badgeContent={3} color='error'>
        <NotificationsNoneOutlined color='primary' />
      </Badge>
    </IconButton>
  )
}

export default DashboardNotifations

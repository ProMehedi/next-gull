import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/',
    icon: <InboxIcon />,
  },
  {
    id: 2,
    title: 'Table',
    path: '/table',
    icon: <MailIcon />,
  },
]

export default menuItems

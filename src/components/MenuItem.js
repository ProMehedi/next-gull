import PropTypes from 'prop-types'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@material-ui/core'
import theme from '../theme'
import Link from './Link'

const Root = styled(ListItem)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  ':hover': {
    backgroundColor: theme.palette.primary.light,
  },
}))

const MenuItemIcon = styled(ListItemIcon)(({ theme }) => ({
  padding: theme.spacing(0.5),
  color: theme.palette.white.main,
  minWidth: 'unset',
  marginBottom: theme.spacing(0.5),
}))

const MenuItemText = styled(ListItemText)(({ theme }) => ({
  margin: 0,
}))

const MenuItem = ({ item, isActive }) => {
  return (
    <Root
      button
      component={Link}
      href={item.path}
      style={{
        backgroundColor: isActive && theme.palette.primary.light,
      }}
    >
      <>
        <MenuItemIcon>{item.icon}</MenuItemIcon>
        {isActive && (
          <MenuItemText
            secondary={
              <Typography variant='body2' color={theme.palette.white.main}>
                {item.title}
              </Typography>
            }
          />
        )}
      </>
    </Root>
  )
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
}

export default MenuItem

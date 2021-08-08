import PropTypes from 'prop-types'
import { styled, Typography } from '@material-ui/core'
import Card from './Card'
import { amber, blue, deepPurple, green, grey } from '@material-ui/core/colors'

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}))

const Inner = styled('div')(({ theme }) => ({}))
const Icon = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  color: 'white',
  borderRadius: theme.shape.round,
  padding: theme.spacing(0.2, 1),
  width: 35,
  marginRight: theme.spacing(1),
  minHeight: 60,
}))
const Title = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontWeight: 'normal',
}))
const Desc = styled(Typography)(({ theme }) => ({
  fontSize: '1.875em',
  fontWeight: 700,
  lineHeight: '1.25em',
}))

const StatsCard = ({ title, icon, desc, variant }) => {
  let textColor
  let iconColor
  let bgColor
  if (variant === 'primary') {
    textColor = deepPurple[600]
    bgColor = deepPurple[50]
    iconColor = deepPurple[300]
  } else if (variant === 'secondary') {
    textColor = blue[600]
    bgColor = blue[50]
    iconColor = blue[500]
  } else if (variant === 'success') {
    textColor = green[600]
    bgColor = green[50]
    iconColor = green[500]
  } else if (variant === 'warning') {
    textColor = amber[600]
    bgColor = amber[50]
    iconColor = amber[500]
  } else {
    textColor = grey[600]
    bgColor = grey[50]
    iconColor = grey[500]
  }

  return (
    <Card>
      <Wrapper>
        {icon && (
          <Icon style={{ color: iconColor, backgroundColor: bgColor }}>
            {icon}
          </Icon>
        )}
        <Inner>
          <Title variant='body2' as='h4'>
            {title}
          </Title>
          <Desc color={textColor}>{desc}</Desc>
        </Inner>
      </Wrapper>
    </Card>
  )
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  desc: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning'])
    .isRequired,
}

export default StatsCard

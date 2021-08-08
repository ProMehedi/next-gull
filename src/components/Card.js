import { Paper, styled } from '@material-ui/core'

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  boxShadow: '0 0 0',
  borderRadius: theme.shape.round,
}))

const Card = ({ children }) => {
  return <Root>{children}</Root>
}

export default Card

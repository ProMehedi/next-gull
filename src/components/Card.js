import { Paper, styled } from '@material-ui/core'

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  boxShadow: '0 0 0',
  borderRadius: theme.shape.round,
  margin: theme.spacing(1),
}))

const Card = ({ children }) => {
  return <Root>{children}</Root>
}

export default Card

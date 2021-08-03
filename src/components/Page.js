import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import Meta from './Meta'

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title, ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Meta title={title} />
    {children}
  </Box>
))

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Page

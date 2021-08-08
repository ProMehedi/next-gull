import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../src/ProTip'
import Link from '../src/components/Link'
import Copyright from '../src/Copyright'
import Page from '../src/components/Page'
import DashboardLayout from '../src/layouts/dashboard'

export default function Index() {
  return (
    <DashboardLayout>
      <Page>
        <Container maxWidth='sm'>
          <Box sx={{ my: 4 }}>
            <Typography variant='h4' component='h1' gutterBottom>
              Next.js v5-beta example
            </Typography>
            <Link href='/about' color='secondary'>
              Go to the about page
            </Link>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </Page>
    </DashboardLayout>
  )
}

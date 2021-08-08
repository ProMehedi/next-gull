import Page from '../src/components/Page'
import DashboardLayout from '../src/layouts/dashboard'
import StatsCard from '../src/components/StatsCard'
import stats from '../data/stats'
import { Grid } from '@material-ui/core'

export default function Index() {
  return (
    <DashboardLayout>
      <Page>
        <Grid container>
          {stats.map((item) => (
            <Grid item md={4} lg={3} sm={6} xs={12} key={item.id}>
              <StatsCard
                variant={item.variant}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Page>
    </DashboardLayout>
  )
}

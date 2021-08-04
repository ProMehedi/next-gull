import { alpha, Box, Input, InputAdornment, styled } from '@material-ui/core'
import { Search } from '@material-ui/icons'

const APPBAR_MOBILE = 40
const APPBAR_DESKTOP = 50
const SEARCHBAR_MOBILE = 300
const SEARCHBAR_DESKTOP = 500

const Root = styled('div')(({ theme }) => ({
  width: SEARCHBAR_MOBILE,
  display: 'flex',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 2),
  borderRadius: theme.shape.round,
  // boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.white.main,
  [theme.breakpoints.up('md')]: {
    width: SEARCHBAR_DESKTOP,
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 3),
  },
}))

const SearchIcon = styled(Search)(({ theme }) => ({
  color: theme.palette.black.light,
}))

const DashboardSearchBox = () => {
  return (
    <Root>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder='Search…'
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
        sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
      />
    </Root>
  )
}

export default DashboardSearchBox

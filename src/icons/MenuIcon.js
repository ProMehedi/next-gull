import { SvgIcon } from '@material-ui/core'

const MenuIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <g fill='currentColor'>
        <path d='M1 6.5H17' stroke='#663399' strokeLinecap='round' />
        <path d='M1 12.5H17' stroke='#663399' strokeLinecap='round' />
        <path d='M1 0.5H17' stroke='#663399' strokeLinecap='round' />
      </g>
    </SvgIcon>
  )
}

export default MenuIcon

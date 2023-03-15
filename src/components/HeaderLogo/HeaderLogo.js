import { Box } from '@material-ui/core'
import React from 'react'
import Logo from '../../assets/Branding Assets/brand-drive logo-01.svg'
import { useStyle } from '../HeaderLogo/HeaderLogo.style'

const HeaderLogo = () => {
    const classes = useStyle();
  return (
    <Box>
      <img className={classes.child} src={Logo} alt="Logo" />
    </Box>
  )
}

export default HeaderLogo

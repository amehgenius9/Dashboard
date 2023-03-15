import React from 'react'
import { Box } from '@material-ui/core'
import { useStyle } from './Header.style'
import HeaderDropdown from '../HeaderDropdown';
import HeaderButton from '../HeaderButton';

const Header = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <HeaderDropdown />
      <HeaderButton />
    </Box>
  )
}

export default Header

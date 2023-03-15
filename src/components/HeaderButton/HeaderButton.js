import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './HeaderButton.style'
import AirplanemodeActiveOutlinedIcon from '@material-ui/icons/AirplanemodeActiveOutlined';
import SeachIcon from '../SeachIcon';
import FlareIcon from '@material-ui/icons/Flare';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import HeaderLogo from '../HeaderLogo';

const HeaderButton = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Button variant='contained' size='small' className={classes.btn} endIcon={<AirplanemodeActiveOutlinedIcon color='primary' />}>
        <Typography variant='paragraph' className={classes.text}>
            upgrade plan
        </Typography>
      </Button>
      <SeachIcon />
      <FlareIcon />
      <ToggleOffIcon />
      <HeaderLogo />
    </Box>
  )
}

export default HeaderButton

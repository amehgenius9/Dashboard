import { Box, Typography } from '@material-ui/core'
import React from 'react'
import SettingsCellOutlinedIcon from '@material-ui/icons/SettingsCellOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStyle } from '../HeaderDropdown/HeaderDropdown.style';


const HeaderDropdown = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
        <SettingsCellOutlinedIcon />
        <Typography variant='paragraph' className={classes.child}>
            lagos mainland <span>HQ</span>
        </Typography>
        <Typography variant='paragraph' className={classes.child2}>HQ</Typography>
        <ExpandMoreOutlinedIcon />
    </Box>
  )
}

export default HeaderDropdown

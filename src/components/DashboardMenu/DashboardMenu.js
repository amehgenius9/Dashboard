import { Box } from '@material-ui/core'
import React from 'react'
import DashboardMenuLeft from '../DashboardMenuLeft/DashboardMenuLeft';
import DashboardMenuRight from '../DashboardMenuRight/DashboardMenuRight';
import { useStyle } from './DashboardMenu.style'

const DashboardMenu = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
        <DashboardMenuLeft />
        <DashboardMenuRight />
    </Box>
  )
}

export default DashboardMenu

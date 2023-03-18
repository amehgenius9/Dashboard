import { Box } from '@material-ui/core'
import React from 'react'
import AppBar from '../AppBar';
import DashboardMenu from '../DashboardMenu';
import { useStyle } from './DashboardBody.style'

const DashboardBody = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
        <AppBar />
        <DashboardMenu />
    </Box>
  )
}

export default DashboardBody

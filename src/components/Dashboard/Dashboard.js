import { Box } from '@material-ui/core'
import React from 'react'
import SideNavigation from './components/SideNavigation';
import DashboardBody from './components/DashboardBody';
import { useStyle } from '../Dashboard/Dashboard.style';

const Dashboard = () => { 
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <SideNavigation />
      <DashboardBody />
    </Box>
  )
}

export default Dashboard
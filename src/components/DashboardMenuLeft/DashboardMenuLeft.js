import { Box } from '@material-ui/core'
import React from 'react'
import DashboardLocationButton from '../DashboardLocationButton';
import DashboardRevenueAndLink from '../DashboardRavenueAndLink/DashboardRevenueAndLink';
import DashboardWallet from '../DashboardWallet';
import RevenueGraph from '../RevenueGraph';
import { useStyle } from './DashboardMenuLeft.style'

const DashboardMenuLeft = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <DashboardWallet />
      <DashboardLocationButton />
      <DashboardRevenueAndLink />
      <RevenueGraph />
    </Box>
  )
}

export default DashboardMenuLeft

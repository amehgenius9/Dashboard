import { Box, } from '@material-ui/core'
import React from 'react'
import DashboardProfitAndLossSection from '../DashboardProfitAndLossSection';
import DashboardImage from '../DashboardImage';
// import DashboardPieChartSection from '../DashboardPieChartSection';
import { useStyle } from './DashboardMenuRight.style'
import DashboardExpenseBreakdown from '../DashboardExpenseBreakdown/DashboardExpenseBreakdown';

const DashboardMenuRight = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <DashboardImage />
      <DashboardProfitAndLossSection Description='profit & loss' amount='#2,000,000.00' more='view more' />
      <DashboardExpenseBreakdown />
    </Box>
  )
}

export default DashboardMenuRight

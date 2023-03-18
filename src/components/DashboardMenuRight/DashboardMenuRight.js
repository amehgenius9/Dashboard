import { Box, } from '@material-ui/core'
import React from 'react'
import DashboardColumnChartSection from '../DashboardColumnChartSection';
import DashboardImage from '../DashboardImage';
import DashboardPieChartSection from '../DashboardPieChartSection';
import { useStyle } from './DashboardMenuRight.style'

const DashboardMenuRight = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <DashboardImage />
      <DashboardColumnChartSection />
      <DashboardPieChartSection />
    </Box>
  )
}

export default DashboardMenuRight

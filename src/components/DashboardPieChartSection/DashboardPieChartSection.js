import { Box } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardPieChartSection.style'

const DashboardPieChartSection = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <p>Hey</p>
      <p>Jude</p>
    </Box>
  )
}

export default DashboardPieChartSection

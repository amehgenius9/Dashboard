import { Box } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardColumnSection.style'

const DashboardColumnChartSection = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root} >
      <p>Hello</p>
      <p>Dude</p>
    </Box>
  )
}

export default DashboardColumnChartSection

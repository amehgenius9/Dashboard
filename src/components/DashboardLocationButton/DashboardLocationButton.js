import { Box } from '@material-ui/core'
import React from 'react'
import DashboardDateButton from '../DashboardDateButton';
import HeaderDropdown from '../HeaderDropdown';
import { useStyle } from './DashboardLocationButton.style'

const DashboardLocationButton = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <HeaderDropdown />
      <DashboardDateButton />
    </Box>
  )
}

export default DashboardLocationButton

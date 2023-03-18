import { Box } from '@material-ui/core'
import React from 'react'
import { useStyle } from './DashboardImage.style'
import DashboardImg from '../../assets/Mobile App Ad@2x.png'

const DashboardImage = () => {
    const classes = useStyle();
  return (
    <Box>
      <img className={classes.root} src={DashboardImg} alt="dashboardImage" />
    </Box>
  )
}

export default DashboardImage

import { Box } from '@material-ui/core'
import React from 'react'
import BrandDriveLink from '../BrandDriveLink'
import DashboardRevenue from '../DashboardRevenue'
import { useStyle } from './DashboardRevenueAndLink.style'

const DashboardRevenueAndLink = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
        <DashboardRevenue revenue='revenue goal' amount='$2,000,000.00' />
        <BrandDriveLink />
    </Box>
  )
}

export default DashboardRevenueAndLink

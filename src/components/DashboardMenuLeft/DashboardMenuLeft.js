import { Box } from '@material-ui/core'
import React from 'react'
import DashboardWallet from '../DashboardWallet';
import { useStyle } from './DashboardMenuLeft.style'

const DashboardMenuLeft = () => {
    const classes = useStyle();
  return (
    <Box className={classes.root}>
      <DashboardWallet />
      <DashboardWallet />
      <DashboardWallet />
      <DashboardWallet />
    </Box>
  )
}

export default DashboardMenuLeft
